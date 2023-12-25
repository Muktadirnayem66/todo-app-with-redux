import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";


const nextTodId = (todos)=>{
    const maxid = todos.reduce((max, todo)=>Math.max(todo.id, max), -1)
    return maxid + 1
}

const todoReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodId(state),
                    text:action.payload,
                    completed:false,

                }
            ]


            case DELETED:
                return state.filter((todo)=>todo.id !== action.payload)

               case TOGGLED:
                return state.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo
                    }
                    return {
                        ...todo,
                        completed:!todo.completed

                    }
                })


                case COLORSELECTED:
                        const {color, todoId} = action.payload
                        return state.map((todo)=>{
                            if(todo.id !== todoId){
                                return todo
                            }
                            return {
                                ...todo,
                                color
                            }
                        })

                        case ALLCOMPLETED:
                            return state.map((todo)=>{
                               return {
                                ...todo,
                                completed:true
                               }
                            })


                            case CLEARCOMPLETED:{
                                return state.filter((todo)=>!todo.completed)
                            }
                
                              
    
        default:
            return state;
    }

};

export default todoReducer;