
import Towel from "@/public/Towel.jpg"
import Image from "next/image"
import {RiBrushAiFill} from "react-icons/ri"
import { PiHairDryer } from "react-icons/pi"
import {FaShower} from "react-icons/fa6"
import { FaPumpSoap } from "react-icons/fa"
import Headdie from "@/public/Headdie.jpg"
import {FaFacebook} from "react-icons/fa"
import {IoLogoInstagram} from "react-icons/io"
import { FaSquareXTwitter } from 'react-icons/fa6';
import Link from "next/link"


const page = () =>  {

    return(
        <div className="bg-[#F4C2C3]">
            <h1 className="text-3xl mb-3 font-bold font-serif p-2 md:text-center">Show your elegance, <br/> with your nails</h1>
            <div className="w-full h-96 bg-white rounded-t-[200px] rounded-b-none overflow-hidden flex items-center justify-center">
                <Image src={Towel} alt="towel" className="object-cover w-full h-full" />
            </div>
            <div className="md:flex p-5">
                <div className="shadow-md md:p-4">
                    <p className="font-bold">Creativity</p>
                    <RiBrushAiFill className="text-3xl"/>
                    <p className="font-extralight">Risus auctor niguila temptus and dolor<br/> vitae neque feugiat ligula suscript and riscus mauri</p>
                </div>
                <div className="shadow-md md:p-4">
                    <p className="font-bold">Add ons</p>
                    <PiHairDryer className="text-3xl"/>
                     <p className="font-extralight">Risus auctor niguila temptus and dolor<br/> vitae neque feugiat ligula suscript and riscus mauri</p>

                </div>
                <div className="shadow-md md:p-4">
                    <FaShower className="text-3xl"/>
                    <p className="font-extrabold">Wash</p>
                    <p className="font-extralight">Risus auctor niguila temptus and dolor<br/> vitae neque feugiat ligula suscript and riscus mauri</p>
                </div>
                <div className="shadow-md md:p-4">
                    <FaPumpSoap className="text-3xl"/>
                    <p className="font-bold">Treatment</p>
                 <p className="font-extralight">Risus auctor niguila temptus and dolor<br/> vitae neque feugiat ligula suscript and riscus mauri</p>
                </div>
                
        
            </div>
            <div className="md:flex md:justify-between">
                 <div className="shadow-md p-5">
                                    <p className="text-white font-extralight ">Get Your shine on</p>
                                    <h1 className="text-4xl font-sans font-extrabold ">Choose the Glamour</h1>
                                    <p className="font-extralight text-black p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> ducimus doloribus asperiores, nemo corrupti possimus suscipit dicta<br/> fuga itaque animi reiciendis, impedit recusandae odio? <br/> Reprehenderit sapiente ab fuga mollitia.</p>
                                    <ul className="p-2">
                                        <li className="p-2 md:p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit  veritatis quae<br/> susci nostrum expedita quam iste.</li>
                                        <li className="p-2 md:p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit  veritatis quae<br/> susci nostrum expedita quam iste.</li>
                                    </ul>
                                </div>
                            <div className="p-5">
                                <Image src={Headdie} alt="headdie" className="w-120 h-120 md:w-150 md:h-150"/>
                                
                            </div>
            </div>
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