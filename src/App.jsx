import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen gap-4" style={{backgroundColor:color}}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>{setColor("#457B9D")}}>
          Blue
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>{setColor("#F4A261")}}>
          Yellow
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>{setColor("#2A9D8F")}}>
          Green
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>{setColor("#E63946")}}>
          Red
        </button>
      </div>
    </>
  );
}

export default App;
