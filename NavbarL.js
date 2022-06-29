import React from 'react'
import Centr from './Centr'

function NavbarL() {
  return (
    <div>



      <div className="d-flex align-items-start bg-light"  >
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <br></br>
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
            <i class="fa-solid fa-gauge-high"></i>   Dashboard
          </button>

          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">

            <i class="fa-regular fa-store"></i>  Inventory
          </button>


          <button onClick={Centr} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">

            <i class="fa-regular fa-rectangle-list"></i>  Orders
          </button>


          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" >
            <i class="fa-solid fa-truck"></i>  Shipping
          </button>



          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
            <i class="fa-solid fa-share-nodes"></i>  Channel
          </button>


        </div>

      </div>


    </div>
  )
}

export default NavbarL