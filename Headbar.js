import React from 'react'


function Headbar() {



  function refreshPage() {
    window.location.reload(false);
    alert("For better experience view in browser pc ");
  }




  return (
    <div>



      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h2>      <a onClick={refreshPage} class="navbar-brand" href="#"> <i class="fa-brands fa-accusoft"></i> Assignment  </a></h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>




          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">

                  <i class="fa-solid fa-outdent"></i>
                </a>
              </li>
            </ul>
            <span >

              <a class="nav-link" href="#">
                <i class="fa-regular fa-moon"></i>
              </a>
            </span>
            <span >
              <a class="nav-link" className='mx-2'>
                <i class="fa-regular fa-bell"></i>
              </a>
            </span>
            <a class="nav-link" className='mx-2'>
              <i class="fa-solid fa-language"></i>
            </a>

            <a class="nav-link" className='mx-2'>
              <i class="fa-solid fa-gear"></i>
            </a>

            <span className='mx-3'>
              <div class="dropdown">


                <button class="btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-user"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a>Home</a></li>
                  <li><a>Refresh</a></li>
                  <li><a>Exit</a></li>
                </ul>
              </div>






            </span>
          </div>
        </div>
      </nav>



    </div>
  )
}

export default Headbar