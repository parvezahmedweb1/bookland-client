import React from "react";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import banner from "../../../assets/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <section id="banner" className="lg:h-[90vh] bg-main">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center">
        {/* left start */}
        <div className="my-[8vh] md:my-0 text-white">
          <h1 className="lg:text-5xl text-4xl font-extrabold italic">
            Get Your New <br />
            Book Collections
          </h1>
          <p className="my-4 text-sm text-gray-400 border-l-2 border-btn pl-4">
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration in some formr.
          </p>
          <PrimaryBtn
            classes={"bg-btn lg:px-14 px-10 lg:py-4 py-3 rounded-xl font-bold"}
          >
            Shop Now
          </PrimaryBtn>
        </div>
        {/* left end */}
        {/* right start */}
        <div className="hidden md:block lg:h-[90vh]">
          <img className="h-full w-full pt-10" src={banner} alt="" />
        </div>
        {/* right end */}
      </div>
    </section>
  );
};

export default Banner;
