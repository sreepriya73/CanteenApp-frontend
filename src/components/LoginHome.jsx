import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const LoginHome = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
            
            <br /><br />
                <div className="row ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <Link class="btn btn-secondary" type="button" to={'/userlogin'}>USER</Link>
                            <Link class="btn btn-secondary" type="button" to={'/adminlogin'}>ADMIN</Link>
                            <Link class="btn btn-secondary" type="button" to={'/stafflogin'}>STAFF</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginHome