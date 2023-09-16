"use client"

import { navOptions } from "@/utils/NavConstants";
import {AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai"
import { CommonApplicationLogo } from "../../Atoms/LogoImage";
import { usePathname } from 'next/navigation';

const CommonNavBar = () => {

  const pathname = usePathname()

  return (
    <nav className="flex flex-row items-center justify-center w-full bg-primary py-6">
      <div className="flex flex-row items-center justify-between w-full max-w-[1400px]">
        <CommonApplicationLogo/>
        <div className="flex flex-row items-center justify-between w-5/6 gap-8">

        <div className="flex flex-row items-center justify-center gap-8 w-full">
          {pathname !== "/authentication" ? <div className="relative w-[max-content]">
            <input className="w-[16em] h-[2.5em] px-2 rounded-sm" type="text" placeholder="Search Products..."/>
            <button className="absolute right-0 h-[2.5em] px-2">
              <AiOutlineSearch className="text-slate-500 text-xl font-bold"/>
            </button>
          </div> : null}

          <ul className="flex flex-row items-center gap-8 w-full justify-evenly">
            {navOptions.map((i) => (
              <li key={i.name}>
                <a className={`text-lg capitalize text-tertiary duration-300 hover:text-secondary ${pathname === i.link ? "text-secondary": "text-tertiary" }`} href={i.link}>{i.name}</a>
              </li>
            ))}
          </ul>
        </div>

          <ul className="flex flex-row items-center gap-8 self-end">
           {pathname !== "/authentication" ? <li className="">
              <a href="/">
                <AiOutlineShoppingCart className="text-tertiary text-sm bg-secondary rounded-full w-10 h-10 p-2 duration-300 hover:bg-tertiary hover:text-secondary"/>
              </a>
            </li> : null}
            <li className="w-full">
              <a href="/authentication" className={`text-lg capitalize ${pathname === "/authentication" ? "text-secondary": "text-tertiary" } duration-300 hover:text-secondary`}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CommonNavBar;
