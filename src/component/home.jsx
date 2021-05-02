import React from 'react';
import Header from './header';
import Offer from "./offer";
import Footer from "./footer";
import Features from "./features";
import Book from '../showItems/book'
function Home() {
 return (
     <div>
   <Header/> 
    <Offer/> 
   <Features/>
   <Footer/>
   {/* <Book/> */}
   </div>
 );
}
export default Home;