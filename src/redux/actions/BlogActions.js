import { actions } from "../constants/BlogConstants";

import {getBlogs,getMyBlogs,readBlog,filterBlogs} from '../../services/BlogService'
import { async } from "@firebase/util";

export const getAllBlogs=()=>async(dispatch)=>{
    try{
        //logic here
        let allBlogs = await getBlogs()

        dispatch({
            type:actions.GET_ALL_BLOGS,
            payload:allBlogs
        })

    }catch(err){
        console.log(err)
    }
}

export const getAllMyBlogs=(username)=>async(dispatch)=>{
    try{
        //logic here
        let allBlogs = await getMyBlogs(username)

        dispatch({
            type:actions.GET_MY_BLOGS,
            payload:allBlogs
        })
    }catch(err){
        console.log(err)
    }
}

export const readSomeBlog=(blogid)=>async(dispatch)=>{
    try{
        //logic here
        let curr_blog = await readBlog(blogid)

        dispatch({
            type:actions.READ_BLOG,
            payload:curr_blog
        })

    }catch(err){
        console.log(err)
    }
}