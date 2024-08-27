import React from 'react'

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json()
    return data
}
export default async function page() {
  const data = await getData()
  return (
    <div>
        <h1>List of Posts</h1>
        {data.map((item:any)=>{
            return <div key={item.id}>{item.title}</div>;
        })}
    </div>
  )
}
