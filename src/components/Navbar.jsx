import React, { Fragment, useEffect , useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';




const buttonStyling = { color: "white", fontSize: "1.2em" };
let circleClasses = "inline-block p-2 rounded-full w-15 mx-auto";


const outline = { z: "9999", size: "25" };



const Navbar = () => {
    const [nav, setNav] = useState(false)


   
   
    
    const handleNav = () => {
        setNav(!nav)
    }

  
   
    

      return (
   
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        
        <h1 className='w-full text-3xl font-extrabold text-purple'>Del.</h1>

  
{/* Socials here for full screen*/}

<div className='p-40 center w-3/6 gap-7 mx-auto hidden md:flex'>

        <span style={{ background: "rgba( 50,10,200,0.5" }} className={circleClasses}>
        <FiTwitter style={buttonStyling}/>
        </span>

        <span style={{ background: "rgba( 70,10,200,0.5)" }} className={circleClasses}>
        <FiTwitter style={buttonStyling}/>
        </span>

        <span style={{ background: "rgba( 100,10,200,0.5)" }} className={circleClasses}>
        <FiTwitter style={buttonStyling}/>
        </span>

        </div>
       

        {/* hide the nav for smaller screens*/}

        <ul className=' hidden md:flex'>

            {/* nav for bigger screens*/}
                  <li className='md:text-xl text-xl p-4'>About</li>
            <li className='md:text-xl text-xl p-4'>Portfolio</li>
            <li className='md:text-xl text-xl p-4'>Contact</li>
        </ul>

{/* on/off for the hamburger menu for smaller screens*/}

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
            
        </div>

{/* comment here */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 m-4 md:hidden'>REACT.</h1>

        <ul className='uppercase p-4'>
            
{/* nav for smaller screens in the hamburger menu*/}

            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Portfolio</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>

        </div>

    </div>
    
  )
}

export default Navbar