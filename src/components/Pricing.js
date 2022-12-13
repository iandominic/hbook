import React from 'react'

import realestate from '../icons/realestate.png'
import individual from '../icons/individual.png'
import government from '../icons/government.png'
import assoc from '../icons/association.png'
import { Button } from 'react-scroll'


const Card = ({icon, title, desc}) => {
    return (
      <div className="flex justify-center cursor-default" data-aos="zoom-in">
          <div className="flex p-10 lg:w-full w-[90%] flex-col justify-center shadow-md border-[1px] border-transparent items-center text-center md:max-w-lg rounded-lg bg-white hover:scale-[1.05] hover:border-blue-700 ease-in duration-200">
              <img className="md:w-38 w-32 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={icon} alt="" />
              <div className="md:p-6 p-4 flex flex-col justify-start">
                  <h5 id='cardTitle' className="text-gray-900 text-xl mb-2 font-semibold">{title}</h5>
                  <p className="text-gray-700 text-base mb-4 font-light">
                      {desc}
                  </p>
              </div>
              <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Pricing Plan</button>
          </div>
      </div>
    )
}
  

const Pricing = () => {
    const cardObj = [
        {
            icon: assoc,
            title: "Associations",
            desc: "You can manage your multiple properties into one system"
        },
        {
            icon: realestate,
            title: "Real estate developers",
            desc: "You can view your billing statement, PAPERLESS!"
        },
        {
            icon: government,
            title: "Local government",
            desc: "You can view your billing statement, PAPERLESS!"
        },
        {
            icon: individual,
            title: "Individual property owner",
            desc: "You can view updates from your different associations"
        },
    ]

  return (
    <div className='w-full h-full'>
        <div className='max-w-[1340px] mx-auto w-[90%] mt-10'>
            <div className="text-center lg:max-w-3xl md:max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 px-6 pt-10 text-gray-700" data-aos="fade-up">Pricing</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
                {cardObj.map((obj, i) => (<Card icon={obj.icon} title={obj.title} desc={obj.desc} key={i}/>))}
            </div>
        </div>
    </div>
  )
}

export default Pricing