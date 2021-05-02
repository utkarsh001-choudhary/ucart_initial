import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Features(){
    return (
        <section id="features">
        <div className="row ">
          <div className="feat col-lg-4">
            <i className="fas ii fa-check-circle fa-4x"></i>
            <h3>Original Products</h3>
            <p>100% authentic product.</p>
          </div>
          <div className="feat col-lg-4">
           
            <i class="fas fa-truck ii fa-4x"></i>
            <h3>Home delivery</h3>
            <p>Get your product delivered within 3 days.</p>
          </div>
          <div className="feat col-lg-4">
              <i class="fas fa-exchange-alt ii fa-4x"></i>
            <h3>Easy return policy </h3>
            <p>100% Cashback within 5 days.</p>
          </div>
        </div>
      </section>
    );
}
export default Features;