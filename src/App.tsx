import AddTodo from "./components/Addtodo"
import Nav from "./components/Nav"
import Todos from "./components/Todos"
import "./index.css";
import './App.css'
import { useState } from "react";
function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h4 className="text-5xl font-sans ">Todo React-Typescript</h4>
      <Nav/>
      <AddTodo/>
      <Todos/>
      {/* <h1 className="animate-hello">Hello</h1>
      <h2 className="animate-im-delay">Im delay</h2>
      <h3 className="animate-im-too-delay">im Tooo delay</h3> */}

    </div>
  )
}

export default App
