import defaultFetch from "@/pages/api/axios/axios";

async function getTodoById(id) {
  const response = await defaultFetch(`/todos/${id}`);

  if (response.status === 200) {
    return response.data;
  }

  console.log("error fetching data");
}

async function getAllTodos() {
  const response = await defaultFetch(`/todos/`);

  if (response.status === 200) {
    return response.data;
  }

  console.log("error fetching data");
}

const TodoAPI = {
  getTodoById,
  getAllTodos,
};

export default TodoAPI;
