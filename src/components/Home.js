import React from 'react'
import 'tw-elements';

export const Home = () => {
  return (
    <div className='z-10' data-aos='fade-zoom-in'>
        <section className="mb-40 lg:pt-24 h-full" id='Home'>
        <div className="px-6 py-24 md:px-12 lg:pt-32 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-12 lg:mt-0">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">What is <br /><span className="text-blue-600">HomeBook?</span></h1>
                   <div className='py-5 text-gray-600'>
                   <p>
                        Homebook is an online platform for managing owned properties, generation of billing statements, online payment easily and conveniently and other property services.  It is open for all subdivisions, associations and other real estate organizations. 
                    </p>
                    <p>
                        A user-friendly application that aims to make it more convenient for both the home or property owners, association and real estate developers.
                    </p>
                   </div>
                    <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                    <a className="hover:shadow-md inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                    src="https://homebook.ph/assets/img/about-img.svg"
                    className="w-full"
                    alt=""
                    />
                </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
