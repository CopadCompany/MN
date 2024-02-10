import React from 'react';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagra.svg';
import whatsappIcon from '../assets/whatspp.svg';




const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="p-8 text-center">
        
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
          </a>
        </div>

        <div className="text-gray-700 p-4 mt-5">
          © 2024 MN Kinesiología. Todos los derechos reservados.
        </div>
      </div>

      <div className="text-gray-300 p-1 bg-gray-400 text-sm leading-6 text-center">
       <a className='cursor-pointer' href='https://www.companycopad.com/' target='_blank' rel='noopener noreferrer'>By COPAD</a> 
      </div>
    </footer>
  );
};

export default Footer;
