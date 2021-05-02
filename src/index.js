import React from 'react';
import ReactDOM from 'react-dom';
 import App from "./component/App";
 import Home from "./component/home";
 import Header from "./component/header";
 import Offer from "./component/offer";
 import Footer from "./component/footer";
 import Features from "./component/features";
 
ReactDOM.render(
  <div>
    {/* <Header/>
     <Offer/>
     <Features/>
     <Footer/> */}
     <App/>
    </div>
  ,
  document.getElementById("root")
);
 //  <React.StrictMode>