import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary-subtle">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#"> CANTEEN_APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/lhome"> LOGIN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register">REGISTER</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/menu">MENU</Link>
        </li>
        

       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar