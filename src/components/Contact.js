import React from 'react'
import mockup from '../img/homebookmock.png'
import { MailFilled, PhoneFilled, HomeFilled } from '@ant-design/icons'

export const Contact = () => {
  return (
<div class="container py-6 mt-10 px-6 mx-auto  max-w-[1340px]">
  <section class="mb-32 text-gray-800">
    <div class="flex justify-center">
      <div class="text-center lg:max-w-3xl md:max-w-xl">
        <h2 class="text-3xl font-bold mb-12 pt-10 px-6 text-gray-700">Contact us</h2>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12">
        <img src={mockup} alt="" data-aos='fade-right' data-aos-duration="600"/>
      </div>
      <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12" data-aos='zoom-in' data-aos-duration="600">
        <div class="flex flex-wrap">
          <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div class="flex items-start">
              <div class="shrink-0">
                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <MailFilled className='text-white'/>
                </div>
              </div>
              <div class="grow ml-6">
                <p class="font-bold mb-1">Email</p>
                <p class="text-gray-500">info@dynamicglobalsoft.com</p>
              </div>
            </div>
          </div>
          <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6" data-aos='zoom-in' data-aos-duration="900">
            <div class="flex items-start">
              <div class="shrink-0">
                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                <PhoneFilled className='text-white'/>
                </div>
              </div>
              <div class="grow ml-6">
                <p class="font-bold mb-1">Phone</p>
                <p class="text-gray-500">0917-987-1468 / 0928-524-8720</p>
              </div>
            </div>
          </div>
          <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6" data-aos='zoom-in' data-aos-duration="1200">
            <div class="flex align-start">
              <div class="shrink-0">
                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                <HomeFilled className='text-white'/>
                </div>
              </div>
              <div class="grow ml-6">
                <p class="font-bold mb-1">Location</p>
                <p class="text-gray-500">Unit 1206 12th The Trade & Financial Tower, 7th & 32 Ave. Bonifacio Global City, Taguig City, Philippines 1634</p>
              </div>
            </div>
          </div>
          <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}
