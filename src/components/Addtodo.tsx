import  { FormEvent, useState } from 'react';
import { useTodos } from '../store/todo';

const AddTodo = () => {
    const [todo,setTodo]=useState<string>("");
    const {handleAddToDo} = useTodos();
 
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(todo===""){
          alert('Please enter a task');
        }
        else{
          handleAddToDo(todo)
        }
        setTodo("")
    }

  return (
    <div>
        <form onSubmit={handleFormSubmit} className='flex gap-8'>
            
            <input type="text" className='text-zinc-6 border-2 outline-none border-gray-300 w-[17rem] rounded-sm' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
            <button  className='bg-green-500 text-white px-7 py-1 rounded-sm'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo