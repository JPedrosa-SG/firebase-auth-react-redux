import { render, screen } from "@testing-library/react"; //see setupTests for a custom wrapper with redux and browser providers
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
