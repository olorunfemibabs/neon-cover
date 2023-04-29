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
     className={`w-1/5 flex flex-col h-screen justify-between px-4 pt-8 pb-4 bg-light
      ${ toggleCollapse ? "w-20" : "w-1/5"} transition-[width] duration-300 ease-in-out `}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative'>
          <div className='flex flex-row items-center justify-between gap-4 ml-1'>
            <div className='text-[#27AE60] w-4 h-4'>
              <ImShield />
            </div>
            <span className={`mt-2 text-lg font-medium text-[#27AE60] ${toggleCollapse ? "hidden" : ""}`}>Neon.</span>
          </div>

          {isCollapsible && (
            <button
              className={` absolute right-0 ${toggleCollapse ? "relative rotate-180" : ""}`}
              onClick={handleSidebarToggle}
            >
              <BsFillArrowLeftCircleFill color="#27AE60" fontSize="1.5rem" />
            </button>
          )}

        </div>

      <ul className='flex flex-col items-start mt-24'>
        {
          menuItems.map(({id, name, link, icon: Icon}) => {
            return (
              <li key={id} className={`flex flex-row items-center cursor-pointer
               hover:text-[#27AE60] duration-500 ease-in-out rounded w-full overflow-hidden whitespace-nowrap ${ activeMenu.id == id ?  "text-[#27AE60] border-r-4 border-[#27AE60]" : ""} ${styles.trans}`}>
                <Link href={link} className="flex flex-row items-center justify-center w-full px-8">
                  <span>
                    <Icon />
                  </span>
                  <span>{name}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <ConnectButton />
      </div>

      <div>
        Ⓒ Web3Bridge.
      </div>
    </div>
  )
}

export default Sidebar

