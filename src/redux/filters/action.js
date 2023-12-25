import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"

export const statusChange = (status)=>{
    return {
        type:STATUSCHANGE,
        payload:status
    }
}


export const colorChange = (color, changeType)=>{
    return {
        type:COLORCHANGE,
        payload:{
            color,
            changeType
        }
    }
}