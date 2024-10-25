import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import {FaPhoneSquare, FaRegUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import { FaPhone } from "react-icons/fa6";

const Registration = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full bg-slate-100 h-screen flex justify-center items-center'>
      {/* Registration  */}
      <div className="md:w-1/2 sm:w-3/4 h-screen md:h-fit px-8 py-5 bg-white shadow-lg rounded-sm">
        <div className="w-full h-auto sm:h-1/4 mb-10 sm:mb-5">
          <IoArrowBack onClick={()=>navigate('/')} className='text-3xl'/>
        </div>
        <div className="w-full h-auto sm:h-3/4 px-0">
          <h1 className='sm:text-3xl text-xl font-bold text-gray-800 mb-3'>Get Registered Now 🤗</h1>
          <p className='sm:text-base text-sm font-semibold text-gray-600 mb-3'>
            To get registered, you will have to pay <span className='font-extrabold text-gray-800'>Ksh 200</span> for certificates and hackathons that will be held by <span className='font-extrabold text-gray-800'>D.S.A.I.C</span>
          </p>
          <form className='w-full h-fit p-3 pl-0' action="">
            <label className='font-bold text-gray-800' htmlFor="name">Name</label>
            <div className='w-full border-lightGreen rounded-md overflow-hidden gap-3 flex items-center h-fit border-2 mb-4  '>
              <FaRegUser className='h-full ml-2 text-lightGreen w-fit text-xl '/>
              <input type="text" className="w-full border-none h-full text-sm text-gray-800 placeholder:text-gray-500 font-bold px-2 py-3 outline-none" placeholder='Ex: John Doe' />
            </div>
            <label className='font-bold text-gray-800' htmlFor="name">Email Address</label>
            <div className='w-full border-lightGreen rounded-md overflow-hidden gap-3 flex items-center h-fit border-2 mb-4  '>
              <MdMarkEmailUnread  className='h-full ml-2 text-lightGreen w-fit text-xl '/>
              <input type="email" className="w-full border-none h-full text-sm text-gray-800 placeholder:text-gray-500 font-bold px-2 py-3 outline-none" placeholder='Ex: johndoe@gmail.com' />
            </div>
            <label className='font-bold text-gray-800' htmlFor="name">Phone Number</label>
            <div className='w-full border-lightGreen rounded-md overflow-hidden gap-3 flex items-center h-fit border-2 mb-4 '>
              <FaPhone  className='h-full ml-2 text-lightGreen w-fit text-xl '/>
              <input type="phone number" className="w-full border-none h-full text-sm text-gray-800 placeholder:text-gray-500 font-bold px-2 py-3 outline-none" placeholder='Ex: 0712345678' />
            </div>
            <div className="mb-4 flex items-center gap-3">
              <input type="checkbox" className='text-textGreen' name="terms&conditions" />
              <p className='font-semibold text-gray-500 text-sm'>I agree with Terms & Conditions</p>
            </div>
            <button className='w-full h-10 font-bold duration-150 transition-all hover:bg-lightDarkBlue text-white bg-lightGreen'>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration