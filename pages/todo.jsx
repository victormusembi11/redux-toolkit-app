import TodoAPI from "@/lib/todo/todo";
import { useState } from "react";

const Todo = () => {
  const [todoId, setTodoId] = useState();
  const [todo, setTodo] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await TodoAPI.getTodoById(todoId);
    console.log(data);
    setTodo(data);
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo ID"
          onChange={(event) => setTodoId(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Todo;
