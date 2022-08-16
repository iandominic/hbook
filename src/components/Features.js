import React from 'react'
import {Card} from './Card'

import manageicon from '../icons/manageicon.png'
import hoursicon from '../icons/24hoursicon.png'
import announcementicon from '../icons/announcementicon.png'
import billicon from '../icons/billicon.png'
import historyicon from '../icons/historyicon.png'
import olpaymenticon from '../icons/onlinepaymenticon.png'

export const Features = () => {
    const cardObj = [
        {
            icon: manageicon,
            title: "Manage Properties",
            desc: "You can manage your multiple properties into one system"
        },
        {
            icon: hoursicon,
            title: "Generate Billing Statements",
            desc: "You can view your billing statement, PAPERLESS!"
        },
        {
            icon: announcementicon,
            title: "Online Payment",
            desc: "You can view your billing statement, PAPERLESS!"
        },
        {
            icon: billicon,
            title: "News and Announcement",
            desc: "You can view updates from your different associations"
        },
        {
            icon: historyicon,
            title: "Transaction History",
            desc: "You can reach emergency hotlines in your area of property"
        },
        {
            icon: olpaymenticon,
            title: "Manage Properties",
            desc: "You can track back your transaction history"
        }
    ]
  return (
    <div className='w-[full] h-full py-7 pb-24 bg-blue-50' id='Features'>
        <div className='max-w-[1200px] mx-auto w-[90%] mt-10'>
            <div class="text-center lg:max-w-3xl md:max-w-xl mx-auto">
                <h2 class="text-3xl font-bold mb-12 px-6 pt-10 text-gray-700">Features</h2>
            </div>
            <div className='grid gap-x-6 gap-y-8 lg:grid-cols-2 lg:grid-row-2 md:grid-cols-1 md:grid-row-1 grid-cols-1 grid-row-1' >
                {cardObj.map((obj, i) => (<Card icon={obj.icon} title={obj.title} desc={obj.desc} key={i}/>))}
            </div>
        </div>
    </div>
  )
}
