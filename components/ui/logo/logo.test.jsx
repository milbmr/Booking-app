import { render, screen } from "@testing-library/react";
import Logo from "./logo";
import "@testing-library/jest-dom";

describe("Logo", () => {
  it("renders a logo", () => {
    render(<Logo />);

    const logo = screen.getByRole("link", {
      current: false,
    });

    expect(logo).toBeInTheDocument();
  });
});
