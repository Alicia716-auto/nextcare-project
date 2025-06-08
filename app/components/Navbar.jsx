"use client"
import Link from "next/link";
import { useState } from "react";
import {HiMenu} from 'react-icons/hi'
import {IoClose} from "react-icons/io5"
import { useEffect } from "react";
import React from 'react'
import {IoMdHome} from "react-icons/io"
import {IoPersonSharp} from "react-icons/io5"
import {FiPhoneCall} from "react-icons/fi"
import { IoBagCheck } from "react-icons/io5";


const Navbar = () => {
        const [isOpen, setIsOpen]=useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    useEffect (()=> {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    
    },[])
    useEffect(() => {
        if(isOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    },[isOpen])
  return (
    <div>
    <nav className="bg-[#4E7A8E] h-20 w-full">
        <div className="flex items-center justify-between p-2 ">
            <h1 className=" text-sm font-medium mt-2 font-sans">@Codebyriven</h1>
              {!isOpen &&  (
                <div onClick={toggleMenu} className="cursor-pointer mt-2.5 pl-3.5 md:hidden">
                    <HiMenu size={30} />
                </div>
            )}
            {isOpen &&  (
                <div onClick={toggleMenu} className="cursor-pointer md:hidden z-40">
                    <IoClose size={30}/>
                </div>
            )}
            {isOpen ? (
                <div className="bg-[#4E7A8E] flex justify-center pb-50 items-center h-full fixed flex-col gap-10 duration-300 ease-in w-25 left-0 top-0 z-10 min-h-screen overflow-x-hidden overflow-y-hidden ">
                    <Link href="/" className="text-xl font-bold hover:text-green-100">Home <IoMdHome className="text-5xl md:hidden pl-3 text-blue-200"/></Link>
                 <Link href="/about/contact/services" className="text-xl font-bold hover:text-green-100">Services <IoPersonSharp className="text-5xl md:hidden pl-3 text-blue-200"/></Link>
                  <Link href="/about/contact/services/portfolio" className="text-xl font-bold hover:text-green-100">Portfolio<IoBagCheck className="text-5xl md:hidden pl-3 text-blue-200"/></Link>
                   <Link href="/about/contact" className="text-xl font-bold hover:text-green-100">Contact<FiPhoneCall className="text-5xl md:hidden pl-3 text-blue-200"/></Link>
                    

                </div>

            ): (
                <div className="bg-gray-800 flex fixed justify-center items-center flex--col h-full gap-10 duration-300 ease-in w-screen left-[-150%] top-0 z-10 min-h-screen overflow-x-hidden overflow-y-hidden">

                </div>

            )}
             
            <ul className="gap-4 space-x-4 hidden md:flex">
                <Link className="text-xl font-extralight font-sans " href="/">Home</Link>
                 <Link className="text-xl font-extralight font-sans" href="/about/contact/services">Services</Link>
                  <Link className="text-xl font-extralight font-sans" href="/about/contact/services/portfolio">Blog</Link>
                   <Link className="text-xl font-extralight font-sans" href="/about/contact">Contact</Link>
            </ul>
            <div className="space-x-2 font-bold flex-shrink-0 mt-2   space-between justify-end text-left pr-10 pl-8 ">
                <button className="bg-[#D6CFe0]  rounded-md text-sm py-1 m-2 px-2">Sign up</button>
                 <button className="bg-[#D6CFE0]  rounded-md text-sm m-2 py-1 px-2">Login</button>
            </div>
        </div>
    </nav>
    
    </div>
   
        
  
  )
}

export default Navbar
