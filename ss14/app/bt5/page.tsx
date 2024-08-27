"use client"
import React, { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {products.map((item:any) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price}$</p>
        </div>
      ))}
    </div>
  );
}
