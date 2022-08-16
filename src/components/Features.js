import React from 'react'
import {Card} from './Card'
import manageicon from '../icons/manageicon.png'

export const Features = () => {
    const icon = [
        manageicon
    ];
    const title = [
        "Manage Properties"
    ];
    const desc = [
        "You can manage your multiple properties into one system"
    ];
  return (
    <div className='w-full h-screen'>
        <div>
            <h1>
                Features
            </h1>
            <div>
                <Card logo={icon} title={title} description={desc} />
            </div>
        </div>
    </div>
  )
}
