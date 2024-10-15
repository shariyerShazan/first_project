import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import Logo from '../assets/Logo.png'
import { IoMdSearch } from "react-icons/io";
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className='shadow bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
        {/* upper navbar start */}
        <div className='bg-primary/50 py-3 sm:py-0 '>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="/" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={Logo} alt="Logo"  className='w-10'/>
                     shop
                    </a>
                </div>
                {/* search bar and order button */}
                <div className='flex justify-between items-center gap-4'>
                    <div className='group relative hidden sm:block '>
                        <input type="text" name="" className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary ' placeholder='search' />
                        <IoMdSearch className='text-gray-700 group-hover:text-primary absolute -translate-y-6 right-3 '/>
                    </div>
                        {/* order button */}
                        <button onClick={()=> alert("it's not available right now")} className='group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 '>
                         <FaCartShopping />
                        <span className='group-hover:block hidden transition-all duration-200 '>
                            Order
                        </span>
                        </button>
                        {/* darkmode theme */}
                        <div>
                            <DarkMode />
                        </div>
                </div>
               
            </div>
        </div>
        {/* upper navbar end */}



        {/* lower navbar start */}
        <div>
        </div>
        {/* lower navbar end */}

    </div>
  )
}

export default Navbar

