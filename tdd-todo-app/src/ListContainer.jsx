import "./App.css";
import List from "./List";
import { useSelector } from "react-redux";

function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  return <List tasks={tasks} />;
}

export default ListContainer;
