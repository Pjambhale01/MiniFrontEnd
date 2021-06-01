import Action from './action'
function reducer(state ={},action){
    switch (action.type) {
        case Action.ADD_ITEM:{
              const newState = {...state,list:[...state.list,action.payload]}
              return newState
        }
        case Action.DELET_TASK:{
              const newState = {...state,list:[...state.list.slice(0,action.payload),...state.list.slice(action.payload + 1)]}
              return newState
        }
        case Action.CHACKED_TASK:{
              const newState = {...state,list:[...state.list.slice(0,action.payload),{...state.list[action.payload],chacked:!state.list[action.payload].chached},...state.list.slice(action.payload +1)]}
              return newState
        }
        case Action.LOG_INFO:{
            const newState ={...state,LogInfo:[...state.LogInfo,action.payload]}
            return newState
        }
        default:{
            return state
        }
        
    }
}
export default reducer