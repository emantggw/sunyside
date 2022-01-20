import { BAR_CLICKED } from '../constants/actionTypes'

const barTogglerReducer = (state=false, action)=>{
    switch(action.type){
        case BAR_CLICKED:
            return !state
        default:
            return state
    }
}

export default barTogglerReducer;