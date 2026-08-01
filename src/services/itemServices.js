export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3001/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task,
      date,
    }),
  });

  const data = await response.json();

  console.log("Server Response:", data);

  return mapServerItemToLocalItem(data.todoItem);
};

export  const getItemFromServer = async () => {
  const response = await fetch(`http://localhost:3001/api/todo`);
  
  const data = await response.json();
  
  console.log("Server Response:", data);
  
  return data.todoItems.map(mapServerItemToLocalItem);
}

const mapServerItemToLocalItem = (todoItem) => {
  if (!todoItem) return null;

  return {
    id: todoItem._id,
    name: todoItem.task,
    dueDate: todoItem.date ? todoItem.date.split("T")[0] : "", // Date format (YYYY-MM-DD)
    completed: todoItem.completed,
    createdAt: todoItem.createdAt,
    updatedAt: todoItem.updatedAt
  };
};


export  const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`http://localhost:3001/api/todo/${id}/completed`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("Server Response:", data);

  return mapServerItemToLocalItem(data.todoItem);

}

export const deleteItemFromServer = async (id) => {
  await fetch(`http://localhost:3001/api/todo/${id}`, {
    method: "DELETE",
  });

  // const data = await response.json();


  return id;
};