import Image from "next/image";
import React from "react";
import "./bt10.scss";

export default function Bt10() {
  return (
    <div className="bt10-container">
      <div>
        <Image
          style={{margin:"auto"}}
          src={"https://thuthuatnhanh.com/wp-content/uploads/2022/08/ao-thun-in-hinh-theo-yeu-cau.jpg"}
          alt="loading..."
          width={100}
          height={100}
        />
        <b>Áo Phông Nam</b>
        <p>Áo phông nam mát mẻ</p>
        <button>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}
