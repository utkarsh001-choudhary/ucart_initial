import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Header(){
    return (
        <div className=" container-fluid  vv" >
        <nav className="navbar ll navbar-expand-lg navbar-light">
       <Link className="navbar-brand" exact to={'/'}><i class="fab fa-opencart fa-2x"></i>Ucart</Link>
       {/* <a className="navbar-brand" href=""><i class="fab fa-opencart fa-2x"></i>Ucart</a> */}
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ml-auto">
         
           <li className="nav-item">
             <div className="link-div">
             <Link className="nav-link" exact to={'/fashion'}>Fashion</Link>
             </div>
           </li>
           <li className="nav-item">
                 <div className="link-div">
               {/* <a className="nav-link" href="#footer">Books</a> */}
               <Link className="nav-link" exact to={'/book'}>Books</Link>
               </div>
           </li>
           <li className="nav-item"><div className="link-div">
               {/* <a className="nav-link" href="#footer">Electronic</a> */}
               <Link className="nav-link" exact to={'/electronic'}>Electronic</Link>
               </div>
           </li>
           <li className="nav-item"><div className="link-div">
               {/* <a className="nav-link" href="#footer">Electronic</a> */}
               <Link className="nav-link" ><i class="fas fa-shopping-bag"></i></Link>
               </div> className="link-div"
           </li>
       </ul>
    </div>
    </nav>
    </div>
      
    );
}
export default Header;