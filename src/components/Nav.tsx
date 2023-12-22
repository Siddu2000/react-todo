
import { Link, useSearchParams } from 'react-router-dom';

const Navbar = () => {
    const [searchParams] = useSearchParams();
    let todos̥Data = searchParams.get("todos");
    
  return (
   <nav className='w-[25rem] flex justify-between items-center border-b-2 border-[#ccc]   '>
    <Link  to="/" className={`${todos̥Data === null ? "active" : ""} text-xl font-bold font-serif text-gray-300 border-b-3 border-transparent active:text-black active:border-b-3 active:border-black hover:border-[#68B984] hover:border-b-4`}> All </Link>
    <Link to="/?todos=active" className={`${todos̥Data === "active" ? "active" : ""} text-xl font-bold font-serif text-gray-300 border-b-3 border-transparent active:text-black active:border-b-3 active:border-black hover:border-[#68B984] hover:border-b-4`}> Active </Link>
    <Link to="/?todos=completed" className={`${todos̥Data === "completed" ? "active" :""} text-xl font-bold font-serif text-gray-300 border-b-3 border-transparen active:text-black active:border-b-3 active:border-black hover:border-[#68B984]  hover:border-b-4`} > Completed </Link>
   </nav>
  )
}

export default Navbar