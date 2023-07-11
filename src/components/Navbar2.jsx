import React, {useState} from 'react'
import MenuItems from './MenuItems'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiGithubsponsors} from 'react-icons/si'
const Navbar2 = () => {
   

    const buttonStyling = { color: "white", fontSize: "1.2em" };
    let circleClasses = " md:absolute right-6 scale-150 top-10 right-80";
    
    

    
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
    <div className={color ? 'shadow-xl transition-all duration-700 bg-white sticky top-0 z-50 ' : 'transition-all duration-700 top-0 bg-transparent '}>
    <div className='z-50 sticky top-0  flex items-center justify-center h-24   mx-auto px-50 2xl:px-50  text-white'>
        <div className="text-2xl font-bold text-center uppercase ">
            <h1 className=' text-purple-400 text-4xl md:text-5xl  md:px-6'></h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden scale-150 '>
            
            <AiOutlineMenu onClick={someFunc} className={color ? 'scale-150 cursor-pointer text-black ' : 'scale-150 cursor-pointer text-white '} />
            </div>
             
            <ul className='hidden md:px-2 md:flex gap-8 sm:gap-4 p-6 uppercase  ' 
            href="#about">
                
            <li    
            
            className={color ? 'md:text-xl text-xl p-4 transition-all duration-700 text-black' 
            : 'md:text-xl text-xl p-4 transition-all duration-700 top-0 text-white '}>About
            
            </li>


            
            <li     className={color ? 'md:text-xl text-xl p-4 transition-all duration-700 text-black' : 'md:text-xl text-xl p-4 transition-all duration-700 top-0 text-white '}>Portfolio</li>
            <li     className={color ? 'md:text-xl text-xl p-4 transition-all duration-700 text-black' : 'md:text-xl text-xl p-4 transition-all duration-700 top-0 text-white '}>Services</li>
            <li     className={color ? 'md:text-xl text-xl p-4 transition-all duration-700 text-black' : 'md:text-xl text-xl p-4 transition-all duration-700 top-0 text-white '}>Contact</li>
           
            <div className={color ? 'flex gap-5 p-6 py-5 scale-150 xl:absolute right-20 px- xl:px-40 transition-all duration-700 text-black' : 'flex gap-5 p-6 py-5 scale-150 xl:absolute right-20 px- xl:px-40 transition-all duration-700 text-white '} >
            <span  >
        <FiTwitter  />
        </span>
        <span >
        <FiFacebook />
        </span>
        <span >
        <AiOutlineGithub />
        </span>
</div>
        
            </ul>
            
            <MenuItems showMenu={someFunc} active={active} />

        </nav>
       
    </div>
   
    </div>
  )
}

export default Navbar2