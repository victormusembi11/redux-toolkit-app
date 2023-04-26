import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "@/lib/features/todos/todoSlice";

import TodoAPI from "@/lib/todo/todo";

const Todo = () => {
  const [todoId, setTodoId] = useState();
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await TodoAPI.getTodoById(todoId);
    dispatch(updateTodo(data));
  };

  return (
    <>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter todo ID"
            onChange={(event) => {
              setTodoId(event.target.value);
              console.log(event.target.value);
            }}
          />
          <button type="submit">submit</button>
        </form>
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      </div>
    </>
  );
};

export default Todo;
