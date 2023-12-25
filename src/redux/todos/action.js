import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"


export const added =(todoText)=>{
    return {
        type:ADDED,
        payload:todoText
    }
}

export const deleted = (todoId)=>{
    return {
        type:DELETED,
        payload:todoId
    }
}

export const toggled = (todoId)=>{
    return {
        type:TOGGLED,
        payload:todoId
    }
}

export const colorselected = (todoId, color)=>{
    return {
        type:COLORSELECTED,
        payload:{
            todoId,
            color
        }
    }
}

export const allCompleted = ()=>{
    return {
        type:ALLCOMPLETED
    }
}


export const clearCompleted = ()=>{
    return {
        type:CLEARCOMPLETED
    }
}