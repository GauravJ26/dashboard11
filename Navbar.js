import React from 'react'

function Navbar1() {
  return (
    <div className='bg-light'>

      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-current="page" href="#" >Accepted</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-current="page" href="#">AWB Created</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-current="page" href="#">Ready to Ship</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link disabled" aria-current="page" href="#">Shipped</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-current="page" href="#">Completed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-current="page" href="#">Cancelled</a>
        </li>
      </ul>


    </div>
  )
}

export default Navbar1