import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function All(props){
    console.log("all");
    return (
        <div className="card-main">
        <div className="card">
        <img  className="display-img" src={props.img}/>
           <h5>{props.title}</h5>
           <h5>{props.price}</h5>
        </div>
        </div>
    );
}
export default  All;