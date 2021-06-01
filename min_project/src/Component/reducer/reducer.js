import { combineReducers} from'redux'
import AddItemReducer from './AddItemReducer'
import TodolistReducer from './TodlistReducer'
import Unchack from './UnchackReducer'

// export default combineReducers({
//     list:AddItemReducer,
//     chaked:TodolistReducer,
    
// })

function reducer(state = {},action){
    switch(action.type){
        case 'ADD_ITEM':{
            const newState={...state,list:[...state.list,action.payload]}
            return newState
        }
       
        default:{
            return state
        }
    }
}
export default reducer


 // case 'ADD_iTEM':{
        //     const index = action.payload
        //     const newState={...state,list:[...state.list,action.payload]}
        //     return newState
        // }
        // case 'ITEM_CHACK':{  
        //     const newState ={...state,chaked:[...state.chaked,action.payload]}
        //     return newState
        // }
        // case 'UNCHACK_CHACK':{
        //     const newState ={...state, unChack:[...state.unChack,action.payload]}
        //     return newState
        // }
        // case 'DELET_ITEM' :{
        //     const newState ={...state,list:[...state.list.slice(0,action.payload),...state.list.slice(action.payload +1)]}
        //     return newState
        // }
        // case 'FORM':{
        //    const newState ={...state,form:[...state.form,action.payload]}
        //    return newState
        // }