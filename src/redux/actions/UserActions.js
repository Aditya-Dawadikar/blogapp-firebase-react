import { actions } from '../constants/UserConstants'
import { login, signup, signout } from '../../services/UserService'

export const loginAction = (loginObject) => async (dispatch) => {
    try {

        await login(loginObject)

        dispatch({
            type:actions.LOGIN_SUCCESS
        })
    } catch (err) {
        console.log(err)
    }
}

export const signupAction = (signupObject) => async (dispatch) => {
    try {
        dispatch({
            type: actions.SIGNUP_SUCCESS,
            payload: signupObject
        })
    } catch (err) {
        console.log(err)
    }
}

export const signoutAction = () => async (dispatch) => {
    try {
        await signout()
        dispatch({
            type: actions.SIGNOUT
        })
    } catch (err) {
        console.log(err)
    }
}