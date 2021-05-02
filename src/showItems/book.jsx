import React from 'react';
import books from '../items/book';
import All from '../Display/all';
import Header from '../component/header'
import Footer from '../component/footer'
function send(book){
    return (
     <All
     key={book.id}
     id={book.id}
     title={book.title}
     price={book.price}
     img={book.img}
 />
    );
}

function Book(){
    return (
        <div>
        <Header/>
        <div className="card-container">
        { books.map(send)}
        </div>
        <Footer/>
        </div>
    );
    
}
export default Book;