import React, { useState, useEffect } from 'react'

import BlogCard from '../components/BlogCard'
import UserSidebar from '../components/UserSidebar'

import { useDispatch,useSelector } from 'react-redux'
import {getAllBlogs} from '../redux/actions/BlogActions'

const Explore = () => {

  const dispatch = useDispatch()
  const blogsFromStore = useSelector((state)=>state.blogs.blogs)

  const [blogs, setblogs] = useState([])

  useEffect(()=>{
    dispatch(getAllBlogs())
  })
  useEffect(()=>{
    setblogs(blogsFromStore)
  },[blogsFromStore])

  return (
    <div className='container content-start'>
      <div className='h2 m-2'>Explore</div>
      <div className='row'>
        <div className='col-lg-3 col-md-3 col-sm-0'>
          <UserSidebar/>
        </div>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          {
            typeof blogs!=='undefined'?blogs.map((blog,index)=>{
              return <BlogCard key={index} blog={blog} giveRights={false}></BlogCard>
            }):<></>
          }
        </div>
      </div>
    </div>
  )
}

export default Explore