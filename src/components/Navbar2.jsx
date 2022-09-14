import React, {useState} from 'react'
import MenuItems from './MenuItems'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar2 = () => {

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-[#121212] text-white'>
        <div className="text-2xl font-bold text-center uppercase">
            <h1 className=' text-purple-500 text-4xl md:text-5xl'>Del.</h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden scale-150'>
            <AiOutlineMenu onClick={showMenu} className='scale-150 cursor-pointer' />
            </div>

            <ul className='hidden md:flex gap-8 p-6 px-40 uppercase bg-black/5 '>
            <li className='md:text-xl text-xl p-4'>About</li>
            <li className='md:text-xl text-xl p-4' >Portfolio</li>
            <li className='md:text-xl text-xl p-4'>Contact</li>
            </ul>

            <MenuItems showMenu={showMenu} active={active} />

        </nav>

    </div>
  )
}

export default Navbar2