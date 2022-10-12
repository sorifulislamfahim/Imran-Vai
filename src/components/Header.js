import React from 'react'
import Lottie from 'lottie-react'
import reader from './animation/quize.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              A best larning website
              <span className='inline-block text-orange-400'>for developed our skils</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Makes a quize to genarate leads for your knowladge. The quize are survay platform marketars have a dreamd about.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <a
              href='/home'
              className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
            >
              <span className='mr-3'>Go Quizes</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

          </div>
        </div>
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;