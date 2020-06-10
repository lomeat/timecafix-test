import React, { useState } from "react";
import styled from "styled-components";
import Grid from "hedron";

export const App = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleClickTitleButton = () => {
    setIsListVisible((state) => !state);
  };

  console.log(isListVisible);

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
        {isListVisible && (
          <>
            <Item>Button 1</Item>
            <Item>Button 2</Item>
            <Item>Button 3</Item>
          </>
        )}
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

const Item = styled(Grid.Box)`
  color: #000;
  height: 2em;
  font-size: 1em;
  cursor: pointer;
  background: #fff;
  padding-left: 1em;

  &:hover {
    background: #df9047;
    color: #fff;
  }

  &:active {
    background: #fff;
    color: #df9047;
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
