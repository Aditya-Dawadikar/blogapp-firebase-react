import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { authentication } from "../firebaseConfig";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
} from "firebase/firestore";
import { db } from '../firebaseConfig'


const usersCollectionRef = collection(db, "users");

export const login = (loginObject) => {
    signInWithEmailAndPassword(authentication, loginObject.email, loginObject.password)
        .then(async (res) => {
            let user = {}
            const q = query(
                usersCollectionRef,
                where("email", "==", loginObject.email)
            );
            await getDocs(q).then(async (res) => {
                user = res.docs[0].data()
            })
            sessionStorage.setItem("currUser", JSON.stringify(user))
            window.location.href = process.env.REACT_APP_BASE_LOCAL_PATH + 'explore'
            return user
        })
        .catch(err => {
            console.log(err)
            alert("please enter correct email and password or signup")
        })
}

export const signup = (signupObject) => {
    createUserWithEmailAndPassword(authentication, signupObject.email, signupObject.password)
        .then(async(res) => {
            saveUserToFirestore(signupObject)
        })
        .catch(err => {
            alert("signup failed...please try again:",err)
        })
}

export const signin = () => {

}

export const signout = () => {
    signOut(authentication).then(() => {
        ClearStorage()
    })
}

async function saveUserToFirestore(newUser) {
    await addDoc(usersCollectionRef, newUser).then(res => {
        // console.log(res)s
        let user = {}
        // add user to local storage and redirect
        user["email"] = newUser.email
        user["username"] = newUser.username
        sessionStorage.setItem("currUser", JSON.stringify(user))
        window.location.href = process.env.REACT_APP_BASE_LOCAL_PATH + 'explore'
    }).catch(err => { console.log(err) })
}

function ClearStorage() {
    window.sessionStorage.clear()
    window.location.href = process.env.REACT_APP_BASE_LOCAL_PATH
}

export async function createUserIfNotExist(email, username) {
    const q = query(
        usersCollectionRef,
        where("email", "==", email)
    );

    await getDocs(q).then(async (res) => {
        if (res.docs.length > 0) {
            //user exists
            console.log("user exists")
        } else {
            //create user
            await addDoc(usersCollectionRef, { email: email, username: username })
                .then((res) => {
                    console.log(res)
                    console.log("added successfully");
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    })
}