import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "hedron";

export const App = () => {
  const [title, setTitle] = useState("Title");
  const [isListVisible, setIsListVisible] = useState(false);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.npoint.io/63ed3a290e62850efefd"
      );
      const result = await response.json();
      const newList = result.list.map((item) => ({
        ...item,
        // eslint-disable-next-line no-new-func
        callback: new Function("return " + item.callback)(),
      }));

      setTitle(result.name);
      setIsListVisible(result.active);
      setButtons(newList);
    };

    fetchData();
  }, []);

  const handleClickTitleButton = () => {
    setIsListVisible((state) => !state);
  };

  return (
    <Grid.Provider breakpoints={{ mobile: "-500", desktop: "+501" }}>
      <List
        isListVisible={isListVisible}
        direction="vertical"
        mobile={{ width: "96vw" }}
        desktop={{ width: "20em" }}
      >
        <Title isListVisible={isListVisible} onClick={handleClickTitleButton}>
          {title}
        </Title>
        {isListVisible &&
          buttons.map((button) => {
            if (!button.url && !button.callback) {
              return (
                <Item key={button.id} disabled>
                  {button.name}
                </Item>
              );
            } else {
              return (
                <Link key={button.id} href={button.url} target="_blank">
                  <Item onClick={button.callback}>{button.name}</Item>
                </Link>
              );
            }
          })}
      </List>
    </Grid.Provider>
  );
};

const List = styled(Grid.Bounds)`
  font-family: sans-serif;
  overflow: hidden;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0px 0px 60px rgba(255, 255, 255, 0.8);
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Item = styled(Grid.Box)`
  color: ${(props) => (props.disabled ? "#ccc" : "000")};
  height: 2em;
  font-size: 1em;
  cursor: pointer;
  background: #fff;
  padding-left: 1em;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#df9047")};
    color: #fff;
  }

  &:active {
    background: #fff;
    color: ${(props) => (props.disabled ? "#ccc" : "#df9047")};
  }
`;

const Title = styled(Item)`
  text-align: center;
  color: #df9047;
  border: 2px solid #df9047;
  box-sizing: border-box;
  border-radius: 1em;
  padding-left: 0;
`;
