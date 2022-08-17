import React from 'react'

export const Card = ({icon, title, desc}) => {
  return (
    <div className="flex justify-center cursor-default" data-aos="zoom-in">
        <div className="flex p-10 lg:w-full w-[90%] flex-col justify-center md:text-left shadow-md items-center text-center md:flex-row md:max-w-xl rounded-lg bg-white hover:scale-[1.05] ease-in duration-200">
            <img className="md:w-38 w-32 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={icon} alt="" />
            <div className="md:p-6 p-4 flex flex-col justify-start">
                <h5 id='cardTitle' className="text-gray-900 text-xl mb-2 font-semibold">{title}</h5>
                <p className="text-gray-700 text-base mb-4 font-light">
                    {desc}
                </p>
            </div>
        </div>
    </div>
  )
}
