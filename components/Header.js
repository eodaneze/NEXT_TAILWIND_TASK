import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill, BsBag } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import logoImage from "../public/asset/logo.png";

const Header = () => {
  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed top-0 bg-white w-full h-20 shadow-sm z-[100]">
        <div className="flex justify-between items-center w-full px-2 2xl:px-16">
          <Image src={logoImage} alt="/" width="125" height="50" />
          <div className="border search">
            <BiSearchAlt2 />
            <input className="" type="search" placeholder="Search" />
          </div>
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm  hover:border-b">Find a Store </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm  hover:border-b">
                  Email & Text Signup
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm  hover:border-b">Gift Cards</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm  hover:border-b">Sign in</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm  hover:border-b">Rewards</li>
              </Link>
              <Link
                href={{
                  pathname: "/products/Products",
                }}
              >
                <li className="ml-10 text-sm  hover:border-b">
                  <BsBag size={20} />
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              {/* <AiOutlineClose /> */}
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image src={logoImage} alt="/" width="87" height="35" />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>

              <div className="border-b border-gray-300 my-4">
                
              </div>
            </div>

            <div className="py-4 flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="ml-10 text-sm  hover:border-b mb-5">
                    Find a Store{" "}
                  </li>
                </Link>
                <Link href="/">
                  <li className="ml-10 text-sm  hover:border-b  mb-5">
                    Email & Text Signup
                  </li>
                </Link>
                <Link href="/">
                  <li className="ml-10 text-sm  hover:border-b  mb-5">Gift Cards</li>
                </Link>
                <Link href="/">
                  <li className="ml-10 text-sm  hover:border-b  mb-5">Sign in</li>
                </Link>
                <Link href="/">
                  <li className="ml-10 text-sm  hover:border-b  mb-5">Rewards</li>
                </Link>
                <Link
                  href={{
                    pathname: "/products/Products",
                  }}
                >
                  <li className="ml-10 text-sm  hover:border-b  mb-5">
                    <BsBag size={20} />
                  </li>
                </Link>
              </ul>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
