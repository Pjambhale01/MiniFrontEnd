import Action from '../Action/action'

export default function Unchack(state=[],action){
    switch(action.type){
        case Action.ITEM_NOTCHACK:{
            const newState =[...state,action.payload]
            return newState
        }
        default :{
            return state
        }
    }
}
