import React, { useState } from "react";
import styled from "styled-components";
import Grid from "hedron";

export const App = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const buttons = useState([
    {
      id: Math.random() * 1000,
      name: "My Telegram",
      callback: () => {
        console.log("You already know my telegram contact :D");
      },
      url: "https://t.me/lomeat",
    },
    {
      id: Math.random() * 1000,
      name: "My VK",
      callback: () => {
        console.log(
          "Yeah, its my VK page. There I post soul`s music tracks and create author`s playlists"
        );
      },
      url: "https://vk.com/lomeat",
    },
    {
      id: Math.random() * 1000,
      name: "Example Disabled Button",
      callback: null,
      url: null,
    },
    {
      id: Math.random() * 1000,
      name: "My Art Instagram",
      callback: () => {
        console.log(
          "You just visited page of my hobbie. Sometimes I draw these stickers when feel inspiration of my girl"
        );
      },
      url: "https://instagram.com/lomeat.art",
    },
  ])[0];

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
          Title
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
                <Link href={button.url} target="_blank">
                  <Item key={button.id} onClick={button.callback}>
                    {button.name}
                  </Item>
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
