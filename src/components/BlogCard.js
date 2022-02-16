import React,{useState,useEffect} from 'react'
import {deleteBlog} from '../services/BlogService'

const BlogCard = ({blog,giveRights}) => {

  const [post,setpost] = useState(blog)
  const base_url = process.env.REACT_APP_BASE_LOCAL_PATH

  useEffect(()=>{
    setpost(blog)
  },[blog])

  return (
    <div className="card m-2 standard-shadow">
      <div className="row">
        <div className="card-body m-2">
          <div className="d-flex">
            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-user-interface-kiranshastry-solid-kiranshastry-1.png" className="avatar" width="50px" height="50px"/>
              <div className="text-primary p-3 h6">
                # {post.author}
              </div>
          </div>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text" style={{height: "50px", overflowY: "hidden"}}>{post.content}</p>
          <a href={base_url+'blog/'+post.id} className="btn btn-primary">Read More...</a>
          {
            giveRights===true?<div className='d-flex'>
              <div className='btn btn-danger m-1' onClick={()=>{deleteBlog(post.id)}}>Delete</div>
            </div>:<></>
          }
        </div>
      </div>
    </div>
  )
}

export default BlogCard