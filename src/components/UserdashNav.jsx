import React from 'react'

const UserdashNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PROFILE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/break">MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/orders">ORDERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delivery">DELIVERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/payment">PAYMENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/account">ACCOUNT</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default UserdashNav