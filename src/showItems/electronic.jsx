import React from 'react';
import electronics from '../items/electronic';
import All from '../Display/all';
import Header from '../component/header'
import Footer from '../component/footer'
function send(electronic){
    return (
     <All
     key={electronic.id}
     id={electronic.id}
     title={electronic.title}
     price={electronic.price}
     img={electronic.img}
 />
    );
}

function Electronic(){
  
    return (
        <div>
        <Header/>
        <div className="card-container">
        { electronics.map(send)}
        </div>
        <Footer/>
        </div>
    );
    
}
export default Electronic;