import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="flex all-container">
        <div className="mt-[15%] md:mt-[8%]">
          <Link
            legacyBehavior
            href={{
              pathname: "/",
            }}
          >
            <a>Home /</a>
          </Link>
          <Link
            legacyBehavior
            href={{
              pathname: "/",
            }}
          >
            <a>Gifts /</a>
          </Link>
          <p className="font-bold text-[20px]">Valentine's Day Gift Guide</p>
        </div>
      </div>
      <div className="all-hero flex justify-center items-center mb-20">
        <div className="text-center justify-center items-center text-white">
          <h1 className="text-5xl font-bold">All The Love</h1>
          <h4 className="text-xl font-semibold my-6">
            Show them (and yourself!) some love with Valentine's Day picks
          </h4>
          <Link legacyBehavior href={"/"}>
            <a className="text-2xl font-semibold">Shop all gifts</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
