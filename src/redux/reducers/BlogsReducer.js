import {actions} from '../constants/BlogConstants'

export const BlogsReducer=(state={},action)=>{
    switch(action.type){
        case actions.GET_ALL_BLOGS:
            return {blogs:action.payload}
        case actions.DELETE_BLOG:
            return {}
        case actions.GET_MY_BLOGS:
            return {blogs:action.payload}
        case actions.READ_BLOG:
            return {currBlog:action.payload}
        default:
            return {}
    }
}