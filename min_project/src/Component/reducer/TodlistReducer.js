import Action from '../Action/action'

function TodolistReducer(state =[],action){
    switch(action.type){
        case Action.ITEM_CHACK:{        
        const newState = [...state,action.payload]
        return newState

        }
        case Action.ITEM_NOTCHACK:{
            const newState =[...state,action.payload]
            return newState
        }
        default :{
            return state
        }
    }
}
export default TodolistReducer