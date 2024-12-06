import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"
import { Link } from 'react-router-dom'
import { BsArrowRight, BsLink } from 'react-icons/bs'
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import NewsLetter from '../Components/NewsLetter';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  const [ showMore , setShowMore ]= useState(false)
  const [ more, setMore ] = useState(false)
  const [ alms, setAlms ] = useState(3)
  const [ no , setNo ] = useState(4)

  const {ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9, al1, al2, al3, al4, al5, al6, al7, main, allThem} = assets
  const images = [ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9]
  const imageToShow = images.slice(0,no)
  const devs = [
    {
      name: "Muchiri",
      role: "Product Manager",
      link: 'https://muchiri-the-dev.vercel.app/',
      img: al1
    },{
      name: "Michael",
      role: "Frontend (Lead)",
      link: 'https://muchiri-the-dev.vercel.app/',
      img: al2
    },{
      name: "Victor",
      role: "Design (Lead)",
      link: '',
      img: allThem
    },
  ]

  const alumni = [
    {
      name: "Muchiri",
      role: "AI Researcher and Data Analyst",
      tech: ["R", "Python", "Ruby"],
      exp: "I am skilled at uncovering insights from complex datasets and building predictive models to solve real-world challenges. I am passionate about leveraging data to make impactful decisions.",
      link: 'https://muchiri-the-dev.vercel.app/',
      img: al1
    },
    {
      name: "Michael",
      role: "Full-Stack Developer and Machine Learning Specialist",
      tech: ["JavaScript", "Java", "React Native", "PostGreSQL", "MongoDB", "R", "Python", "Ruby"],
      exp: "I have extensive experience in full-stack development, specializing in creating efficient, scalable applications powered by data science and machine learning principles.",
      link: 'https://muchiri-the-dev.vercel.app/',
      img: al2
    },
    {
      name: "Rono",
      role: "Mobile Developer and Data Scientist",
      tech: ["R", "Python", "Flutter", "Kotlin"],
      exp: "I enjoy developing mobile and web applications while integrating data science solutions to optimize user experiences and performance.",
      link: 'https://muchiri-the-dev.vercel.app/',
      img: al3
    },
  ]
  
  
  const alumniSliced = alumni.slice(0,alms)

  useEffect(()=>{
    if(showMore){
      setNo(images.length)
    }else{
      setNo(4)
    }
  }, [showMore])
  
  useEffect(()=>{
    if(more){
      setAlms(alumni.length)
    }else{
      setAlms(3)
    }
  }, [more])
  
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
      <Navbar/>

      {/* Our Journey */}
      <div className="flex flex-col md:flex-row justify-between w-full bg-slate-200 h-fit items-center gap-2 p-0 sm:p-4">
        <div className="w-full md:w-1/2 h-1/2 flex justify-center items-center">
          <img className='w-full h-fit p-0 sm:p-4 rounded-sm' src={main} alt="Our Journey" />
        </div>
        <div className="w-full md:w-1/2 h-full p-4">
          <h1 className='text-gray-700 font-bold lg:text-4xl md:text-2xl text-xl capitalize text-center md:text-justify mb-4'>Our Inspiring Journey</h1>
          <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty'>
            From a humble beginning to a thriving community, our journey has been driven by passion, innovation, and the pursuit of excellence. We started with a simple idea — to bring like-minded people together and create something remarkable. Through dedication and hard work, we’ve grown into a powerful force, shaping the future of tech.
          </p>
          <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty '>
            Our story is a testament to what can be achieved when creative minds come together, combining strengths in diverse fields like data science, machine learning, web development, and beyond. We pride ourselves on embracing challenges, learning from failures, and celebrating our victories, no matter how small.
          </p>
          <div className="w-full sm:h-20 h-14 flex items-center justify-center sm:justify-start">
            <Link to={'/registration'} className='bg-lightGreen h-3/4 flex justify-center gap-3 items-center sm:px-4 sm:py-2 px-2 py-1 text-white font-bold'>
              <p>Join Our Movement</p>
              <BsArrowRight className='text-xl font-extrabold'/>
            </Link>
          </div>
        </div>
      </div>

      {/* Our Purpose */}
      <div className="w-full h-fit p-4 flex justify-center items-center">
        <div className="md:w-3/4 w-full h-fit p-4">
          <h1 className='text-gray-700 font-bold text-2xl md:text-4xl capitalize text-center  mb-5'>
            Our Purpose & Values
          </h1>
          <p className='mb-4 text-gray-800 text-base font-medium'>
            We exist to empower and inspire the next generation of innovators. Our mission is to create a platform where skills are sharpened, ideas are nurtured, and leaders are born. We believe in building sustainable solutions that not only meet today’s challenges but also shape the future. Collaboration, creativity, and integrity are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Moments Captured */}
      <div className="w-full h-fit p-6 flex justify-center items-center flex-col">
        <div className="w-full h-fit p-4">
          <h1 className='text-gray-700 font-bold text-2xl md:text-4xl capitalize text-center  mb-5'>Captured Moments</h1>
          <p className='text-gray-600 font-semibold text-base md:text-base capitalize text-center mb-5'>Snapshots of our remarkable journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 transition-all duration-150">
          {imageToShow.map((img, i) => (
              <img className='w-full rounded-md h-[15em]' src={img} alt={`Gallery ${i}`} key={i}/>
          ))}
        </div>
        <button onClick={() => setShowMore(!showMore)} className={`flex justify-center items-center gap-2 my-5 w-fit h-14 px-4 py-2 ${showMore ? "bg-gray-500" : "bg-lightGreen"} bg-lightGreen rounded-sm text-white font-medium text-xl transition-all duration-150`}>
          {showMore ? (<>Show Less<MdOutlineKeyboardDoubleArrowUp /></>) : (<>Show More<MdOutlineKeyboardDoubleArrowDown /></>)}
        </button>
      </div>

      {/* Meet Our Alumni */}
      <div className="w-full h-fit p-2 sm:p-6 flex justify-center items-center flex-col bg-slate-200 py-10">
        <h1 className="text-gray-800 font-bold text-2xl md:text-4xl  text-center mb-5">Our Esteemed Alumni</h1>
        <p className='mb-5 text-gray-600 capitalize font-bold text-base'>The pillars who shaped our legacy</p>
        <div className="w-full">
          {alumniSliced.map((alm, i) => (
              <div key={i} className="w-full h-fit md:h-[27em] flex md:flex-row flex-col justify-start items-center shadow-sm">
                 <div className="md:w-1/2 w-full h-full p-4 flex justify-center items-center">
                    <img src={alm.img} className='w-full md:w-2/3 h-full rounded-lg' alt={alm.name} />
                 </div>
                 <div className="h-full w-full md:w-1/2 p-3 md:p-6">
                    <h1 className='mb-5 text-gray-700 font-bold text-3xl'>{alm.name}</h1>
                    <h2 className='mb-5 text-gray-600 font-bold text-xl'>{alm.role}</h2>
                    <p className='mb-5 text-sm font-medium text-gray-500'>{alm.exp}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-3">
                      {alm.tech.map((tech, index) => (
                          <span key={index} className='px-3 py-2 text-center bg-gray-600 text-white font-semibold shadow-md transition-all duration-200 hover:bg-green-400'>{tech}</span>
                      ))}
                    </div>
                    <Link className='transition-all gap-2 duration-200 rounded-md hover:scale-105 hover:bg-green-700 my-10 shadow-md py-3 px-3 bg-lightGreen text-white font-bold h-14 w-fit flex justify-center items-center' to={alm.link}><BsLink className='text-lg'/>View Porfolio</Link>
                 </div>
              </div>
          ))}
        </div>
        <button onClick={() => setMore(!more)} className={`flex justify-center items-center gap-2 w-fit h-14 px-4 my-5 py-2 ${more ? "bg-gray-500" : "bg-lightGreen"} bg-lightGreen rounded-sm text-white font-medium text-xl transition-all duration-150`}>
          {more ? (<>Show Less <MdOutlineKeyboardDoubleArrowUp /></>) : (<>Show More <MdOutlineKeyboardDoubleArrowDown /></>)}
        </button>
      </div>

        {/* Dev Team */}
  <div className="w-full h-fit p-6 flex justify-center items-center flex-col bg-white py-10">
  <h1 className="text-gray-800 font-bold text-2xl md:text-3xl uppercase text-center mb-5">
    The Developers
  </h1>
  <p className='text-gray-600 font-semibold text-base md:text-xl capitalize text-center mb-5'>Those who made this website to be what it looks like</p>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full mt-5'>
    {
      devs.map((dev, i)=>{
        return (
          <div className="w-full h-fit flex flex-col justify-center items-center shadow-md transition-all duration-200 rounded-md hover:bg-slate-100 p-4 hover:scale-105" key={i}>
            <img src={dev.img} className='w-32 border-[3px] border-lightGreen mb-3 rounded-full shadow-md h-32' alt="" />
            <h1 className='mb-3 text-gray-800 font-extrabold text-xl'>{dev.name}</h1>
            <h2 className='mb-3 text-gray-600 font-semibold text-base'>{dev.role}</h2>
            <Link className='transition-all gap-2 duration-200 rounded-md hover:scale-105 hover:bg-green-700 my-10 shadow-md py-3 px-3 bg-lightGreen text-white font-bold h-14 w-fit flex justify-center items-center' to={dev.link}>
                <BsLink className='text-2xl'/>
                <p>View Portfolio</p>
              </Link>
          </div>
        )
      })
    }
  </div>
</div>


      {/* Newsletter Section */}
      <Footer/>
    </div>
  )
}

export default About




// {/* Our Journey */}
// <div className="flex flex-col md:flex-row justify-between w-full bg-slate-200 h-fit items-center gap-2 p-0 sm:p-4">
// <div className="w-full md:w-1/2 h-1/2 flex justify-center items-center">
//   <img className='w-full h-fit p-0 sm:p-4 rounded-sm' src={main} alt="Our Journey" />
// </div>
// <div className="w-full md:w-1/2 h-full p-4">
//   <h1 className='text-gray-700 font-bold lg:text-4xl md:text-2xl text-xl capitalize text-center md:text-justify mb-4'>Our Inspiring Journey</h1>
//   <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty'>
//     From a humble beginning to a thriving community, our journey has been driven by passion, innovation, and the pursuit of excellence. We started with a simple idea — to bring like-minded people together and create something remarkable. Through dedication and hard work, we’ve grown into a powerful force, shaping the future of tech.
//   </p>
//   <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty '>
//     Our story is a testament to what can be achieved when creative minds come together, combining strengths in diverse fields like data science, machine learning, web development, and beyond. We pride ourselves on embracing challenges, learning from failures, and celebrating our victories, no matter how small.
//   </p>
//   <div className="w-full sm:h-20 h-14 flex items-center justify-center sm:justify-start">
//     <Link to={'/registration'} className='bg-lightGreen h-3/4 flex justify-center gap-3 items-center sm:px-4 sm:py-2 px-2 py-1 text-white font-bold'>
//       <p>Join Our Movement</p>
//       <BsArrowRight className='text-xl font-extrabold'/>
//     </Link>
//   </div>
// </div>
// </div>

//  {/* Our Purpose */}
//  <div className="w-full h-fit p-4 flex justify-center items-center">
//  <div className="md:w-3/4 w-full h-fit p-4">
//    <h1 className='text-gray-700 font-bold text-2xl md:text-4xl capitalize text-center  mb-5'>
//      Our Purpose & Values
//    </h1>
//    <p className='mb-4 text-gray-800 text-base font-medium'>
//      We exist to empower and inspire the next generation of innovators. Our mission is to create a platform where skills are sharpened, ideas are nurtured, and leaders are born. We believe in building sustainable solutions that not only meet today’s challenges but also shape the future. Collaboration, creativity, and integrity are at the heart of everything we do.
//    </p>
//  </div>
// </div>
