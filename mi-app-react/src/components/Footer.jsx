import React from 'react';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagra.svg';
import whatsappIcon from '../assets/whatspp.svg';




const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="p-8 text-center">
        <div className="mb-4">
          <ul className="list-none mb-0">
            <li className="inline-block mx-2 my-1">
              <a href="/" className="text-gray-500 hover:text-gray-900">Inicio</a>
            </li>
            <li className="inline-block mx-2 my-1">
              <a href="/banner" className="text-gray-500 hover:text-gray-900">Sobre Mi</a>
            </li>
            <li className="inline-block mx-2 my-1">
              <a href="/services" className="text-gray-500 hover:text-gray-900">Servicios</a>
            </li>
            <li className="inline-block mx-2 my-1">
              <a href="/contact" className="text-gray-500 hover:text-gray-900">Contactame</a>
            </li>
          </ul>
        </div>
        
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
          © 2024 MN Kinesiologia. Todos los derechos reservados.
        </div>
      </div>

      <div className="text-gray-300 p-1 bg-gray-400 text-sm leading-6 text-center">
       <a className='cursor-pointer' href='https://www.companycopad.com/' target='_blank' rel='noopener noreferrer'>By COPAD</a> 
      </div>
    </footer>
  );
};

export default Footer;
