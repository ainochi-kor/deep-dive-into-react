import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/pages/login/Login";

describe("Login page", () => {
  it("ID Input, PW Input, Submit Button이 생성되어 있는지 확인", () => {
    const { container } = render(<Login />);
    const idInput = container.querySelector("#id");
    const pwInput = container.querySelector("#password");
    const button = container.querySelector("button");

    expect(idInput).toBeInTheDocument();
    expect(pwInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    
  });

  it("submit가 동작", () => {
    const { container } = render(<Login />);
    const buttonElement = container.querySelector("button");
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }

  });
});
