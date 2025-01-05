import { useState } from "react"
import { assets } from "../assets/assets"
import { useEffect } from "react";

const NavBar = () => {

    const [toggle,setToggle] = useState(false);

    useEffect(()=>{
        document.body.style.overflow = toggle ? 'hidden' : 'auto';
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[toggle])

  return (
    <div className="absolute top-0 left-0 w-full z-10">

        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
            <img src={assets.logo} alt="logo"/>
            <ul className="hidden md:flex gap-7 text-white">
                <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
                <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
                <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
            </ul>
            <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
            <img onClick={()=>setToggle(true)} src={assets.menu_icon} alt="menu" className="md:hidden w-7 cursor-pointer"/>
        </div>

        {/* ---------------Mobile Menu--------------- */}
        <div className={`md:hidden ${toggle ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className="flex justify-end p-6 cursor-pointer">
                <img onClick={()=>setToggle(false)} src={assets.cross_icon} alt="close" className="w-6"/>
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <a onClick={()=>setToggle(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
                <a onClick={()=>setToggle(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
                <a onClick={()=>setToggle(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
                <a onClick={()=>setToggle(false)} href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>   
            </ul>
        </div>

    </div>
  )
}

export default NavBar
