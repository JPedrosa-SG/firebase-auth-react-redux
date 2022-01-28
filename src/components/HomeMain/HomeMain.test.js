import { render, screen } from "../../setupTests";
import HomeMain from "./HomeMain";

test("renders both buttons", () => {
  render(<HomeMain />);
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements.length).toBe(2);
});

test("renders the title", () => {
  render(<HomeMain />);
  const paraElements = screen.getByRole("heading");
  expect(paraElements).toBeInTheDocument();
});
