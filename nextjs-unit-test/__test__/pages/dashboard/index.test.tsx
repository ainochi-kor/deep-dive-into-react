import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "@/pages/dashboard";
import exp from "constants";

describe("Dashboard page", () => {
  it("should render properly", () => {
    render(<Dashboard />);
    const header = screen.getByRole("heading");
    const headerText = "Hello World";

    expect(header).toHaveTextContent(headerText);
  });

  it("Should have a disabled button", () => {
    render(<Dashboard />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeDisabled();
  });

  it("Should have a p tag with className of blue", () => {
    render(<Dashboard />);

    const pElement = screen.getByTestId("pragarph-blue");

    expect(pElement).toHaveClass("blue");
    expect(pElement).toHaveTextContent("This is our paragraph");
  });
});
