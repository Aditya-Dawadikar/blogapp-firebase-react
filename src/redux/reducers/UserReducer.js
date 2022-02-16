import {actions} from '../constants/UserConstants'

export const LoginReducer=(state={},action)=>{
    switch(action.type){
        case actions.LOGIN_REQUEST:
            return {}
        
        case actions.LOGIN_SUCCESS:
            return {}
        
        case actions.LOGIN_FAILED:
            return {}

        default:
            return {}
    }
}

export const SignupReducer=(state={},action)=>{
    switch(action.type){
        case actions.SIGNUP_REQUEST:
            return {}
        
        case actions.SIGNUP_SUCCESS:
            return {}
        
        case actions.SIGNUP_FAILED:
            return {}

        default:
            return {}
    }
}