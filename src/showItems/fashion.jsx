import React from 'react';
import fashions from '../items/fashion';
import All from '../Display/all';
import Header from '../component/header'
import Footer from '../component/footer'
function send(fashion){
    return (
     <All
     key={fashion.id}
     id={fashion.id}
     title={fashion.title}
     price={fashion.price}
     img={fashion.img}
 />
    );
}

function Fashion(){
  
    return (
        <div>
        <Header/>
        <div className="card-container">
        { fashions.map(send)}
        </div>
        <Footer/>
        </div>
    );
    
}
export default Fashion;