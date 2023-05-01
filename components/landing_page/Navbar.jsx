import { useState } from 'react';

import { navLinks } from '../../constants';
import {neon } from '../../assets';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";



const Navbar = () => {
    const [active, setActive] = useState('');
    const [toogle, setToogle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Image src="/neon.png" alt='logo' width={124} height={32} />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map(( nav, index ) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite
             ${active === nav.title ? 'text-white' : 'text-dimWhite'}
             ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'} hover:text-white
             ${index===navLinks.length-1 ? 'bg-[#06080D] rounded-full px-4 py-1 box-shadow' : ''}`} 
             onClick={() => setActive(nav.title)}
          >
            <Link href={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
     
          <div className=' text-3xl text-dimWhite absolute right-8 top-6 cursor-pointer sm:hidden' onClick={() => setToogle((prev) => !prev)}>
            {toogle ? <MdOutlineClose/> : <HiMenuAlt3/>}
          </div>

          <div
            className= {`${toogle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
            `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col'>
              {navLinks.map(( nav, index ) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]
                  ${active === nav.title ? 'text-white' : 'text-dimWhite'}
                  ${index===navLinks.length-1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar