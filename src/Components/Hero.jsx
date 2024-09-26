import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { GoArrowRight } from "react-icons/go"

const Hero = () => {
  return (
    <div className=' w-full h-fit py-10 sm:py-3 flex sm:flex-row flex-col gap-2 px-5 sm:px-10 items-center justify-center bg-gray-300 '>

        {/* left section */}
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-fit flex flex-col justify-center sm:justify-start ">
                <h1 className='text-xl sm:text-3xl font-semibold uppercase mb-1 text-gray-800'>Revolutionalize with us technology</h1>
                <h1 className='text-xl sm:text-3xl font-semibold uppercase mb-3 text-green-700 '>at dsaic in <span className='font-bold text-green-700'>dedan kimathi</span></h1>
                <p className='text-justify text-sm sm:text-base font-medium mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum incidunt temporibus modi alias amet corporis inventore tenetur!
                </p>

                <Link className="w-fit h-fit px-12 py-3 text-md text-white font-semibold bg-green-600 uppercase flex justify-between items-center gap-x-2" to={'/auth/signing'}><p>Sign in</p> <GoArrowRight className='text-xl font-extrabold'/></Link>
            </div>
        </div>

        {/* right section */}
        <div className="w-full h-full p-5 flex justify-center items-center">
            <img src={assets.hero} alt="" className="w-fit h-full p-3" />
        </div>

    </div>
  )
}

export default Hero