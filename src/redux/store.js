import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BlogsReducer } from './reducers/BlogsReducer'
import { LoginReducer, SignupReducer } from './reducers/UserReducer';

const reducer = combineReducers({
    blogs: BlogsReducer,
    login: LoginReducer,
    signup: SignupReducer,
    currBlog: BlogsReducer
})

const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const initState = {
    blogs: {
        blogs: []
    },
    login: {
        user: userFromStorage
    },
    currBlog: {
        currBlog:{}
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store