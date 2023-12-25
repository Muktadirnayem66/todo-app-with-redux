import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filters/action";


const numberOfTask = (no_of_todos)=>{
        switch (no_of_todos) {
            case 0:
                return "No task";
                case 1:
                    return "1 task ";
            default:
                return `${no_of_todos} tasks`;
        }
}

const Footer = () => {
    const todos = useSelector((state)=>state.todos)
    const filter = useSelector((state)=>state.filters)
    const dispatch = useDispatch()

    const {status, colors} = filter



    const remainingTasks = todos.filter((todo)=>!todo.completed).length
    

    const handleStatusChange = (status)=>{
        dispatch(statusChange(status))
        
    }

    const handleColorChange = (color)=>{
        if(colors.includes(color)){
            dispatch(colorChange(color, "removed"))
        }else{
            dispatch(colorChange(color, "added"))
        }
    }

    return (
        <div className="mt-4  text-xs text-gray-500 flex justify-between">

              <p> {numberOfTask(remainingTasks)}  left</p>
            

            <ul className="flex space-x-1 text-xs items-center">
                <li className={`cursor-pointer ${status === "All" && "font-bold"}`} onClick={()=>handleStatusChange("All")} >All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"} `} onClick={()=>handleStatusChange("Incomplete")} >Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Complete" && "font-bold"}`} onClick={()=>handleStatusChange("Complete")} >Complete</li>
                <li></li>
                <li></li>

                <li className={` w-3 h-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${ colors.includes("green") && "bg-green-500"}`} onClick={()=>handleColorChange("green")}></li>


                <li className={`w-3 h-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"} `} onClick={()=>handleColorChange("yellow")}></li>



                <li className={`w-3 h-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`} onClick={()=>handleColorChange("red")} ></li>
                

            </ul>

                      

            
        </div>
    );
};

export default Footer;