// src/api.js
const API_BASE_URL = "http://code-crafter-api.magicedtech.com:59917/api/todos"; // Adjust if your API has a different base URL
export const getTodos = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const createTodo = async (todo) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const deleteTodo = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
