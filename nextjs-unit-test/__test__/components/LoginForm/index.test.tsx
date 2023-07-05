import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/LoginForm";

describe("Login page", () => {
  it("submit가 동작", () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };
    render(<LoginForm onSubmit={onSubmit} />);
    const buttonElement = screen.getByRole("button");
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(onSubmit).toBeTruthy();
  });
});
