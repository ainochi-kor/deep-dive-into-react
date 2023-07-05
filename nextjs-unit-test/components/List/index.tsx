interface ListParam {
  taskList?: string[];
}

const List: React.FC<ListParam> = ({ taskList }) => {
  return (
    <ul>
      {taskList?.map((task, index) => {
        return <li key={index}>{task}</li>;
      })}
    </ul>
  );
};
export default List;

{/* <main className="w-screen h-screen flex items-center justify-center">
<form onSubmit={onSubmit}>
  <input type="text" placeholder="username" />
  <input type="password" placeholder="username" />
  <button type="submit">Login</button>
</form>
</main> */}