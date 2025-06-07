import React from 'react'
import Image from 'next/image'
import Face112 from "@/public/Face112.jpeg"
import {ImHappy} from "react-icons/im";
import {MdVerified} from "react-icons/md"
import {TbTruckDelivery} from "react-icons/tb"
import {RiShipFill} from "react-icons/ri"
import Facewash from "@/public/Facewash.jpeg"
import Fce from "@/public/Fce.jpeg"
import Fairmassage from "@/public/Fairmassage.jpg"
import BackMassage from "@/public/BackMassage.jpg"
import Link from "next/link";
import {FaFacebook} from "react-icons/fa"
import {IoLogoInstagram} from "react-icons/io"
import { FaSquareXTwitter } from 'react-icons/fa6';


const page = () => {
  return (
    <div className='bg-[rgb(244,194,195)]'>
    <section className='bg-[#F3E5C3] md:flex md:justify-between '>
      <p className=' text-white font-sans p-2  text-2xl '>Discover your perfect look</p>
      <p className=' text-black font-sans p-2 text-5xl md:p-5 '>Unlock your true <br/>
       Beauty with our <br/> Equisite Wigs with Elegant satisfaction</p>
    
       
      <div className='shadow-md  justify-end  '>
        <Image className="w-100 h-100 p-5 rounded-lg justify-end md:w-200 md:h-200 " src={Face112}  alt="face112"/>
      </div>
    </section>
    <div className='p-5 md:flex md:flex-row md:space-x-4'>
  <div className='flex flex-col items-center md:mr-4 mb-4 shadow-lg'>
    <div className='bg-amber-700 h-20 w-20 rounded-md'><MdVerified className='text-5xl ml-3 mt-4'/></div>
    <h1 className='font-bold'>Original products</h1>
    <p>We provide black guarantee if the product is not original</p>
  </div>  <div className='flex flex-col items-center md:mr-4 mb-4 shadow-lg'>
    <div className='bg-amber-700 h-20 w-20 rounded-md'><ImHappy className='text-5xl ml-3 mt-4'/></div>
    <h1 className='font-bold'>Satisfaction Guarantee</h1>
    <p>If you are not delighted with what you<br /> purchase, we are here to make it right</p>
  </div>

  <div className='flex flex-col items-center md:mr-4 mb-4 shadow-lg'>
    <div className='bg-amber-700 h-20 w-20 rounded-md'><TbTruckDelivery className='text-5xl ml-3 mt-4'/></div>
    <h1 className='font-bold'>New Arrival Everyday</h1>
    <p>We update our collections almost every day</p>
  </div>

  <div className='flex flex-col items-center md:mr-4 mb-4 shadow-lg'>
    <div className='bg-amber-700 h-20 w-20 rounded-md'><RiShipFill className='text-5xl ml-3 mt-4'/></div>
    <h1 className='font-bold'>Free Standard Shipping</h1>
    <p>We provide free standard shipping on all orders.</p>
  </div>
 
</div>
<div className='bg-[#40011E] md:flex md:justify-between '>
  <h1 className='text-5xl font-black font-sans p-3 text-white'>100% pixie curls <br/> from our best vendors</h1>
  <p className='text-black underline text-3xl font-serif  text-center md:p-5 md:mt-30 '>Shop Now</p>
 
   <div className='md:flex'>
    <Image src={Facewash} alt='facewash' className='w-120 h-120 p-5 '/>
    <div>
      <Image src={Fce} alt='fce'  className='w-120 h-120 p-5' />
    </div>
  </div>
   
</div>
<div className='p-3'>
  <h1 className='text-3xl font-serif text-black text-center'>What service we provide you</h1>
  <p className='text-center'>We Provide a very robust environment for our clients to deliver<br/> effectively to one another and each other </p>
</div>
<div className='p-5 md:flex md:space-x-4'>
  <div className=''>
    <Image src={Fairmassage} alt='fairmassage' className='w-120 h-120 md:w-250 md:h-200 p-3'/>
  </div>
  <div className='border p-5 w-120 h-120 bg-[#120A8F] md:w-200 md:h-200 rounded-2xl'>
    <h1 className='text-xl font-sans md:text-5xl md:text-center md:mt-5 underline'>Facial Care treatment </h1>
    <p className='font-extralight font-sans text-3xl p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus animi<br/> non sunt, beatae in deleniti nesciunt error quas hic minima velit quo<br/> voluptas eos id recusandae, voluptates quam, quis modi.</p>
  </div>
</div>
<div className='p-5 md:flex md:space-x-4'>
     <div className='border p-5 w-120 h-120 bg-[#545D50] md:w-200 md:h-150 rounded-2xl '>
    <h1 className='text-xl font-sans md:text-5xl md:text-center md:mt-5 underline'>Facial Care treatment </h1>
    <p className='font-extralight font-sans text-3xl p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus animi<br/> non sunt, beatae in deleniti nesciunt error quas hic minima velit quo<br/> voluptas eos id recusandae, voluptates quam, quis modi.</p>
  </div>
  <div>
    <Image src={BackMassage} alt='backmassage' className='w-120 h-120 md:w-250 md:h-200 p-3'/>
  </div>

</div>
<footer className='bg-blue-800 px-4 md:px-16 lg:px-28'>
  <div className='grid grid-cols-1  md:grid-cols-3 gap-7'>
  <div>
    <h2 className='text-xl text-black underline font-bold'>About us</h2>
    <p className='text-white font-extralight'>We are dedicated to providing the best products<br/> and services to our customers</p>
  </div>
  <div>
    <h1 className='text-xl text-black underline font-bold p-2'>Quick links</h1>
    <ul className='p-2'>
      <Link className='hover:underline text-gray-300 font-bold' href="/">Home</Link><br/>
      <Link className='hover:underline text-gray-300 font-bold' href="/about/contact/services">Services</Link><br/>
      <Link className='hover:underline text-gray-300 font-bold' href="/about/contact/services/portfolio">Portfolio</Link><br/>
      <Link  className='hover:underline text-gray-300 font-bold' href="/about/contact">Contact</Link><br/>
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
