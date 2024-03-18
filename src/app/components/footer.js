"use client";
import Image from "next/image";
import Vector5 from "../assests/images/Vector-5.png";
import Insta from "../assests/images/instagram-icon.png";
import Link from "next/link";
import Logo from "../assests/images/logo.png"
import { useState } from "react";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
import LinkedIn from "./linkedin";
import { usePathname } from "next/navigation";



const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value);
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const useAltNewsletterSection =  pathname.includes('blog') || pathname.includes('about') || pathname.includes('services');
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!email || !emailRegex.test(email)) {
        setNewsletterError('Invalid email')
        return;
      }
      alert('Form will be sent')
    } catch (error) {
      setNewsletterError('Network Error')
    }

  }
  return (
    <>
     <footer>
        <div>
            <div>
                <div className={`${ useAltNewsletterSection ? 'bg-[#0ECFAF] bg-opacity-10' : 'bg-[#001A15]'} flex flex-col items-center p-8 lg:pt-40 pb-20`}>
                    <h3 className={`${ useAltNewsletterSection ? 'text-[1B1B1B]' : 'text-white'} font-semibold text-center text-4xl lg:text-7xl`}>Subscribe to Newsletter</h3>
                    <p className={`${ useAltNewsletterSection ? 'text-[1B1B1B]' : 'text-[#BEBEBE]'}   text-xl lg:text-3xl my-14`}>Enter your email address to register to our newsletter subscription delivered on regular basis!</p>
                    <div className="w-full text-center">
                      <form action="/send-data-here" method="post" onSubmit={handleSubmit}>
                        <label htmlFor="first"></label>
                        <input className="w-full max-w-[60rem] ${ useAltNewsletterSection ? 'bg-white' : 'bg-white/[0.05]'} py-6 px-8 text-[#C7C7C7] text-xl lg:text-2xl" onChange={handleEmailChange} type="text" id="first" name="first" placeholder="Enter your email address" value={email}/>
                        <small className="text-red-600">{newsletterError}</small>
                        <button type="submit" className="bg-primary text-white font-semibold text-2xl py-6 px-[3.4rem] mt-10 w-full lg:w-auto  max-w-[60rem]">Contact Us Now</button>
                      </form>
                      <div className="w-20 h-5">
                        <Image src={Vector5} className=""/>
                      </div>
                    </div>
                </div>
            </div>
            <div  className="p-8 md:py-14">
              <div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:justify-between">
                  <div className="md:max-w-[32.4rem]">
                    <div className="w-[14.9rem] mx-auto">
                    <Image src={Logo} className=""/>
                    </div>
                    <p className="text-center">Oasis and Oaks is an educational training and resource provider, 
                      that helps you achieve your goals. 
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-semibold text-[#1B1B1B] capitalize mb-8 text-center md:text-left">About Us</h4>
                    <ul className="flex flex-col  items-center md:items-start gap-3 text-[#1B1B1B]">
                      <li><Link href="/" className="text-[1.4rem]">Home</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Who We Are</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Teaching Method</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Testimonials</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-semibold text-[#1B1B1B] capitalize mb-8 text-center md:text-left">Our Services</h4>
                    <ul className="flex flex-col  items-center md:items-start gap-3 text-[#1B1B1B]">
                      <li><Link href="/" className="text-[1.4rem]">Study Abroad</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">IELTS Examination</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Language Development</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Application Process</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-semibold text-[#1B1B1B] capitalize mb-8 text-center md:text-left">Quick links</h4>
                    <ul className="flex flex-col  items-center md:items-start gap-3 text-[#1B1B1B]">
                      <li><Link href="/" className="text-[1.4rem]">Blogs</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Events</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Book an Appointment</Link></li>
                      <li><Link href="/" className="text-[1.4rem]">Home</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-semibold text-[#1B1B1B] capitalize mb-8 text-center md:text-left">We are Social</h4>
                    <ul className="flex flex-row  items-center md:items-start gap-3 justify-center text-[#1B1B1B]">
                      <li className="border rounded-full border-[#0C111A] p-2 w-[3.5rem] h-[3.5rem] flex justify-center items-center"><Link href="/" className="text-[1.4rem]"><LinkedIn /></Link></li>
                      <li className="border rounded-full border-[#0C111A] p-2 w-[3.5rem] h-[3.5rem] flex justify-center items-center"><Link href="/" className="text-[1.4rem]"><FacebookIcon /></Link></li>
                      <li className="border rounded-full border-[#0C111A] p-2 w-[3.5rem] h-[3.5rem] flex justify-center items-center"><Link href="/" className="text-[1.4rem]"><TwitterIcon /></Link></li>
                      <li className="border rounded-full border-[#0C111A] p-2 w-[3.5rem] h-[3.5rem] flex justify-center items-center"><Link href="/" className="text-[1.4rem]"><InstagramIcon /></Link></li>
                    </ul>
                  </div>

                </div>

                <div className="w-full h-[3px] border border-[#0A142F] mt-32 mb-20 opacity-10" />
                <div className="flex flex-col md:flex-row items-center mb-12 justify-between">
                  <p className="text-[#1B1B1B] text-2xl">© 2022 Oasis & Oaks. All rights reserved. </p>
                  <ul className="mt-6 md:mt-0 flex gap-8">
                    <li><Link href='/' className="text-[#1B1B1B] text-xl capitalize">Terms</Link></li>
                    <li><Link href='/' className="text-[#1B1B1B] text-xl capitalize">privacy</Link></li>
                    <li><Link href='/' className="text-[#1B1B1B] text-xl capitalize">Cookies</Link></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
     </footer>
    </>
  );
};

export default Footer;
