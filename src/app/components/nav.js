"use client";
import Image from "next/image";
import Logo from "../assests/images/logo-main.png";
import LogoAlternative from "../assests/images/logo-alt.png";
import HomeLogo from "../assests/images/homepage-logo.png"
import  Link  from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navigation = () => {
  const pathname =  usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const handleHamburgerClick = () => setNavOpen(!navOpen);
  console.log('pathname: ', pathname)

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg w-full ${
          pathname.includes('blog') || pathname.includes('about') ? "relative bg-white" : "absolute bg-transparent"}`}>
        <div className={`custom-container flex flex-wrap items-center justify-between mx-auto p-4 ${navOpen && "bg-white md:bg-none" } `}>
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse logo-container">
            <Image
              src={pathname === '/'? LogoAlternative : Logo}
              className=""
              alt="Oasis Logo"
              width={100}
              height={100}
            />
        </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={handleHamburgerClick}
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${navOpen ? 'block z-10 text-center bg-white' : 'hidden'}`} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
              <Link
                  href="/about-us"
                  className= {`text-2xl block py-2 px-3 md:p-0 ${ pathname === "/"
                  ? "nav-color md:text-white"
                  : " nav-color"}`}
                  aria-current="page"
                >
                  About us
              </Link>
              </li>
              <li>
              <Link
                  href="/study-abroad"
                  className= {`text-2xl block py-2 px-3 md:p-0 ${ pathname === "/"
                  ? "nav-color md:text-white"
                  : " nav-color"}`}
                >
                  Study Abroad
              </Link>
              </li>
              <li>
              <Link
                  href="/ielts"
                  className= {`text-2xl block py-2 px-3 md:p-0 ${ pathname === "/"
                  ? "nav-color md:text-white"
                  : " nav-color"}`}
                >
                  IELTS Exams
              </Link>
              </li>
              <li>
              <Link
                  href="/blogs"
                  className= {`text-2xl block py-2 px-3 md:p-0 ${ pathname === "/"
                  ? "nav-color md:text-white"
                  : " nav-color"}`}
                >
                  Blog
              </Link>
              </li>
            
            </ul>
           
          </div>
           <div className={`font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ${navOpen ? 'block z-10 w-full text-center' : 'hidden'} md:block`}>
            <Link
                href="/contact-us"
                className="block text-white bg-primary text-2xl px-12 py-8 rounded"
              >
                Contact Us
            </Link>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
