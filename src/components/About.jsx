import React from 'react'
import Laptop from '../assets/laptop.jpg'

const About = () => {
  return (
    <div className='w-full bg-[white]	h-screen py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#] font-bold'>My Projects</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>View a demo of my projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cumque delectus. Officiis eum quasi est 
              expedita facere culpa? Delectus mollitia vitae quasi a atque sunt iste fugiat deleniti facere molestias.
            </p>
            
            <button className='bg-[#b640ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
          </div>
        </div>
        
    </div>
  )
}

export default About