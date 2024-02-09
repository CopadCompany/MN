import React, { useState, Fragment} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import './styles/Navbar.css';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagra.svg';
import whatsappIcon from '../assets/whatspp.svg';






function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);


 const products = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Ubicación', href: '/ubicacion' }
  ];
 

 

  return (
    <header className="relative z-10" style={{ backgroundColor: 'transparent' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-5" style={{ backgroundColor: 'transparent' }} aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MN KINISIOLOGIA</span>
            <p className="text-2xl h-8 w-auto text-4xl mb-2 leading-9" style={{ color: "#7B2105" }}>MN</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 p-6">

          <a href="/" className="text-sm  leading-6" style={{ color: "#7B2105" }}>
            Inicio
          </a>
          <a href= "/services" className="text-sm leading-6" style={{ color: "#7B2105" }}>
            Servicios
          </a>
        </Popover.Group>



          
          <div className="user-menu relative" id="user-menu">
        
          <Transition show={showUserMenu} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setShowUserMenu(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">MN Kinesiologia</span>
              <p className="text-2xl h-8 w-auto font-bold text-4xl mb-2" style={{ color: "#7B2105" }}>MN</p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  style={{ color: "#7B2105" }}
                >
                  Inicio
                </a>
                <a
                  href="/banner"
                  style={{ color: "#7B2105" }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Sobre mi
                </a>
                <a
                  href="/services"
                  style={{ color: "#7B2105" }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Servicios
                </a>
                <a
                  href="/testimonios"
                  style={{ color: "#7B2105" }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Testimonios
                </a>
              </div>
              <div className="flex flex-col space-y-4 mb-4">
                <div className="flex items-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="svg-icon-red">
                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                  </a>
                </div>
                <div className="flex items-center">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="svg-icon-red">
                    <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                  </a>
                  </div>
                <div className="flex items-center">
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="svg-icon-red">
                    <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
