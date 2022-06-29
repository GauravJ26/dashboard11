import React from 'react'
import Navbar1 from './Navbar';


function Centr() {


  const tablelist = <tr>
    <td >+</td>
    <td >  <i class="fa-regular fa-square-check"></i> </td>
    <td ><i className="fa-brands fa-shopify"></i></td>
    <td >#TKN20203754</td>
    <td >2022-05-04</td>
    <td >Lucknow</td>
    <td>Abhishek Dixit</td>
    <td>0.00</td>
    <td><button className="btn btn-outline-success">Pending</button></td>
    <td><button class="btn btn-outline-dark dropdown-toggle" type="button" >
      Actions </button>  </td>
  </tr>;


  function refreshPage() {
    window.location.reload(false);
  }



  return (
    <div >
      <>
        <div className='bg-light'>
          <br></br>
          <button type="button " class="btn btn-outline-info">#Orders X
            <i class="fa-solid fa-xmark-sm"></i>
          </button>

          <div className='bg-light'><br ></br></div><br></br>
        </div>

        <Navbar1 />

        <br></br>

        <div className='btn-1.cntr'>
          <nav class="navbar navbar-expand-lg navbar-light ">
            <button type="button" class="btn btn-outline-dark me-md-2" >
              <i class="fa-solid fa-arrow-right-to-bracket"></i> Import Orders</button>
            <button type="button bg-light" class="btn btn-outline-secondary me-md-2" disabled>
              <i class="fa-regular fa-paper-plane"></i> Accept</button>
            <button type="button-disabled" class="btn btn-outline-secondary me-md-4" disabled>
              <i class="fa-solid fa-print"></i> Print</button>





            <div className="position-absolute top-0 end-0 mx-2">
              <button onClick={refreshPage} type="button" className="btn btn-primary"> <i class="fa-solid fa-rotate"></i>  Refresh</button>
            </div>


          </nav>
        </div>


        <>

          <table class="table table">
            <thead></thead>
            <thead className='bg-light' >

              <td>  <i class="fa-solid fa-hashtag"></i></td>
              <td>Checkbox <i class="fa-solid fa-square-check"></i> </td>
              <td>Channel <i class="fa-solid fa-sort"></i></td>
              <td>Order No <i class="fa-solid fa-sort"></i></td>
              <td>Order Date <i class="fa-solid fa-sort"></i></td>
              <td>City <i class="fa-solid fa-sort"></i></td>
              <td>Customer Name    <i class="fa-solid fa-magnifying-glass"></i>  </td>
              <td>Order Value <i class="fa-solid fa-sort"></i></td>
              <td>Status <i class="fa-solid fa-sort"></i></td>
              <td>Operation <i class="fa-solid fa-sort"></i> </td>
            </thead>
            <tbody>

              <tr class="table">

                <td >+</td>
                <td >  <i class="fa-regular fa-square-check"></i> </td>
                <td className="shopfy"> <i className="fa-brands fa-shopify"  ></i></td>
                <td >#TKN20203754</td>
                <td >2022-05-04</td>
                <td >Lucknow</td>
                <td>Abhishek Dixit</td>
                <td>0.00</td>
                <td><button className="btn btn-outline-success">Pending</button></td>
                <td><button class="btn btn-outline-dark dropdown-toggle" type="button" >
                  Actions </button>


                </td>
              </tr>



              {tablelist}
              {tablelist}

            </tbody>
          </table>


        </>

      </>
      <div className="container ">
        <div class="row" className="position-absolute  end-0 mx-2">
          <div class="col">    </div>
          <div class="col order-5">

            <div className='align-text-right ' >
              <div class="btn-group-sm ms-auto mb-2 mb-lg-0" role="group" aria-label="Basic outlined example" >
                <button type="button" class="btn btn-outline-secondary btn-sm ms-md-2" disabled>Prev</button>
                <button type="button" class="btn btn-outline-primary ms-md-2 me-md-2" >1</button>
                <button type="button" class="btn btn-outline-secondary btn-sm " disabled>Next</button>

                <button type="button" className="btn  btn-outline-dark btn-sm ms-md-4 mx-3" >20/page v</button>
              </div>
            </div>

          </div>
          <div class="col order-1">  </div>
        </div>
      </div>







    </div>
  )
}

export default Centr