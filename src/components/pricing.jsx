import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'


const Pricing = () => {
  return (
    <div className='container'>
        <div>
            <div className='container text-center py-16'>
                <h1 className='text-3xl font-semibold'>Schedule a 1:1 meeting with Our Counsellor</h1>
                <p className='my-4'>Get a chance to interact with the team before enrolling <br/>in the program.</p>
                <button className='mt-5 px-6 py-3 font-semibold rounded boder-blue-700 bg-blue-700 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400'>Book now</button>
            </div>
            <h1 className='bg-white py-24 text-4xl font-semibold text-center text-black'>Program fees </h1>
            <div className='container flex flex-col gap-16 px-24 py-15 bg-white'>
                <div className='container p-8 rounded-2xl border-2 border-white bg-black'>
                    <div className='text-2xl font-semibold'>Placement 101</div>
                    <div className='py-2 text-4xl font-semibold mt-4 mb-8 package-price'>$99</div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Linkedin / CV review
                    </div>
                    <div className='py-2 font-semibold'> 
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Industry Readiness
                    </div>
                    <div className='py-2 font-semibold'> 
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Access to Protothon
                        </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Placement assistance
                        </div>
                    <div className='py-2 font-semibold'>
                        <XCircleIcon className='h-6 w-6 bg-white text-red-500 rounded-full inline mr-4'/>
                        1:1 live sessions
                    </div>
                    <div className='py-2 font-semibold'>
                        <XCircleIcon className='h-6 w-6 bg-white text-red-500 rounded-full inline mr-4'/>
                        Real world experience
                    </div>
                    <div className='py-2 font-semibold'>
                        <XCircleIcon className='h-6 w-6 bg-white text-red-500 rounded-full inline mr-4'/>
                        Job Guarantee or Refund
                    </div>
                </div>
                <div className='container p-8 rounded-2xl border-d border-blue-500 bg-black'>
                    <div className='text-2xl font-semibold'>Pay after placement</div>
                    <div className='py-2 text-4xl font-semibold mt-4 mb-8 package-price'>$999</div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Industry Readiness
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Access to Protothon
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Linkedin / CV review
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        1:1 live sessions
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Real world experience
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Placement assistance
                    </div>
                    <div className='py-2 font-semibold'>
                        <XCircleIcon className='h-6 w-6 bg-white text-red-500 rounded-full inline mr-4'/>
                        Job Guarantee or Refund
                    </div>
                    <div className='py-2 font-semibold'><p>A small <span className='text-green-500 font-semibold' >pre - deposit of $ 200 </span>required for accountability*</p></div>
                </div>
                <div className='container p-8 rounded-2xl border-2 border-white bg-black'>
                    <div className='text-2xl font-semibold'>Elite Pack</div>
                    <div className='py-2 text-4xl font-semibold mt-4 mb-8 package-price'>$2999 </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Linkedin / CV review
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Industry Readiness
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Access to Protothon
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        1:1 live sessions
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Real world experience
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Placement assistance
                    </div>
                    <div className='py-2 font-semibold'>
                        <CheckCircleIcon className='h-6 w-6 bg-white text-green-500 rounded-full inline mr-4'/>
                        Job Guarantee or Refund
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Pricing;


