import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-black px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-[#b640ff] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want a similar site built for you?</h1>
                <p>Sign up to my newsletter</p>
            </div>
            <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#b640ff] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Notify Me</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter