import {PiBathtubFill, PiHairDryerFill} from "react-icons/pi"
import { PiBathtub } from "react-icons/pi"
import { PiTowel } from "react-icons/pi"
import Image from 'next/image'
import BackMassage from "@/public/BackMassage.jpg"
import { MdVerified } from "react-icons/md"
import {FaFacebook} from "react-icons/fa"
import {IoLogoInstagram} from "react-icons/io"
import { FaSquareXTwitter } from 'react-icons/fa6';
import Link from "next/link"



const page = () =>  {

    return(
        <div>
            <section className="bg-amber-950 h-80 w-full ">
                <p className="text-white text-2xl font-extralight p-3 md:text-center">Shop with us today</p>
                <h1 className="text-white text-4xl font-bold p-3 md:text-center ">The story behind, our<br/> beautyness center</h1>
                 <div className=" font-bold   p-4 md:text-center ">
                 <button className="bg-[#D6CFE0] rounded-md py-2 px-5 w-40">Shop Now</button>
            </div>
            </section>
            <section className="bg-[#F4F1F8] p-5 w-full ">
                <p className="text-black text-2xl font-extralight p-3 md:text-center underline">Our analysis</p>
                <h1 className="text-xl font-bold font-serif mt-6 md:text-center md:mb-8">The work values we thrive for</h1>
                <div className="md:flex">
                <div className="shadow-md p-2.5">
                    <PiHairDryerFill className="text-4xl"/>
                    <p className="text-xl font-bold">Beauty Experts</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi<br/> fugiat sapiente numquam quibusdam nisi, rerum modi?<br/> Iure dignissimos animi aliquid id doloremque provident ducimus <br/>ipsam a, vitae maiores ex iste?</p>          
                </div>
                 <div className="shadow-md p-2.5">
                    <PiBathtubFill className="text-4xl"/>
                    <p className="text-xl font-bold">Freelancers</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi<br/> fugiat sapiente numquam quibusdam nisi, rerum modi?<br/> Iure dignissimos animi aliquid id doloremque provident ducimus <br/>ipsam a, vitae maiores ex iste?</p>          
                </div>
                 <div className="shadow-md p-2.5">
                    < PiTowel className="text-4xl"/>
                    <p className="text-xl font-bold">Beauty Experts</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi<br/> fugiat sapiente numquam quibusdam nisi, rerum modi?<br/> Iure dignissimos animi aliquid id doloremque provident ducimus <br/>ipsam a, vitae maiores ex iste?</p>          
                </div>
                </div>
            </section>
            <section className="bg-amber-800 w-full md:flex md:justify-between">
                <div className="shadow-md p-5">
                    <p className="text-white font-bold">Frequesntly asked</p>
                    <h1 className="font-bold text-3xl text-white">Its the bridge between,<br/> services companies,<br/> and consumers</h1>
                    <p className="font-extralight text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati<br/> ducimus doloribus asperiores, nemo corrupti possimus suscipit dicta<br/> fuga itaque animi reiciendis, impedit recusandae odio? <br/> Reprehenderit sapiente ab fuga mollitia.</p>
                </div>
            <div className="p-5">
                <Image src={BackMassage} alt="backmassage" className="w-120 h-120 md:w-200 md:h-200"/>
                
            </div>
            </section>
             <section className="bg-teal-400 md:flex md:justify-between">
    
            <div className="p-5">
                <Image src={BackMassage} alt="backmassage" className="h-120 w-120 md:w-200 md:300"/>
            </div>
               <div className="shadow-md p-5 w-full">
                    <p className="text-white font-bold">Frequesntly asked</p>
                    <h1 className="font-bold text-3xl text-white">Its the bridge between,<br/> services companies,<br/> and consumers</h1>
                    <p className="font-extralight text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati<br/> ducimus doloribus asperiores, nemo corrupti possimus suscipit dicta<br/> fuga itaque animi reiciendis, impedit recusandae odio? <br/> Reprehenderit sapiente ab fuga mollitia.</p>
                    <p className="text-xl text-white underline font-extrabold p-2">Our Methodologies</p>
                    <div className="">
                        <MdVerified className="text-3xl" />
                        <p className="font-bold ">The accounting stops</p>
                        <p className="font-extralight">Lorem ipsum dolor sit, amet consectetur adipisiciam in.<br/> Veritatis maiores molestias saepe.</p>
                    </div>
                     <div className="">
                        <MdVerified className="text-3xl" />
                        <p className="font-bold ">The accounting stops</p>
                        <p className="font-extralight">Lorem ipsum dolor sit, amet consectetur adipisiciam in.<br/> Veritatis maiores molestias saepe.</p>
                    </div>
                     <div className="">
                        <MdVerified className="text-3xl" />
                        <p className="font-bold ">The accounting stops</p>
                        <p className="font-extralight">Lorem ipsum dolor sit, amet consectetur adipisiciam in.<br/> Veritatis maiores molestias saepe.</p>
                    </div>
                </div>
                
            </section>
             <footer className='bg-[#5317A6] px-4 md:px-16 w-full lg:px-28'>
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