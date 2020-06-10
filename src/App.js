import React from "react";
import styled from "styled-components";

export const App = () => {
  const name = "asdasd";

  return <Name>Hello, {name}</Name>;
};

const Name = styled.div`
  font-size: 50px;
`;
