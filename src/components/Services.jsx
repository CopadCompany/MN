import { ScaleIcon, FaceSmileIcon, BoltIcon, HomeModernIcon } from '@heroicons/react/20/solid'
import Paciente from '../assets/paciente.png'
import './styles/Services.css'

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7" style={{ color: "#7B2105" }}>EN MN KINESIOLOGIA </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Guiamos tu Rehabilitación</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Nos enfocamos en brindar tratamientos efectivos y personalizados para mejorar la calidad de vida de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-2 -mt-12 p-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[23rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] sm:ml-9 bg-black opacity-90"
            src={Paciente}
            alt=""
          />
           
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Nuestro enfoque integral incluye técnicas de evaluación y tratamiento para ayudar a los pacientes
                 a recuperar su calidad de vida. Adicionalmente, ofrecemos terapia manual integral, que consiste
                  en técnicas manuales específicas para mejorar la movilidad, reducir el dolor y promover la 
                  recuperación física. Esta modalidad terapéutica se complementa con las demas áreas de especialización y proporciona un enfoque holístico para el bienestar de los pacientes.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaceSmileIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Terapia manual personalizada. </strong> 
                    Creemos firmemente en la importancia de adaptar los tratamientos a las necesidades individuales 
                    de cada persona por lo que diseñamos terapias manuales específicas que se ajustan a las condiciones
                     y objetivos de cada paciente.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BoltIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Acompañamiento a deportistas de alto rendimiento.</strong>
                    Ofrecemos un acompañamiento integral para deportistas de alto rendimiento que buscan maximizar su 
                    rendimiento y prevenir lesiones.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HomeModernIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Servicio a domicilio. </strong>
                    Ya sea que necesites rehabilitación después de una cirugía, tratamiento por lesión deportiva o 
                    simplemente desees mejorar tu bienestar general,
                     estoy disponible para brindarte atención de calidad en la comodidad de tu hogar.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Si estas buscando un kinesiólogo con experiencia y dedicación, <br /> ¡No dudes en ponerte en contacto conmigo! Estoy acá para ayudarte en tu camino hacia la recuperación y el bienestar.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cómo contactarme?</h2>
              <p className="mt-6">
                Si necesitas contactarme por un turno o consulta no dudes comunicarte via
                <a href="https://wa.me/+5492984415648" target="_blank" rel="noopener noreferrer" className="custom-link"><strong> WhatsApp</strong></a> o
                <a href="https://instagram.com/mnkinesiologia" target="_blank" rel="noopener noreferrer" className="custom-link"><strong> Instagram</strong></a>.
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
