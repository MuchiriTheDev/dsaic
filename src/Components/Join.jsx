import React from 'react'
import { assets } from '../assets/assets'
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className='w-full py-6 flex flex-col sm:flex-row justify-center items-center h-fit mb-10 bg-slate-100'>

        <div className="w-full h-full flex items-center justify-center">
            <img src={assets.reg} className='h-full w-fit' alt="" />
        </div>


        <div className="w-full h-full p-5">
            <h1 className='text-xl md:text-3xl font-bold mb-4 text-gray-700 '>How to become one of us</h1>
            <p className='text-sm font-medium mb-3 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur dicta ullam velit blanditiis illo quidem quasi natus? Similique, voluptate ea? Blanditiis atque nisi quod maiores repellendus eveniet saepe temporibus.
            </p>
            <h1 className='text-base font-bold mb-2 text-gray-700'>Steps In Registering</h1>
            <ol className='w-full mb-3'>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Sign up</p>
                </li>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Register</p>
                </li>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Contact Us</p>
                </li>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Attend our sessions</p>
                </li>
            </ol>
            <div className="w-full flex justify-center sm:justify-end items-center h-fit p-6">  
                <Link to={'/registration'} className='p-3 sm:h-3/4 w-full sm:w-fit rounded-sm bg-lightGreen text-white font-semibold text-xs sm:text-md flex justify-center items-center gap-x-2'><p>Register Now</p> <GoArrowRight className='text-xl font-extrabold'/></Link>
            </div>
        </div>

    </div>
  )
}

export default Join