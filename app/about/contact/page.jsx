import Image from "next/image"
import Facewash from "@/public/Facewash.jpeg"
import {MdEmail} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {IoMdHome} from "react-icons/io"
import {FaFacebook} from "react-icons/fa"
import {IoLogoInstagram} from "react-icons/io"
import { FaSquareXTwitter } from 'react-icons/fa6';
import Link from "next/link"



const page = () =>  {

    return(
        <div className="bg-[#F4F1F8]">
            <section className="bg-[#7A003F] h-55">
                <p className="text-white font-light font-serif p-5 text-center ">Get in touch with us</p>
                <h1 className="text-3xl text-white font-serif font-bold p-2 text-center">We are ready to assist<br/> you 24/7</h1>
            </section>
            <div className="md:flex md:justify-between">
                <div className="w-120 h-120 rounded-3xl overflow-hidden shadow-lgborder border-pink-200 p-5 pr-8 ">
                    <Image src={Facewash} alt="facewash" className="w-full h-full object-cover"/>
                </div>
                <div className="shadow-lg p-5 ">
                    <p className="text-sans font-bold">Get in touch</p>
                    <h1 className="text-4xl font-bold">We are here to help <br/> you always....</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima<br/> quis nam totam sapiente provident! Nostrum nesciunt tenetur reprehende,<br/> molestiae minima eligendi repellat.</p>
                    <div>
                        <IoMdHome className="text-2xl"/>
                        <p className="text-2xl">Visit us:</p>
                        <p className="font-extralight">No 10 hamsburg avenue uk</p>
                        </div>
                     <div>
                        <MdEmail className="text-2xl"/>
                        <p className="text-2xl">Drop Us:</p>
                        <p className="font-extralight">codebyriven@gmail.com</p>
                    
                        </div>
                      <div>
                        <FaPhoneAlt className="text-2xl"/>
                        <p className="text-2xl">Call us</p>
                        <p>Call:+1567777445</p>
                        </div>
                </div>
            </div>
            <section className="h-100 bg-blue-700">
                <div>
              <div className="shadow-lg max-w-md mx-auto border-amber-600 rounded mt-5">
                <div className="r">
                <p className="text-xl font-serif text-white mb-2">Enter your Name:</p>
                <input type="text"
                 placeholder="Please enter your name pease"
                  className="border border-black w-80 h-8 rounded"/>
              </div>
               <div>
                <p className="text-xl font-serif text-white mb-2">Enter your Email:</p>
                <input type="text"
                 placeholder="Please enter your email pease"
                  className="border border-black w-80 h-8 rounded"/>
              </div>
               <div>
                <p className="text-xl font-serif text-white mb-2">Enter your Phone:</p>
                <input type="text"
                 placeholder="Please enter your Phone pease"
                  className="border border-black w-80 h-8 rounded"/>
              </div>
               <div>
                <p className="text-xl font-serif text-white mb-2">Service you need:</p>
                <input type="text"
                 placeholder="Please enter your email pease"
                  className="border border-black w-80 h-8 rounded"/>
              </div>
               <div>
                <p className="text-xl font-serif text-white mb-2">Enter your Name:</p>
                <input type="text"
                 placeholder="Please enter your email pease"
                  className="border border-black w-80 h-8 rounded"/>
              </div>
              <div className=" font-bold pr-45  p-4 text-center ">
                 <button className="bg-[#D6CFE0] rounded-md py-2 px-5 w-40">Submit</button>
            </div>
              </div>
              </div>

            </section>
            <footer className='bg-[#5317A6] px-4 md:px-16 lg:px-28'>
              <div className='grid grid-cols-1  md:grid-cols-3 gap-7'>
              <div>
                <h2 className='text-xl text-black underline font-bold'>About us</h2>
                <p className='text-white font-extralight'>We are dedicated to providing the best products<br/> and services to our customers</p>
              </div>
              <div>
                <h1 className='text-xl text-black underline font-bold p-2'>Quick links</h1>
                <ul className='p-2'>
                  <Link className='hover:underline text-gray-300 font-bold' href="/">Home</Link><br/>
                  <Link className='hover:underline text-gray-300 font-bold' href="/">Services</Link><br/>
                  <Link className='hover:underline text-gray-300 font-bold' href="/">Portfolio</Link><br/>
                  <Link  className='hover:underline text-gray-300 font-bold' href="/">Contact</Link><br/>
                
                </ul>
              </div>
              <div>
                 <h1 className=' text-black font-bold text-xl p-2'>Follow us</h1>
                 <ul className='flex space-x-2'>
                   <Link className='hover:underline text-gray-300' href="/"><FaFacebook className='text-2xl'/></Link>
                  <Link className='hover:underline text-gray-300' href="/"><IoLogoInstagram className='text-2xl'/></Link>
                  <Link className='hover:underline text-gray-300' href="/"><FaSquareXTwitter className='text-2xl'/></Link>
                 </ul>
             
              </div>
              </div>
              <div className='border-gray-600 border-t p-4'>
                <p className='text-center'>@ 2024 codebyriven. All rights reserved</p>
              </div>
            
            </footer>

        </div>
    )

  }
  export default page