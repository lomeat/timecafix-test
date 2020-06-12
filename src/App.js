import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "hedron";

import { ReactComponent as CircleSVG } from "./circle.svg";

export const Button = ({ name, url, callback }) => (
  <Link href={url} target="_blank">
    <StButton isDisable={!url && !callback} onClick={callback}>
      <StCircleSVG />
      <span>{name}</span>
    </StButton>
  </Link>
);

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

  const toggleListVisibility = () => {
    setIsListVisible((state) => !state);
  };

  return (
    <Grid.Provider breakpoints={{ mobile: "-500", desktop: "+501" }}>
      <List
        direction="vertical"
        mobile={{ width: "96vw" }}
        desktop={{ width: "20em" }}
      >
        <Title onClick={toggleListVisibility}>
          <span>{title}</span>
          <StCircleSVG />
        </Title>
        {isListVisible &&
          buttons.map((button) => <Button key={button.id} {...button} />)}
      </List>
    </Grid.Provider>
  );
};

const StCircleSVG = styled(CircleSVG)`
  fill: inherit;
  width: 1em;
  height: 1em;
  margin-right: 1em;
`;

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

const StButton = styled(Grid.Box)`
  color: ${(props) => (props.isDisable ? "#ccc" : "000")};
  fill: ${(props) => (props.isDisable ? "#ccc" : "#df9047")};
  height: 2em;
  font-size: 1em;
  cursor: pointer;
  background: #fff;
  padding-left: 1em;
  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => (props.isDisable ? "#ccc" : "#df9047")};
    color: #fff;
    fill: #fff;
  }

  &:active {
    background: #fff;
    color: ${(props) => (props.isDisable ? "#ccc" : "#df9047")};
    fill: ${(props) => (props.isDisable ? "#ccc" : "#df9047")};
  }
`;

const Title = styled(StButton)`
  color: #df9047;
  border: 2px solid #df9047;
  box-sizing: border-box;
  border-radius: 1em;
  padding-left: 0;
  position: relative;
  justify-content: center;

  svg {
    position: absolute;
    top: 0.4em;
    right: 1em;
  }
`;
