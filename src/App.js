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
    <Grid.Provider
      padding="20px"
      breakpoints={{ mobile: "-500", desktop: "+501" }}
    >
      <List direction="vertical">
        <Title onClick={handleClickTitleButton}>Title</Title>
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
  background: #fff;
  border: 1px solid black;
  font-family: sans-serif;
`;

const Title = styled(Grid.Box)`
  color: red;
`;

const Item = styled(Grid.Box)`
  color: green;
`;
