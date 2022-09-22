import React, {useState} from 'react'
import MenuItems from './MenuItems'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar2 = () => {

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
       
       
        
    }
    function lockScroll() {
        document.body.style.overflow = 'hidden';
   
    }
   
    function someFunc() {
        showMenu();
        lockScroll();
    }

  return (
    <div className='fixed flex justify-between items-center h-24  w-full mx-auto px-10  2xl:px-60 bg-transparent text-white'>
        <div className="text-2xl font-bold text-center uppercase ">
            <h1 className=' text-purple-400 text-4xl md:text-5xl  md:px-6'></h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden scale-150 '>
            <AiOutlineMenu onClick={someFunc} className='scale-150 cursor-pointer ' />
            </div>

            <ul className='hidden md:px-2 md:flex gap-8 p-6 px-40 uppercase '>
            <li className='md:text-xl text-xl p-4'>About</li>
            <li className='md:text-xl text-xl p-4' >Portfolio</li>
            <li className='md:text-xl text-xl p-4'>Contact</li>
            </ul>

            <MenuItems showMenu={someFunc} active={active} />

        </nav>

    </div>
  )
}

export default Navbar2