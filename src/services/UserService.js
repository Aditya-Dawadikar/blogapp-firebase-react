import {
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from "firebase/auth";
import { authentication } from "../firebaseConfig";

export const login = (loginObject) => {
    signInWithEmailAndPassword(authentication,loginObject.email,loginObject.password)
    .then(res=>{
        console.log(res)
    })  
    .catch(err=>{
        console.log(err)
    })
}

export const signup = (signupObject) => {
    createUserWithEmailAndPassword(authentication,signupObject.email,signupObject.password)
    .then(res=>{
        console.log(res)
    })  
    .catch(err=>{
        console.log(err)
    })
}

export const signin = () => {

}