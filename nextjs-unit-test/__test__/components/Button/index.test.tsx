import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/Button";

describe("Button component", () => {
  it("버튼이 정상적으로 생성된다.", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDefined();
  });

  it('"button" 이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.', () => {
    render(<Button />);
    const buttonElement = screen.getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });
});
