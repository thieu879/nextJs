"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const initialProducts = await fetchProducts();
        setProducts(initialProducts);
      } catch (error) {
        console.error(error);
      }
    }
    loadProducts();
  }, []);

  const filterProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api", {
        params: {
          minPrice: minPrice || 0,
          maxPrice: maxPrice,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price..."
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price..."
          />
        </label>
        <button onClick={filterProducts}>Filter</button>
      </div>
      <ProductList products={products} />
    </div>
  );
}

function ProductList({ products}:any) {
  return (
    <div>
      {products.map((product:any) => (
        <div
          key={product.id}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
