import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Alert from './components/Alert';
function App() {
  const [jwtToken, setJwtToken] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="mt-3">Go Watch a Movie!</h1>
      </div>
      <div className="col text-end">
        {jwtToken === ""
        ? <Link to="/login"><span className="badge bg-success">Login</span></Link>
        : <a href="#/"><span className="badge bg-danger">Logout</span></a>
        }
      </div>
      <hr className="mb-3"></hr>
    </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to='/' className="list-group-item list-group-item-action">Home</Link>
              <Link to='/movies' className="list-group-item list-group-item-action">Movies</Link>
              <Link to='/genres' className="list-group-item list-group-item-action">Genres</Link>
              {jwtToken !== "" && 
              <>
              <Link to='#!' className="list-group-item list-group-item-action">Add Movie</Link>
              <Link to='#!' className="list-group-item list-group-item-action">Manage Catalogue</Link>
              <Link to='#!' className="list-group-item list-group-item-action">GraphQL</Link>
              </>
              }
            </div>
          </nav>
        </div>
      
        <div className='col-md-10'>
          <Alert message={alertMessage} className={alertClassName}/>
         <Outlet context={
          {
            jwtToken,
            setJwtToken,
            setAlertClassName,
            setAlertMessage,
          }
         }/> 
        </div>
      </div>
    </div>
  );
}

export default App;
