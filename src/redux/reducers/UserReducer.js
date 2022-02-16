import {actions} from '../constants/UserConstants'

export const UserReducer=(state={},action)=>{
    switch(action.type){
        case actions.LOGIN_SUCCESS:
            let user = JSON.parse(window.sessionStorage.getItem('currUser'))
            return {currUser:user}
        case actions.SIGNUP_SUCCESS:
            return {currUser:action.payload}
        case actions.SIGNOUT:
            return {currUser:null}
        default:
            return state
    }
}