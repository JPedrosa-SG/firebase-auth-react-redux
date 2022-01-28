import { render, screen } from "../../setupTests";
import NavBar from "./NavBar";

test("renders daycare logo in NavBar", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/daycare/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders login and register buttons in NavBar", () => {
  render(<NavBar />);
  const buttonElement = screen.getAllByRole("button");
  expect(buttonElement.length).toBe(2);
});

/* test("renders logout if a user is logged in", async () => {
  render(<NavBar />);
  const user = true;
  const buttonElement = await screen.findByText(/logout/i);
  expect(buttonElement).toBeInTheDocument();
}); */
