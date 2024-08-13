
import { Inter } from "next/font/google";
import Bt4 from "./components/Bt4";
import Bt5 from "./components/Bt5";
import Bt6 from "./components/Bt6";
import Bt7 from "./components/Bt7";
import Bt8 from "./components/Bt8";
import Bt9 from "./components/Bt9";
import Bt10 from "./components/Bt10";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Bt3:</h1>
      <div>Họ Và Tên: Nguyễn Gia Thiều</div>
      <h1>Bt4:</h1>
      <Bt4></Bt4>
      <h1>Bt5:</h1>
      <Bt5></Bt5>
      <h1>Bt6:</h1>
      <Bt6></Bt6>
      <h1>Bt7:</h1>
      <Bt7></Bt7>
      <h1>Bt8:</h1>
      <Bt8></Bt8>
      <h1>Bt9:</h1>
      <Bt9></Bt9>
      <h1>Bt10:</h1>
      <Bt10></Bt10>
    </>
  );
}
