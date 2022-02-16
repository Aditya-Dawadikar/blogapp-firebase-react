import firebase from 'firebase/compat/app'
import firestore from 'firebase/compat/firestore'
import { firebaseConfig } from './firebaseConfig';

export const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()