import React from 'react'
import { TbCircleDashedPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Upcoming = ({img, name, desc, topics, link}) => {
  return (
    <div className='w-full bg-lightGreen h-fit lg:h-[75vh] flex justify-center items-center flex-col lg:flex-row p-2'>
         {/* Left side */}
         <div className="p-4 w-full lg:w-1/2 h-full flex justify-center items-center">
            <img src={img} alt="" className="rounded-lg h-full w-fit " />
         </div>

         {/* Right Side */}
         <div className="p-4 lg:w-1/2 w-full h-full">
            <div className="bg-gray-800 w-full h-full text-white p-5 flex justify-start md:justify-center items-center flex-col">
                <h1 className='text-xl md:text-2xl font-extrabold text-start md:text-center capitalize mb-4'>{name}</h1>
                <p className='text-sm md:text-base font-medium mb-4 text-justify md:text-center '>
                    {desc}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 w-full h-fit">
                    {
                        topics.map((item,i)=>{
                            return (
                                <span className='w-full h-full py-1 px-3 flex justify-center items-center text-center text-gray-700 font-bold text-xs sm:text-sm bg-slate-100'>
                                    {item}
                                </span>
                            )
                        })
                    }
                </div>
                <Link className='font-bold flex items-center justify-center gap-2 text-base sm:text-xl px-6 py-2 rounded-md bg-lightGreen' to={link}><p>Register</p><TbCircleDashedPlus/></Link>
            </div>
         </div>
    </div>
  )
}

export default Upcoming