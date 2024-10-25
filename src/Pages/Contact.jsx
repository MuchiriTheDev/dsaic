import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'
import { FaLocationPin, FaPhone, FaUser } from 'react-icons/fa6'
import { FaMailBulk } from 'react-icons/fa'
import { MdAlternateEmail, MdWifiCalling } from 'react-icons/md'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className="my-10 w-full h-fit">
            {/* Map of where our school is */}
            <div className="w-full bg-slate-100 p-4">
                <h1 className='text-gray-800 text-xl sm:text-4xl font-bold mx-5 my-3'>Location</h1>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127311.30876944555!2d36.94195636412134!3d-0.3827428196204424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d96885b625aff9%3A0x2ebcdd4c5f0083a9!2sDedan%20Kimathi%20University%20of%20Technology!5e0!3m2!1sen!2ske!4v1693571530371!5m2!1sen!2ske" 
                    className='w-full h-[50vh] my-5'
                    style={{border:0}}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="w-full p-4 h-fit md:h-screen flex flex-col md:flex-row justify-center items-center gap-4">
                {/* Left side */}
                <div className="md:w-1/2 w-full h-full p-4">
                    <h1 className="text-gray-800 mb-5 font-bold text-xl" aria-readonly>How To Find Us</h1>
                    <div className='w-full h-auto flex items-center gap-5 mb-4'>
                        <div className="w-auto flex justify-center items-center p-2">
                            <FaPhone className='h-full text-4xl text-lightGreen'/>
                        </div>
                        <div className="w-auto h-full">
                            <h1 className='text-gray-800 font-bold text-base mb-2'><a href="tel:+254101010101">Call To Action</a></h1>
                            <p className='text-sm text-gray-600 font-medium '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim voluptate delectus.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex items-center gap-5 mb-4'>
                        <div className="w-auto flex justify-center items-center p-2">
                            <FaMailBulk className='h-full text-4xl text-lightGreen'/>
                        </div>
                        <div className="w-auto h-full">
                            <h1 className='text-gray-800 font-bold text-base mb-2'><a href="mailto:dsaic@gmail.com">dsaic@gmail.com</a></h1>
                            <p className='text-sm text-gray-600 font-medium '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim voluptate delectus.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex items-center gap-5 mb-4'>
                       <div className="w-auto flex justify-center items-center p-2">
                        <FaLocationPin className='h-full text-4xl text-lightGreen'/>
                       </div>
                        <div className="w-auto h-full">
                            <h1 className='text-gray-800 font-bold text-base mb-2'>Kenya, Nyeri, Dedan Kimathi University</h1>
                            <p className='text-sm text-gray-600 font-medium '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim voluptate delectus.
                            </p>
                        </div>
                    </div>
                </div>
                <form className='md:w-1/2 w-full h-full p-4' >
                    <h1 className="text-gray-800 mb-5 font-bold text-xl" aria-readonly>How Can We Help You</h1>
                    <div className="w-full h- p-0 sm:p-2 flex flex-col sm:flex-row mb-4">
                        <div className="md:w-1/2 w-full h-full p-0 sm:p-2 ">
                            <div className="w-full mb-3  border-2 border-slate-100 outline-none focus:border-2 bg-slate-50  focus:border-lightGreen flex items-center rounded-md gap-2 ">
                                <FaUser className='h-full text-lightGreen text-3xl ml-3 '/>
                                <input type="text" placeholder='Full Name' className='border-none outline-none h-full bg-transparent w-full py-3 px-2  ' required name="name" id="name" />
                            </div>
                            <div className="w-full mb-3  border-2 border-slate-100 outline-none focus:border-2 bg-slate-50  focus:border-lightGreen flex items-center rounded-md gap-2 ">
                                <MdAlternateEmail className='h-full text-lightGreen text-3xl ml-3 '/>
                                <input type="email" placeholder='Email Address' className='border-none outline-none h-full bg-transparent w-full py-3 px-2  ' required name="email" id="email"  />
                            </div>
                            <div className="w-full mb-3  border-2 border-slate-100 outline-none focus:border-2 bg-slate-50  focus:border-lightGreen flex items-center rounded-md gap-2 ">
                                <MdWifiCalling className='h-full text-lightGreen text-3xl ml-3 '/>
                                <input type="tel" placeholder='Phone Number' name="phoneNumber" id="phone-number" className='border-none outline-none h-full bg-transparent w-full py-3 px-2  ' required  />
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-full p-0 sm:p-2 ">
                            <textarea className='w-full mb-3  border-2 border-slate-100 outline-none focus:border-2 bg-slate-50  focus:border-lightGreen flex items-center py-3 px-2 rounded-md gap-2' placeholder='Message' required name="message" id="msg" cols="30" rows="10" ></textarea>
                        </div>
                    </div>
                    <div className="w-fit h-fit p-0 sm:p-2  mb-3">
                        <button className="h-12 w-fit py-2 px-4 hover:bg-gray-700 duration-150 transition-all bg-lightGreen text-white font-bold rounded-md" type="submit">Send Message</button>
                    </div>
                    <div className='w-fit h-fit p-0 sm:p-2 '>
                        <p className='text-base font-bold text-lightGreen'>{}</p>
                    </div>
                </form>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Contact
