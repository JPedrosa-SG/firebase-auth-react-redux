import { render, screen } from "../../setupTests";
import Footer from "./Footer";

test("renders top logo and bottom text", () => {
  render(<Footer />);
  const element = screen.getAllByText(/daycare/i);
  expect(element.length).toBe(2);
});

/* test("renders the image", () => {
  render(<Footer />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});
 */
