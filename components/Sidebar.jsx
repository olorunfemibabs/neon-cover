import React, { useState, useMemo } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SiAdguard } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { GiPiggyBank } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";
import { BsCurrencyExchange } from "react-icons/bs";
import { ImShield } from "react-icons/im";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import styles from "../styles/sidebar.module.css";






const Sidebar = () => {

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

    let menuItems = [
      { id: 1, name: "Home", link: "/", icon: MdHome },
      { id: 2, name: "Insurance", link: "/insurance", icon: SiAdguard },
      { id: 3, name: "Invest", link: "/invest", icon: GiPiggyBank },
      { id: 4, name: "Governance", link: "/governance", icon: RiGovernmentFill },
      { id: 5, name: "Buy Token", link: "/token", icon: BsCurrencyExchange },
    ];

    const router = useRouter();

    const onMouseOver = () => {
      setIsCollapsible(!isCollapsible);
    };

    const activeMenu = useMemo(
      () => menuItems.find((menu) => menu.link === router.pathname),
      [router.pathname]
    );

    const handleSidebarToggle = () => {
      setToggleCollapse(!toggleCollapse);
    };


  return (
    <div onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}
     className={`w-1/5 flex flex-col h-screen justify-between  pb-4 bg-[#19192E] text-[#8B8B8B]
      ${ toggleCollapse ? "w-20" : "w-1/5"} transition-[width] duration-300 ease-in-out `}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative  px-4 border-b-[1px] border-[#C6C6C6]'>
          <div className={`flex items-center justify-between gap-6 pt-[42px] pb-[45px] ${toggleCollapse && 'pb-[66px]'}`}>
            <div className=''>
              <ImShield  className={`text-[#FFFFFF] text-[40px] ${toggleCollapse && 'text-[24px]'}`}/>
            </div>
            <span className={` text-[30px] font-bold text-[#FFFFFF] ${toggleCollapse ? "hidden" : ""}`}>Neon.</span>
          </div>

          {isCollapsible && (
            <button
              className={` absolute right-4 ${toggleCollapse && "relative rotate-180 left-2 mb-[26px]" }`}
              onClick={handleSidebarToggle}
            >
              <BsFillArrowLeftCircleFill color="#FFFFFF"  className={`text-1.5rem ${toggleCollapse && 'text-[16px]'}`}/>
            </button>
          )}

        </div>

      <ul className='flex flex-col items-start mt-4 px-4'>
        {
          menuItems.map(({id, name, link, icon: Icon}) => {
            return (
              <li key={id} className={`cursor-pointer
               hover:text-[#FFFFFF] mt-8 duration-500 ease-in-out rounded w-full overflow-hidden whitespace-nowrap ${ activeMenu.id == id ?  "text-[#FFFFFF] border-r-4 border-[#FFFFFF]" : ""} ${styles.trans}`}>
                <Link href={link} className="flex flex-row gap-8 w-full items-center">
                  <span>
                    <Icon size={20}/>
                  </span>
                  <span className={`text-[14px] font-[500] ${toggleCollapse && "hidden"}`}>{name}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
      </div>

      <div>
      <ConnectButton />
        
      </div>
    </div>
  )
}

export default Sidebar

