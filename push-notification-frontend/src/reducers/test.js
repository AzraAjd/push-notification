import { GET_NOTIFICATION } from '../actions/types'

var initialState = {
    messages: []
}; 

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_NOTIFICATION:
            return {
                ...state,
                messages: action.payload
            }
    default:
        return state;
    }
}
