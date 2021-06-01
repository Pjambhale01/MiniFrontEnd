import Action from '../Action/action'

function AddItemReducer(state =[],action){
    switch(action.type){
        case Action.ADD_ITEM:{
            //const index = action.payload
            //const newState=[state.slice(0,index),action.payload,state.list.slice(1 + index)]
            const newState = [...state,action.payload]
            return newState
        }
        default:{
            return state
        }
    }
}
export default AddItemReducer