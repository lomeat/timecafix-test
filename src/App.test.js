import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { App, Button } from "./App";

// Setup/Teardown

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Tests

it("renders without crashing", () => {
  act(() => {
    render(<App />, container);
  });
});

it("renders dropdown data", async () => {
  const fakeData = {
    name: "test",
    callback: () => {},
    url: "https://google.com/",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    })
  );

  await act(async () => {
    render(<Button {...fakeData} />, container);
  });

  expect(container.querySelector("a").href).toBe(fakeData.url);
  expect(container.querySelector("span").textContent).toBe(fakeData.name);

  global.fetch.mockRestore();
});
