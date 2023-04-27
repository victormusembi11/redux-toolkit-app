import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodos } from "@/lib/features/todos/todosSlice";

import TodoAPI from "@/lib/todo/todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await TodoAPI.getAllTodos();
      dispatch(updateTodos(data));
    };
    fetchTodos();
  }, [dispatch]);

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.userId}>
            <li>{todo.title}</li>
            <li>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </li>
            <br />
          </ul>
        );
      })}
    </>
  );
};

export default TodoList;
