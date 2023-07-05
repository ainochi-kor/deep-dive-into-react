import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "@/components/Input";

describe("Input component", () => {
  it("Input 컴포넌트가 정상적으로 생성된다.", () => {
    const { container } = render(<Input />);
    expect(container).not.toBeRequired(); // 필수 인지 확인
  });
});
