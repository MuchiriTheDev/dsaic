import React from 'react'
import Hero from '../Components/Hero'
import Motive from '../Components/Motive'
import Join from '../Components/Join'
import Events from '../Components/Events'
import { Link } from 'react-router-dom'
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Motive/>
      <Join/>
      <Events/>
      <div className="w-full p-4 py-10 h-fit flex justify-center items-center flex-col mt-3 ">
        <h1 className='font-extrabold text-base sm:text-2xl mb-4 uppercase text-gray-700 text-center sm:w-2/3 w-full'>Join us today and become a member of the tech community in <span>Dedan Kimathi unversity of technology</span></h1>
        <Link className='w-fit h-14 py-6 px-4 bg-green-600 flex justify-center items-center gap-3 text-xl font-medium transition-all duration-200 hover:bg-white hover:scale-105 hover:text-gray-600 rounded-md uppercase text-white'><p>Register Now</p><FaHandPointRight /></Link>
      </div>
    </div>
  )
}

export default Home;