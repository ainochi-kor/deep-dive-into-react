import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "@/components/List";

describe("List component", () => {
  it("List 컴포넌트가 정상적으로 생성된다.", () => {
    render(<List />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeDefined();
  });

  it("List 컴포넌트의 자식 엘리먼트는 HTMLLIElement 이다.", () => {
    render(<List />);
    const listElement = screen.getByRole("list");
    const listChildren = listElement.children;
  });
});
