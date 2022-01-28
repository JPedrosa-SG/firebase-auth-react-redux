import { findByText } from "@testing-library/react";
import { render, screen, fireEvent, within } from "../../setupTests";
import DashBoard from "./DashBoard";
// import App from "../../app";

test("renders both buttons", () => {
  render(<DashBoard />);
  const element = screen.getAllByRole("button");
  expect(element.length).toBe(2);
});

test("clicking on the all time button opens the pop-up", () => {
  render(<DashBoard />);
  const element = screen.getByRole("button", { name: "Without label" });

  fireEvent.mouseDown(element);

  expect(
    screen.getByRole("option", {
      name: /thirty/i,
    })
  ).toBeVisible();
});

test("checks if notifications are rendered without being active", () => {
  render(<DashBoard />);
  const element = screen.getAllByTestId("notification")[0]; //usar index para escolher apenas um do array
  /* element.forEach((notification) => {
  }); */
  expect(element).not.toHaveClass("activeNot");
});

test("toogles the notifications", () => {
  render(<DashBoard />);
  const element = screen.getAllByTestId("notification")[0]; //usar index para escolher apenas um do array
  /* element.forEach((notification) => {
  }); */
  fireEvent.click(element);
  expect(element).toHaveClass("activeNot");
});
