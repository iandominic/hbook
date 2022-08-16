import React from 'react'
import 'tw-elements';
import meeting from '../img/meeting.png'
import laptopman from '../img/laptop_man.png'

export const About = () => {
  return (
    <div className='w-full h-full bg-white py-7' id='About'>
      <div className='flex flex-col max-w-[1340px] mx-auto w-full'>
        <div className='flex md:flex-row-reverse flex-col-reverse w-[90%] mx-auto md:items-center gap-10'>
          <div className='flex flex-col text-gray-700 justify-between' data-aos='fade-left' data-aos-delay="100">
            <h1 className='font-semibold text-3xl text-center md:text-left mb-5'>
              About HomeBook
            </h1>
            <p className='font-light'>
              Homebook is an online platform for managing owned properties, generation of billing statements, online payment easily and conveniently and other property services. It is open for all subdivisions, associations and other real estate organizations. 
            </p>
            <p  className='font-light'>
            The function of the Village - Community Management System involves the generation of billing statements of the community which will come from the association who is responsible for managing the village. The user/member can pay his/her bill online/in-app. The system also contains all the properties owned by the member in which its association must be registered in order for it to be viewable.
            </p>
          </div>
          <img src={meeting} className='p-10 max-w-[600px] lg:w-[600px] md:w-[400px]' alt=""  data-aos='fade'  data-aos-delay="100"/>
        </div>
        <div className='flex md:flex-row flex-col-reverse w-[90%] mx-auto md:items-center text-gray-700 gap-10' data-aos='fade-right'  data-aos-delay="100">
          <div className='flex flex-col'>
           <ul className='space-y-6'>
            <li>
              <h1 className='font-semibold text-xl'>
                Associations
              </h1>
              <p className='font-light max-w-[90%] '>
                Create your FREE HomebookPH account to enjoy different services from the associations you belong.
              </p>
            </li>
            <li>
              <h1 className='font-semibold text-xl'>
              Local government
              </h1>
              <p className='font-light max-w-[90%] '>
              Create your FREE HomebookPH account to enjoy different services from the associations you belong.
              </p>
            </li>
            <li>
              <h1 className='font-semibold text-xl'>
              Real Estate Developers
              </h1>
              <p className='font-light max-w-[90%] '>
              Create your FREE HomebookPH account to enjoy different services from the associations you belong.
              </p>
            </li>
            <li>
              <h1 className='font-semibold text-xl'>
              Individual property owner
              </h1>
              <p className='font-light max-w-[90%] '>
              Create your FREE HomebookPH account to enjoy different services from the associations you belong.
              </p>
            </li>
           </ul>
          </div>
          <img src={laptopman} className='p-10 max-w-[600px] lg:w-[600px] md:w-[400px]' alt="" data-aos='fade'  data-aos-delay="100"/>
        </div>
      </div>
    </div>
  )
}
