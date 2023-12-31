import AddTodo from "./components/Addtodo"
import Nav from "./components/Nav"
import Todos from "./components/Todos"
import "./index.css";
import './App.css'
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <div className={ `${isDarkMode ? "bg-black text-white" : "bg-white"} `}>
      <button className={ `${isDarkMode ? "text-zinc-200 bg-white" : "bg-black text-gray-100 "} p-2 rounded-2xl mr-3 mt-2  float-right`} onClick={toggleDarkMode}>{isDarkMode ? <MdDarkMode />: <MdWbSunny />  }</button>
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h4 className="text-5xl font-sans max-[375px]:text-sky-400">Todo React-Typescript</h4>
      <Nav/>
      <AddTodo/>
      <Todos/>
      <h1 className="animate-hello">Hello</h1>
      <h2 className="animate-im-delay">Im delay</h2>
      <h3 className="animate-im-too-delay">im Tooo delay</h3>

    </div>
    </div>
  )
}

export default App
