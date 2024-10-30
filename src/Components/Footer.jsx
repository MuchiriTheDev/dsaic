import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='p-3 border-t-2 mt-3 mx-4'>

      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-3 mb-3">

        {/* The first block of the footer */}
        <div className="w-full h-fit md:mb-0 mb-8 flex justify-center items-center flex-col">
          <h1 className='font-semibold text-center text-base md:text-xl mb-7 w-full'>Data Science And Artificial Intelligence Club</h1>

          <div className="pl-3 flex justify-center mb-4 text-sm  items-center gap-3 w-full h-fit text-gray-600 font-bold">
            <FaPhoneAlt />
            <a className='uppercase' href="tel:+254101010101">Call us</a>
          </div>

          <div className="pl-3 flex justify-center mb-4 text-sm items-center gap-3 w-full h-fit text-gray-600 font-bold ">
            <IoIosMail/>
            <a className='uppercase' href="mailto:dsaic@gmail.com">dsaic@gmail.com</a>
          </div>

          <div className="my-4 w-full">
            <ul className="flex justify-center items-center gap-4 w-full h-fit">
              <li>
                <a
                  href=""
                  className="flex justify-center items-center text-gray-700 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow-md transition duration-150 ease-in-out"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-gray-700 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow-md transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-gray-700 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow-md transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>

              {/* instagram */}
              <li className="ml-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-gray-700 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow-md transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* The second block of the footer  */}
        <div className="w-full h-fit mb-8 sm:mb-0">
            <h6 className="text-gray-800 text-base text-center md:text-xl font-semibold mb-4">Club</h6>
            <ul className="text-sm pl-4">
              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/about"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About us
                </a>
              </li>
              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/contact"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </li>

              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* The third block of the footer */}
          <div className="w-full mb-8 lg:mb-0">
            <h6 className="text-gray-800 text-base md:text-xl text-center  font-semibold mb-4">Support</h6>
            <ul className="text-sm pl-4">
              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/registration"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Registration
                </a>
              </li>
              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/contact"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Dev Team
                </a>
              </li>

              <li className="mb-2 w-full flex justify-center items-center">
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium mb-2 text-center w-full text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Queries
                </a>
              </li>
            </ul>
          </div>

          {/* The last section on the footer */}
          <div className="w-full flex justify-center items-center flex-col mb-8 lg:mb-0">
            <h1 className='text-gray-800 w-full text-base md:text-xl font-semibold mb-5'>Subscribe to our content</h1>
            <form className="border-2 rounded-lg bg-slate-200 border-gray-700 text-sm font-medium flex justify-center items-center w-full h-fit">
              <input className='rounded-s-lg w-3/4 bg-transparent outline-none border-none h-fit p-3' required placeholder='Email address' type="email" name="email-subscription" id="" />
              <button className='w-1/4 flex justify-center items-center h-full bg-gray-800 text-white'type='submit'><BsFillSendFill className='text-xl transition-all duration-200 hover:scale-110 hover:text-green-500' /></button>
            </form>
          </div>

      </div>

      <div className="p-4 border-t-2 flex justify-center flex-col items-center">
        <p className='font-medium text-base text-center '>2024 All rights reserved by :</p>
        <p className='font-medium text-sm md:text-base'>&copy; Data Science And Artificial intelligence Club (D.S.A.I.C)</p>
      </div>
    </div>
  )
}

export default Footer