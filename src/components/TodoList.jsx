import { useSelector } from "react-redux";
import Todo from "./Todo";



const TodoList = () => {
    
    const todos = useSelector((state)=>state.todos)

    const filter = useSelector((state)=>state.filters)

    return (
        <div className="mt-2 text-gray-700 overflow-y-auto text-sm max-h-[300px]">
            
            {todos
            .filter((item)=>{
                const {status} = filter
                switch (status) {
                    case "Complete":
                        return item.completed
                        
                       case "Incomplete":
                        return !item.completed
                
                    default:
                        return true;
                }
            })
            .filter((todo)=>{
                const {colors} = filter
                if(colors.length > 0){
                    return colors.includes(todo?.color)
                }
                return true

            })
            .map((todo)=><Todo todo={todo} key={todo.id}/>)}
            
        </div>
    );
};

export default TodoList;