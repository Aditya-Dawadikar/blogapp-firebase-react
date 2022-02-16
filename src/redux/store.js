import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BlogsReducer } from './reducers/BlogsReducer'
import { UserReducer } from './reducers/UserReducer';

const reducer = combineReducers({
    blogs: BlogsReducer,
    currBlog: BlogsReducer,
    currUser: UserReducer
})

const initState = {
    blogs: {
        blogs: []
    },
    currBlog: {
        currBlog:{}
    },
    currUser:{
        currUser:null   
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store