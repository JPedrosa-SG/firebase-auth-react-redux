// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import handleUser from "./reducers/users";
import { createStore } from "redux";

const store = createStore(
  handleUser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

afterAll(() => jest.clearAllMocks());

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

export { customRender as render };
