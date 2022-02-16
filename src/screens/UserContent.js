import React, { useState, useEffect } from 'react'

import BlogCard from '../components/BlogCard'
import UserSidebar from '../components/UserSidebar'

import { useDispatch,useSelector } from 'react-redux'
import {getAllMyBlogs} from '../redux/actions/BlogActions'

import {isAuthenticated} from '../services/AuthService'

const UserContent = () => {

  isAuthenticated()

  const username = JSON.parse(window.sessionStorage.getItem('currUser')).username

  const dispatch = useDispatch()
  const blogsFromStore = useSelector((state)=>state.blogs.blogs)

  const [blogs, setblogs] = useState([])

  useEffect(()=>{
    dispatch(getAllMyBlogs(username))
  })
  useEffect(()=>{
    setblogs(blogsFromStore)
  },[blogsFromStore])

  return (
    <div className='container content-start'>
      <div className='h2 m-2'>My Content</div>
      <div className='row'>
        <div className='col-lg-3 col-md-3 col-sm-0'>
          <UserSidebar/>
        </div>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          {
            typeof blogs!=='undefined' && blogs.length>0?blogs.map((blog,index)=>{
              return <BlogCard key={index} blog={blog} giveRights={true}></BlogCard>
            }):<h2>Nothing to show yet...</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default UserContent