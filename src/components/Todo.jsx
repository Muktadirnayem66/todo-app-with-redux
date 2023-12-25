import { useDispatch } from 'react-redux';
import cancelImage from '../assets/Images/cancel.png'
import { colorselected, deleted, toggled } from '../redux/todos/action';


const Todo = ({todo}) => {
    const {id, completed, text, color} = todo 
    const dispatch = useDispatch()

    const statusChange = (toId)=>{
        dispatch(toggled(toId));
        
    }

    const handleDeleted = (todoId)=>{
        dispatch(deleted(todoId))
    }

    const handleColorSelected = (id, color)=>{
        dispatch(colorselected(id, color));
    }
    return (
        <div className='flex justify-start items-center p-2 hover:bg-gray-100 hover: transition-all space-x-4 border-b border-gray-400/20 last:border-0'>

           <div className='border-2 rounded-full w-5 h-5 bg-white border-gray-400 flex justify-center items-center mr-2'>
           <input className=' opacity-0 absolute rounded-full' checked={completed} 
           onChange={()=>(statusChange(id))}  type='checkbox'/>
          
          {completed &&  <svg className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>}
        
           </div>
            <div className={` select-none flex-1 ${completed && "line-through"} `}>
                {text}
            </div>
            
            <div className={`h-4 w-4 rounded-full border-2 ml-auto cursor-pointer  hover:bg-green-500 border-green-500 ${color === "green" && "bg-green-500"} `} onClick={()=>handleColorSelected(id, "green")}>

            </div>

            <div className={`h-4 w-4 rounded-full border-2 ml-auto cursor-pointer  hover:bg-yellow-500 border-yellow-500  ${color === "yellow" && "bg-yellow-500"} `} onClick={()=>handleColorSelected(id, "yellow")} >

            </div>

            <div className= {`h-4 w-4 rounded-full border-2 ml-auto cursor-pointer  hover:bg-red-500 border-red-500 ${color === "red" && "bg-red-500"}`} onClick={()=>handleColorSelected(id, "red")}>

            </div>

            <img src={cancelImage} alt="Cancel" className=' w-4 h-4 ml-2 cursor-pointer' onClick={()=>handleDeleted(id)} />
            
        </div>
    );
};

export default Todo;