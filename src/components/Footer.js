import React from 'react'
import {Link as Scroll} from 'react-scroll';

export const Footer = () => {
  return (
    <div className='w-full h-full mx-auto bg-blue-100 py-12 md:py-6 relative'>
      <div className='flex flex-wrap gap-10 md:flex-row text-left h-full w-[90%] mx-auto max-w-[1340px] p-5 pb-14 text-gray-800'>
        <div className='flex flex-col lg:max-w-[20%]'>
          <h1 className='text-4xl pb-3 font-light'>
            HOMEBOOK
          </h1>
          <p className='font-light'>
          is an online platform for managing owned properties, generation of billing statements, online payment easily and conveniently and other property services. It is open for all subdivisions, associ  ations and other real estate organizations.
          </p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-md font-semibold pb-3'>
          USEFUL LINKS
          </h1>
          <ul className='font-light space-y-3'>
                <li id='navlink'><a href='#'><Scroll to="Home" smooth={true} duration={100}>Home</Scroll></a></li>
                <li id='navlink'><a href='#'><Scroll to="About" smooth={true} duration={100}>About</Scroll></a></li>
                <li id='navlink'><a href='#'><Scroll to="Features" smooth={true} duration={100}>Features</Scroll></a></li>
                <li id='navlink'><a href='https://www.dynamicglobalsoft.com/'>Dynamic Global Inc.</a></li>
          </ul>
        </div>
        <div>
          <h1 className='text-md font-semibold pb-5'>
          CONTACT US
          </h1>
          <p className='font-light'>
          Unit 1206 12th The Trade & Financial Tower,
          7th & 32 Ave. Bonifacio Global City,
          Taguig City,
          Philippines 1634
          </p>
          <p className='font-light py-3'>
          <span className='font-semibold'>Phone:</span> 0917-987-1468 / 0928-524-8720
          </p>
          <p className='font-light'>
          <span className='font-semibold'>Email:</span> info@dynamicglobalsoft.com
          </p>
        </div>
      </div>
      <div className='bg-blue-200 p-5 absolute bottom-[0] right-0 left-0 text-center'>
        © Copyright HomeBook. All Rights Reserved
      </div>
    </div>
  ) 
}
