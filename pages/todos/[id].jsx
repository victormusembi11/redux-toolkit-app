import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import TodoAPI from "@/lib/todo/todo";

const Todo = () => {
  const [todo, setTodo] = useState();
  const router = useRouter();
  const { id } = router.query;

  const getTodo = async (id) => {
    const todo = await TodoAPI.getTodoById(id);
    return todo;
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const todo = await getTodo(parseInt(id));
        setTodo(todo);
      })();
    }
  }, [id]);

  console.log(todo);

  return (
    <>
      <div>
        {todo ? (
          <div>
            <h1>{todo.title}</h1>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Todo;
