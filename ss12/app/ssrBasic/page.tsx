import React from 'react'

async function fetchData(){
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let data = response.json()
    return data;
  
  }
  fetchData()
export default async function page() {
    let data = await fetchData();    
  return (
    <div>
        <title>Danh sách bài viết</title>
        <ul>
            {data.map((item:any)=>{
                return <li>{item.title}</li>
            })}
        </ul>
    </div>
  )
}
