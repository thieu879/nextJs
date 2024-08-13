import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Bt2() {
  return (
    <div>
      <div className="flex">
        <input
          width="200px"
          type="text"
          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <i className="fa-solid fa-clock absolute left-0 pl-3 mt-[10px]"></i>
        <i className="fa-solid fa-chevron-down absolute left-[245px] mt-[10px]"></i>
      </div>
      <div className="w-[270px] bg-slate-100 p-[10px] mt-[4px]">
        <ul>
          <li className="flex justify-between">
            <p>123</p>
            <input type="checkbox" />
          </li>
          <li className="flex justify-between">
            <p>123</p>
            <input type="checkbox" />
          </li>
          <li className="flex justify-between">
            <p>123</p>
            <input type="checkbox" />
          </li>
          <li className="flex justify-between">
            <p>123</p>
            <input type="checkbox" />
          </li>
        </ul>
        <div className="flex justify-around">
          <button className="border-2 px-[30px]">clear</button>
          <button className="border-2 px-[30px] bg-blue-500">apply</button>
        </div>
      </div>
    </div>
  );
}
