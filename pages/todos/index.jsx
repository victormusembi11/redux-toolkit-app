import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodos } from "@/lib/features/todos/todosSlice";
import Link from "next/link";

import TodoAPI from "@/lib/todo/todo";

const TodoList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await TodoAPI.getAllTodos();
      dispatch(updateTodos(data));
    };
    fetchTodos();
    setIsLoading(false);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo) => {
          return (
            <ul key={todo.userId}>
              <li>
                <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
              </li>
              <li>
                <p>{todo.completed ? "Completed" : "Not Completed"}</p>
              </li>
              <br />
            </ul>
          );
        })
      )}
    </>
  );
};

export default TodoList;
