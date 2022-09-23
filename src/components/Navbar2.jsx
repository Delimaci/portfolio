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

    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
 

  return (
    <div className={color ? 'transition-all duration-700 bg-black/80 sticky top-0 z-50' : 'transition-all duration-700 top-0  '}>
    <div className='z-50 sticky top-0  flex items-center justify-center h-24  w-full mx-auto px-50 2xl:px-60  text-white'>
        <div className="text-2xl font-bold text-center uppercase ">
            <h1 className=' text-purple-400 text-4xl md:text-5xl  md:px-6'></h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden scale-150 '>
            <AiOutlineMenu onClick={someFunc} className='scale-150 cursor-pointer ' />
            </div>

            <ul className='hidden md:px-2 md:flex gap-8 p-6 px-40 uppercase  '>
            <li className='md:text-xl text-xl p-4'>About</li>
            <li className='md:text-xl text-xl p-4' >Portfolio</li>
            <li className='md:text-xl text-xl p-4' >Services</li>
            <li className='md:text-xl text-xl p-4'>Contact</li>
            </ul>

            <MenuItems showMenu={someFunc} active={active} />

        </nav>

    </div>
    </div>
  )
}

export default Navbar2