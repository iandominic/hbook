import React from 'react'
import 'tw-elements';

export const Home = () => {
  return (
    // <div className='z-10'>
    //     <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
    //     <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //         <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //         ></button>
    //         <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //         ></button>
    //         <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //         ></button>
    //     </div>
    //     <div className="carousel-inner relative w-full overflow-hidden">
    //         <div className="carousel-item active float-left w-full">
    //         <img
    //             src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
    //             className="block w-full"
    //             alt="Wild Landscape"
    //         />
    //         </div>
    //         <div className="carousel-item float-left w-full">
    //         <img
    //             src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
    //             className="block w-full"
    //             alt="Camera"
    //         />
    //         </div>
    //         <div className="carousel-item float-left w-full">
    //         <img
    //             src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
    //             className="block w-full"
    //             alt="Exotic Fruits"
    //         />
    //         </div>
    //     </div>
    //     <button
    //         className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="prev">
    //         <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //         className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="next">
    //         <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    //         <span className="visually-hidden">Next</span>
    //     </button>
    //     </div>
    // </div>
    <div className='z-10'>
        <section className="mb-40 h-full">
        <div className="px-6 py-24 md:px-12 lg:pt-32 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-12 lg:mt-0">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
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
