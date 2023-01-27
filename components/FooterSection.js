import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../public/asset/footer-logo.png";
import FooterCondtion from "./footerCondtion";
const FooterSection = () => {
  return (
    <>
      <div className="bg-[#fafafa] w-[100%] py-10 mt-20">
        <div className="all-container">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
            <div>
              <h5 className="font-semibold">Store</h5>
              <ul className="">
                <Link href="/">
                  <li>Find a Store</li>
                </Link>
                <Link href="/">
                  <li>Virtual Store Tour</li>
                </Link>
                <Link href="/">
                  <li>Beauty Services</li>
                </Link>
                <Link href="/">
                  <li>List of Brands</li>
                </Link>
                <Link href="/">
                  <li>Ultamate Rewards</li>
                </Link>
                <Link href="/">
                  <li>Ways to Shop Ulta Beauty</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Guest Services</h5>
              <ul className="">
                <Link href="/">
                  <li>Guest Service Center</li>
                </Link>
                <Link href="/">
                  <li>Order Status</li>
                </Link>
                <Link href="/">
                  <li>Shipping Policy & Rate</li>
                </Link>
                <Link href="/">
                  <li>List of Brands</li>
                </Link>
                <Link href="/">
                  <li>Returns</li>
                </Link>
                <Link href="/">
                  <li>Contact Us</li>
                </Link>
                <Link href="/">
                  <li>Your Privacy Rights</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">About Us</h5>
              <ul className="">
                <Link href="/">
                  <li>Our Company</li>
                </Link>
                <Link href="/">
                  <li>Investors Relationships</li>
                </Link>
                <Link href="/">
                  <li>Site Map</li>
                </Link>
                <Link href="/">
                  <li>Supply Chain</li>
                </Link>
                <Link href="/">
                  <li>Transparency</li>
                </Link>
                <Link href="/">
                  <li>Cooperate Responsibilty</li>
                </Link>
                <Link href="/">
                  <li>Your Privacy Rights</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Services</h5>
              <ul className="">
                <Link href="/">
                  <li>Gift Cards</li>
                </Link>
                <Link href="/">
                  <li>Mobile App</li>
                </Link>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Ultimate Reward Credit Card</h5>
              <p>Learn More & Apply Manage Account</p>
              <div className="flex gap-4 items-center">
                <Image src={footerLogo} alt="footer-image" />
                <p className="text-sm">
                  Get 20% Off Your First Purchase When You Open And Use The
                  Ultamate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterCondtion />
    </>
  );
};

export default FooterSection;
