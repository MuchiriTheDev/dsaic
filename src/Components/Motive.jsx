import React from 'react'
import { assets } from '../assets/assets'

const Motive = () => {
    const motivesArray = [
        {
            img: `${assets.grow}`,
            title: "Study, Learn And grow",
            desc : "Join a community that will see you through your journey."
        },{
            img: `${assets.associate}`,
            title: " Mentorship",
            desc : "Join a community that will see you through your journey."
        },{
            img: `${assets.grow}`,
            title: "Associate",
            desc : "Join a community that will see you through your journey."
        },
    ]
  return (
    <div className='w-full p-2 bg-white h-fit py-10 mb-4'>
        {/* Heading */}
        <div className="w-full h-fit p-0 py-3 md:p-3 mb-5">
            <h2 className='text-gray-800 font-bold text-3xl mb-3  uppercase w-full text-center'>Our Motives</h2>
            <p className='text-gray-500 font-medium text-base text-center w-full'>
                At dsiac we believe that they is not limit to  learning. We embrace peer learning & community support
            </p>
        </div>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-x-6">
            {
                motivesArray.map((motive, i) => {
                    return (
                        <div key={i} className="w-full flex items-center flex-col justify-center gap-3">
                            <img className='w-1/5 h-fit mb-2' src={motive.img} alt="" />
                            <h1 className='font-semibold text-base uppercase mb-2'>{motive.title}</h1>
                            <p className='text-center font-medium text-sm text-gray-500'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eveniet, error at tempora repudiandae libero vel velit.
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Motive