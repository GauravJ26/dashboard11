import './App.css';
import Centr from './Centr';
import Headbar from './Headbar';
import NavbarL from './NavbarL';




function App() {
  return (
    <div >
      <Headbar />


      <div class="row g-0">
        <div class="col-6 col-md-1">

          <NavbarL />

        </div>

        <div class="col-sm-6 col-md-11">

          <Centr />

          <br></br><br></br><strong>*Note: </strong> just few buttons are responsive.
          <br></br>     * for better experience view in browser pc

        </div>
      </div>
      <br></br>
      <footer className="d-flex justify-content-end bottom-0 end-0 mx-1 my-0">
      <>  <button type="button" class="btn btn-secondary">  <a href="https://github.com/GauravJ26" target="_blank"><button type="button" class="btn btn-dark mx-1"> <i class="fa-brands fa-github"></i></button></a>
          <a href="https://www.linkedin.com/in/gaurav-jaiswal-4b5b97126" target="_blank"><button type="button" class="btn btn-primary mx-1" > <i class="fa-brands fa-linkedin "></i> </button></a>

          <button type="button" class="btn btn-light mx-1"> Gaurav Jaiswal </button>
        </button>


        </>
      </footer>

    </div>
  );
}

export default App;
