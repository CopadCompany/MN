
import React, { useState, useEffect } from 'react';
import testimonioIcon from '../assets/testimonios.svg';

const testimonios = [
  {
    cita: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    nombre: "Juana Lopez",
    cargo: "Deportista",
  },
  {
    cita: "“Lorem ipsum dolor sit amet. Nemo expedita voluptas culpa sapiente. Numquam corrupti in laborum sed rerum et corporis.”",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    nombre: "Pedro Martinez",
    cargo: "CEO of COPAD",
  },
  {
    cita: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. makjsi e mejif  cnidsohih niowjdi uwj kwijido Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    nombre: "Lorena Salas",
    cargo: "Arquitecta",
  },
];

export default function Testimonios() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % testimonios.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const testimonioActual = testimonios[index];


  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src={testimonioIcon} alt="" />
        <figure className="mt-10" style={{ height: '300px', overflowY: 'auto' }}>
  <blockquote className="text-center leading-8 text-gray-600 sm:text-2xl sm:leading-9">
    <p id='cita'>{testimonioActual.cita}</p>
  </blockquote>
  <figcaption className="mt-10">
    <img
      className="mx-auto h-10 w-10 rounded-full"
      src={testimonioActual.imagen}
      alt=""
    />
    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
      <div className="font-semibold text-gray-900">{testimonioActual.nombre}</div>
      <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
        <circle cx={1} cy={1} r={1} />
      </svg>
      <div className="text-gray-600">{testimonioActual.cargo}</div>
    </div>
  </figcaption>
</figure>
      </div>
    </section>
  )
}
