import React, { useState } from 'react'
import NavBar from './NavBar'

const StaffLogin = () => {
    const [data,setData]=useState(
        {
          "email":"",
          "password":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
    const readValue=()=>{
      console.log(data)
    }
  return (
    <div>
          <div>
<NavBar/>
      <br />
        <h1><center>STAFF LOGIN</center></h1>
        <br /><br/>
      <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <form action="" className="label-comtrol">USERNAME</form>
                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <form action="" className="label-control">PASSWORD</form>
                <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />
            </div>
            <br />
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <center><button className="btn btn-success" onClick={readValue}>LOGIN</button></center>


            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StaffLogin