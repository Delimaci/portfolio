import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const MenuItems = ({showMenu, active}) => {

  function UnlockScroll() {
    document.body.style.overflow = 'visible';

}
function someFunc2() {
  showMenu();
  UnlockScroll();
}


  return (
   
          <ul className={active ? 'md:hidden flex-col flex items-center fixed inset-0 w-full uppercase gap-8 justify-center text-white p-8 bg-black/40 backdrop-blur ease-in-out duration-700' : 'fixed left-[100%]'}>
            <AiOutlineClose onClick={someFunc2} size={20} className='text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' />
            <li className='text-white transition duration-500 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-110 
                       rounded-lg p-4 border border-white-900 cursor-pointer' >About</li>
        
        <li className='text-white transition duration-500 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-110 
                       rounded-lg p-4 border border-white-900 cursor-pointer' >Portfolio</li>
        

        <li className='text-white transition duration-500 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-110 
                       rounded-lg p-4 border border-white-900 cursor-pointer' >Contact</li>
        

            </ul>
  
  )
}

export default MenuItems