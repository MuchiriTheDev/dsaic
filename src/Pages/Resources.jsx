import { useState } from 'react'
import Blog from '../assets/blog-lgo.png';
import Documentation from '../assets/docs-logo.png';
import Reset from '../assets/reset.png';
import Author from '../assets/author.png';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpg';
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';

const Resources = () => {

  const resources = [
  {
    type: 'Blog',
    image: blog1,
    author:'John Doe',
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'30/07/2023'
  },
  {
    type: 'Article',
    image:article1,
    author:'Magaret Awino',
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'10/12/2024'
  },
  {
    type: 'Doc', 
    image:doc1,
    author:'Peter Kariuki', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'15/07/2022'
  },
  {
    type: 'Blog', 
    image:blog2,
    author:'Victor Rono', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'22/09/2024'
  },
  {
    type: 'Doc', 
    image:doc2,
    author:'John Doe', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'01/04/2020'
  },
  {
    type: 'Doc', 
    image: doc3,
    author:'Jane Wanjiru',
    title:'Lorem Ipsum', 
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'10/09/2024'
  },
  {
    type: 'Article', 
    image: article2,
    author:'Muchiri Edwin', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'13/09/2024'
  },
  {
    type: 'Blog', 
    image: blog3,
    author:'Michael Ombati', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'05/11/2022'
  },
  {
    type: 'Doc', 
    image: doc1,
    author:'Kilonzo Abel', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'07/01/2024'
  },
  {
    type: 'Article', 
    image: article1,
    author:'Doreen Nyananga', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'10/09/2024'
  },
  {
    type: 'Article', 
    image: article2,
    author:'Kipsang Eliud', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'22/01/2024'
  },
  {
    type: 'Blog', 
    image: blog1,
    author:'Ali Hassan', 
    title:'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut,...',
    date:'02/02/2023'
  }
  ];

  const [resourceItems,setResourceItems] = useState(resources);

  const sortButtons = [
  {
    buttonName : 'Article',
    type: 'Article',
    buttonLogo : Documentation
  },
  {
    buttonName : 'Blog',
    type:'Blog',
    buttonLogo : Blog
  },
  {
    buttonName : 'Documentation',
    type:'Doc',
    buttonLogo : Documentation
  }
  ];

  const filterResources = (type) => {
    const filteredResources = resources.filter(resource => resource.type === type );
    setResourceItems(filteredResources);
  };

  const resetResourceItems = () => {
    setResourceItems(resources); 
  };

  return (
    <div className='bg-gray-100'>
      <div className='block '>
        <p className='max-w-[95%] text-gray-700 font-bold 
        text-2xl md:text-4xl  text-center lg:text-center 
        md:text-justify my-4'>
          Explore our Learning Resources
        </p>
        
        <div className='flex justify-center gap-x-5 mb-6'>
          <p className="mx-[10px] text-green font-bold  text-[13px] lg:text-[17px">
            Sort by:
          </p>
          {sortButtons.map((sortButton,index) => {
            return (
                <button key={index} className='text-[13px] border-solid border-lightGreen border-[1.5px]
                  px-2 py-1 text-gray-700 font-semibold rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.3)]
                  hover:scale-[1.05] transition-transform duration-150'onClick = { () => filterResources(sortButton.type)}>
                  <img className="lg:w-[18px] inline-block w-[10px] " 
                              src={sortButton.buttonLogo}/>{sortButton.buttonName}
                </button>
            )
          })}
          <button className='text-[13px] border-solid border-lightGreen border-[1.5px]
                  px-2 py-1 text-gray-700 font-semibold rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.3)]
                  hover:scale-[1.05] transition-transform duration-300' onClick={resetResourceItems}>
                    <img className="lg:w-[18px] inline-block w-[10px] " 
                              src={Reset}/>
                    Reset
          </button>
        </div>
      </div>
      <div className='grid gap-x-1 gap-y-3 grid-cols-3 sm:grid-cols-4 mx-4 transition-opacity duration-500 ease-in opacity-0 
            animate-fadeIn'>
        {resourceItems.map((resourceItem,index) => {
            return (
              <div key={index} className=' relative rounded-[20px] overflow-hidden cursor-pointer'>
                <div>
                  <img className='md:w-[300px] sm:w-[200px] rounded-[20px] hover:scale-[1.01]' src= {resourceItem.image}
                    alt={resourceItem.type}/>
                    <div className=' flex-row absolute backdrop-blur-xl hover:scale-[1.01] 
                          left-0 right-0 bottom-0 top-[75px] lg:top-[150px] lg:right-2
                          '>
                        <div className='flex gap-x-14'>
                          <div className=' flex items-center bg-lightGreen px-1 rounded-[5px]'>
                            <p className='text-white font-bold text-[6px] lg:text-[12px] md:text-base'>
                              {resourceItem.type}
                            </p>
                          </div>
                          <div className=' mx-[70px] text-white font-bold  text-[9px] lg:text-[13px] md:text-base
                           mx-6 lg:mx-[130px]'>
                            {resourceItem.date}
                          </div>
                        </div>
                        <div className='mb-[10px]'>
                          <p className='text-green font-bold text-[10px] md:text-base lg:mx-[10px] ml-2'>
                            {resourceItem.title}
                          </p>
                          <p className='text-white font-bold text-[7.3px] lg:text-[13px] md:text-base 
                          lg:mx-[10px] ml-2'>
                            {resourceItem.body}
                          </p>
                        </div>
                        <div className="flex">
                          <img className="" src=''/>
                          <p className='mx-[10px] text-green font-bold  text-[9px] lg:text-[13px] 
                            lg:mx-[20px] lg:mt-[20px]'>
                            <img className="lg:w-[18px] lg:mb-[10px] inline-block w-[10px] mb-[4px]" 
                              src={Author}/>
                            {resourceItem.author}
                          </p>
                        </div>
                    </div>
                </div>
              </div>
            );
        })}
      </div>   
    </div>
      
  )  
}

export default Resources;