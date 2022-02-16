import React from 'react'

import BlogEditor from '../components/BlogEditor'
import UserSidebar from '../components/UserSidebar'

import {isAuthenticated} from '../services/AuthService'

const Compose = () => {

    isAuthenticated()

    return (
        <div className='container content-start'>
            <div className='h2 m-2'>Compose</div>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-0'>
                    <UserSidebar />
                </div>
                <div className='col-lg-9 col-md-9 col-sm-12'>
                   <BlogEditor/>
                </div>
            </div>
        </div>
    )
}

export default Compose