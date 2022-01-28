import { render, screen } from "../../setupTests";
import HomeWhoWeAre from "./HomeWhoWeAre";

test("renders the left title", () => {
  render(<HomeWhoWeAre />);
  const textElement = screen.getByText(/who we are/i);
  expect(textElement).toBeInTheDocument();
});

test("renders the paragraph on the right", () => {
  render(<HomeWhoWeAre />);
  const textElement = screen.getByText(/lorem/i);
  expect(textElement).toBeInTheDocument();
});
