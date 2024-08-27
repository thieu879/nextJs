import React from "react";

interface User {
  id: number;
  name: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface CombinedData {
  userId: number;
  name: string;
  title: string;
  completed: boolean;
}

const CombinedPage = async () => {
  try {
    const [usersRes, todosRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/todos"),
    ]);

    if (!usersRes.ok || !todosRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const users: User[] = await usersRes.json();
    const todos: Todo[] = await todosRes.json();

    const combinedData: CombinedData[] = todos.map((todo) => {
      const user = users.find((user) => user.id === todo.userId);
      return {
        userId: todo.userId,
        name: user ? user.name : "Unknown",
        title: todo.title,
        completed: todo.completed,
      };
    });
    
    return (
      <div>
        <h1>Combined Data from APIs</h1>
        <ul>
          {combinedData.map((item) => (
            <li key={item.userId + item.title}>
              <strong>{item.name}</strong>: {item.title} (Completed:{" "}
              {item.completed ? "Yes" : "No"})
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error(error)
  }
};

export default CombinedPage;
