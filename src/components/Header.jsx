import { SiFerrari } from "react-icons/si";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-scroll';


function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='bg-[#0A0A0A] flex justify-between items-center p-4 fixed top-0 w-full h-14 z-10 pl-6'>
          <SiFerrari size={35} color="white"/>
        <div>
        <div className='text-white gap-16 pr-8 md:flex hidden'>
            <Link to="collection" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer' >Collection</Link>
            <Link to="Reviews" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer'>Reviews</Link>
            <Link to="About Us" spy={true} smooth={true} duration={500} offset={-70} className='hover:cursor-pointer'>About Us</Link>
        </div> 
        <div>
        {!toggleMenu && (
          <HiMenuAlt3 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <div className=' gap-4 fixed -right-2 -top-0 p-3 w-[30vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md bg-gray-300 bg-glass text-black animate-slide-in'>
            <AiOutlineClose color="black" size={28} className="hover:cursor-pointer" onClick={() => setToggleMenu(false)}/>
            <Link to="Collection" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> setToggleMenu(false)} className='hover:cursor-pointer justify-center  mt-2 py-1.5 px-4 w-full text-md font-medium' >Collection</Link>
            <Link to="Reviews" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> setToggleMenu(false)} className='hover:cursor-pointer justify-center  mt-2 py-1.5 px-4 w-full text-md font-medium'>Reviews</Link>
            <Link to="About Us" spy={true} smooth={true} duration={500} offset={-70}  onClick={()=> setToggleMenu(false)} className='hover:cursor-pointer justify-center mt-2 py-1.5 px-4 w-full text-md font-medium'>About Us</Link>
          </div>
        )}
      </div>
        </div>
    </div>
  )
}

export default Header

