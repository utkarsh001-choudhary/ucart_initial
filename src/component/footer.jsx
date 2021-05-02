import React from 'react';
 import ContactMailIcon from '@material-ui/icons/ContactMail';
 import PhoneIcon from '@material-ui/icons/Phone';

function Footer(){
    const date= new Date().getFullYear;
  
    return (
        <div className="footer">
        <a className="mail" href="mailto:utkarshchoudhary1608@gmail.com">{<ContactMailIcon/>}</a>
        <a className="mail" href="tel:8290292841">{<PhoneIcon/>}</a>
            <p className="copyright"> © Copyright {date} Ucart</p>
        </div>
    );
}
export default Footer;