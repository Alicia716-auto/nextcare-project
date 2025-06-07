"use client"
import Link from "next/link";
import { useState } from "react";
import {HiMenu} from 'react-icons/hi'
import {IoClose} from "react-icons/io5"
import { useEffect } from "react";
import React from 'react'


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
            <h1 className=" text-sm font-serif">@Codebyriven</h1>
              {!isOpen &&  (
                <div onClick={toggleMenu} className="cursor-pointer md:hidden">
                    <HiMenu size={30} />
                </div>
            )}
            {isOpen &&  (
                <div onClick={toggleMenu} className="cursor-pointer md:hidden z-40">
                    <IoClose size={30}/>
                </div>
            )}
            {isOpen ? (
                <div className="bg-gray-800 flex justify-center items-center h-full fixed flex-col gap-10 duration-300 ease-in w-screen left-0 top-0 z-10 min-h-screen overflow-x-hidden overflow-y-hidden ">
                    <Link href="/" className="text-2xl font-bold hover:text-green-100">Home</Link>
                 <Link href="/about/contact/services" className="text-2xl font-bold hover:text-green-100">Services</Link>
                  <Link href="/about/contact/services/portfolio" className="text-2xl font-bold hover:text-green-100">Portfolio</Link>
                   <Link href="/about/contact" className="text-2xl font-bold hover:text-green-100">Contact</Link>
                     <button className="text-sm bg-blue-500 font-bold rounded  px-4 py-2">Sign in</button>
                <button className="text-sm bg-blue-500 font-bold rounded  px-4 py-2">Sign Up</button>

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
            <div className="space-x-4 font-bold flex space-between justify-end text-left pr-10 ">
                <button className="bg-[#D6CFe0] rounded-md py-2 m-2 px-4">Sign up</button>
                 <button className="bg-[#D6CFE0] rounded-md m-2 py-2 px-4">Login</button>
            </div>
        </div>
    </nav>
    
    </div>
   
        
  
  )
}

export default Navbar
