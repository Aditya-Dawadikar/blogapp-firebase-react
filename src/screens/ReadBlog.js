import React, { useEffect, useState } from 'react'

import UserSidebar from '../components/UserSidebar'

import { useDispatch,useSelector } from 'react-redux'
import {readSomeBlog} from '../redux/actions/BlogActions'

const ReadBlog = () => {
  
  const dispatch = useDispatch()

  const [blog, setblog] = useState({})

  useEffect(()=>{
    dispatch(readSomeBlog('F8acRozzMFvozEGWm0fz'))
  },[])

  const blogFromStore=useSelector((state)=>state.currBlog.currBlog)

  useEffect(()=>{
    console.log()
    setblog(blogFromStore)
  },[blogFromStore])

  return (
    typeof blog!=='undefined'?<div className='container content-start'>
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-0'>
        <UserSidebar />
      </div>
      <div className='col-lg-9 col-md-9 col-sm-12'>
        <div style={{ maxWidth: "700px" }}>
          <h1>{blog.title}</h1>
          <div className="p-2">
            <div className="d-flex">
              <img src="https://i.pravatar.cc/50" className="avatar" width="50px" height="50px" />
              <div className="text-primary p-3 h6">
                # {blog.author}
              </div>
            </div>
            <div className="d-flex">
              <span className="badge bg-success m-1">Active</span>
              <span className="badge bg-warning m-1">11 Blogs</span>
            </div>
          </div>
          <br />
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  </div>:<></>
  )
}

export default ReadBlog