import { fireEvent } from "@testing-library/react";
import { render, screen } from "../../setupTests";
import LandingAuth from "./LandingAuth";

test("renders login if valueFromNav is 0", () => {
  render(<LandingAuth valueFromNav={0} />);
  const element = screen.getByText(/Login as a Nursery/i);
  const element2 = screen.getByRole("tab", { name: "Login" });
  expect(element).toBeInTheDocument();
  expect(element2).toHaveClass("Mui-selected");
});

test("changes from login to register", () => {
  render(<LandingAuth valueFromNav={0} />);
  const element = screen.getByRole("tab", { name: "Register" });
  const element2 = screen.getByRole("tab", { name: "Login" });
  fireEvent.click(element);
  const text2 = screen.getByText(/or create a new login/i);
  expect(text2).toBeVisible();
  fireEvent.click(element2);
  const text = screen.getByText(/or use a previously created account/i);
  expect(text).toBeVisible();
  expect(text2).not.toBeInTheDocument();
});

test("if you can write on the input", () => {
  render(<LandingAuth valueFromNav={0} />);
  const element = screen.getByPlaceholderText("Your email");
  fireEvent.change(element, { target: { value: "manel@email.com" } });
  expect(element.value).toBe("manel@email.com");
});

test("login button should be disabled unless both fields have text", () => {
  render(<LandingAuth valueFromNav={0} />);
  const element = screen.getByPlaceholderText("Your email");
  const element1 = screen.getByPlaceholderText("Password");
  const btn = screen.getByRole("button", {
    name: /login/i,
  });
  expect(btn).toBeDisabled();
  fireEvent.change(element, { target: { value: "manel@email.com" } });
  fireEvent.change(element1, { target: { value: "password" } });
  expect(btn).toBeEnabled();
});

test("register button should be disabled unless both fields have text", () => {
  render(<LandingAuth valueFromNav={1} />);
  const element = screen.getByPlaceholderText("Your email");
  const element1 = screen.getByPlaceholderText("Create a password");
  const btn = screen.getByRole("button", {
    name: /register/i,
  });
  expect(btn).toBeDisabled();
  fireEvent.change(element, { target: { value: "manel@email.com" } });
  fireEvent.change(element1, { target: { value: "password" } });
  expect(btn).toBeEnabled();
});
