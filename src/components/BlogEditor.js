import React, { useState, useEffect } from 'react'

import { addBlog } from '../services/BlogService'

const BlogEditor = () => {

    const username = JSON.parse(sessionStorage.getItem('currUser')).username
    const [blog, setblog] = useState({})

    function handleChange(e){
        setblog({...blog,[e.target.name]:e.target.value})
    }

    function handleSubmit(){
        blog["author"]=username
        addBlog(blog)
    }

    return (
        <div>
            <label>Title</label>
            <input className='form-control' placeholder='some good title here...' name='title' onChange={(e)=>{handleChange(e)}}  />
            <label>Content</label>
            <textarea className='form-control' placeholder='some good content here...' name='content' rows={12} onChange={(e)=>{handleChange(e)}}  />
            <br />
            <button className='btn btn-primary' onClick={()=>{handleSubmit()}}>Publish</button>
        </div>
    )
}

export default BlogEditor