import tickImage from '../assets/Images/double-tick.png'
import plusImage from '../assets/Images/plus.png'
import noteImage from '../assets/Images/notes.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/action';

const Header = () => {

    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const handleInputChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        dispatch(added(input))
        setInput("")
    }


    const allCompletedHandler = ()=>{
        dispatch(allCompleted())
    }


    const allClearCompletedHandler = ()=>{
        dispatch(clearCompleted())
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center bg-gray-100 rounded-md py-4 px-4'>
              <img className='h-6 w-6' src={noteImage} alt="Add Image" />
              <input className='w-full border-none outline-none text-lg bg-gray-100 text-gray-500' type="text" placeholder="Enter your todo" onChange={handleInputChange}  value={input} />

              <button
              type='submit' className='w-10 h-10 pl-10 bg-cover bg-no-repeat'
               style={{backgroundImage: `url("${plusImage}")`}}
              > 

              </button>
            
        </form>
       
        <ul className='flex justify-between text-xs text-gray-500 my-4'>
            <li className='flex space-x-1 cursor-pointer' onClick={allCompletedHandler}>
                <img className='w-4 h-4' src={tickImage} alt="Complete All task" />
                <span >Complete All Task</span>
            </li>
            <li className='cursor-pointer' onClick={allClearCompletedHandler}>Clear Complete</li>
        </ul>
        </div>
    );
};

export default Header;