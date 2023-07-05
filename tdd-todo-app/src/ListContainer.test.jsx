import { render } from "@testing-library/react";
import { useSelector } from "react-redux";

import ListContainer from "./ListContainer";
import tasks from "../data/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("renders task", () => {
    const { container } = render(<ListContainer />);
    expect(container).toHaveTextContent("아무 일도 하기 싫다.");
  });
});
