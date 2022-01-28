import { render, screen } from "../../setupTests";
import HomeDog from "./HomeDog";

test("renders the button", () => {
  render(<HomeDog />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("renders the image", () => {
  render(<HomeDog />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});
