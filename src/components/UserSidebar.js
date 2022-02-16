import React,{useState,useEffect} from 'react'

const UserSidebar = () => {

    const username = JSON.parse(window.sessionStorage.getItem('currUser')).username
    const [user,setuser] = useState({
        username:username
    })
    return (
        <div className="position-fixed sidebar">
            <div className="p-2">
                <div className="d-flex">
                    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-user-interface-kiranshastry-solid-kiranshastry-1.png" className="avatar" width="50px" height="50px"/>
                        <div className="text-primary p-3 h6">
                            # { user.username }
                        </div>
                </div>
                <div className="d-flex">
                    <span className="badge bg-success m-1">Active</span>
                    <span className="badge bg-warning m-1">11 Blogs</span>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default UserSidebar