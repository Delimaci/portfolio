import React from 'react'
import Typed from 'react-typed';
import Laptop from '../assets/laptop.jpg'

const Hero = () => {
  return (
    


    <div className='w-full  	py-10 md:py-8 px-4 justify-center '>
   <div className='max-w-[800px] mt-[-96px]  w-full h-screen mx-auto text-center flex flex-col justify-center text-white'>
  
        
        <p className='rounded-full my-6 mx-auto py-2 bg-[#ffa0f2]/90 w-[230px] text-[#fff] font-bold p-2'>UI/UX Developer</p>
        <div className="animate-wave text-5xl md:text-7xl ">👋</div>
        <br></br>
        <h1 className='  px-10 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6  text-[#fdfbfd]'>Hi, I'm Gabrielle.  </h1>

       
        
        <div className='flex justify-center items-center'>

        <p className='md:text-3xl sm:text-3xl text-md font-bold py-4 text-[#ffeafcd7]'>Creating experiences through</p>

        <Typed 
        className='text-[#ffa0f2] md:text-4xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 py-5'
        strings={['HTML', 'CSS', 'REACTJS', 'Tailwind', 'Bootstrap']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop
        />
        </div>
        <p className='md:text-2xl text-xl font-bold  text-[#ffd8f5] py-3'></p>



       

          

        <div className='p-4'>

        <button className=' text-[#b7ff00] border-[#b7ff00] border w-[200px] rounded-md shadow-lg font-bold my-6 mx-auto py-5'>✉ Say hi!</button>

       
   
        </div>
        </div>
        
   </div>
   
    
  )
}

export default Hero