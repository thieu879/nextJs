"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((item:any) => (
        <div
          key={item.id}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h2>{item.name}</h2>
          <p>Email: {item.email}</p>
          <p>
            Address:{" "}
            {`${item.address.street}, ${item.address.city}, ${item.address.zipcode}`}
          </p>
        </div>
      ))}
    </div>
  );
}
