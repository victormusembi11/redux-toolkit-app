import defaultFetch from "@/pages/api/axios/axios";

async function getTodoById(id) {
  const response = await defaultFetch(`/todos/${id}`);

  if (response.status === 200) {
    return response.data;
  }

  console.log("error fetching data");
}

const TodoAPI = {
  getTodoById,
};

export default TodoAPI;
