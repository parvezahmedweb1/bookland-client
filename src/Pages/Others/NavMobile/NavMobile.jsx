import React, { useState } from "react";
import menuItems from "../../../Components/MenuItems";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {/* hamburger menu start */}
      <div className="lg:hidden z-10">
        {isOpen ? (
          <i
            onClick={() => setIsOpen(false)}
            className="bx bx-menu text-3xl cursor-pointer hover:text-btn"
          ></i>
        ) : (
          <i
            onClick={() => setIsOpen(true)}
            className={
              isOpen
                ? "bx bx-x text-3xl cursor-pointer hover:text-btn"
                : "bx bx-x text-3xl cursor-pointer text-white hover:text-black"
            }
          ></i>
        )}
      </div>
      {/* hamburger menu end */}
      {/* nav start */}
      <div className="ml-0">
        <nav
          className={
            isOpen
              ? "absolute left-[-100%]"
              : "absolute top-0 left-0 right-0 bg-btn h-screen text-white pt-[10vh] text-center"
          }
        >
          {/* menu */}
          <ul className="flex flex-col space-y-8">{menuItems}</ul>
          <div className="flex flex-col space-y-8">
            <i className="bx bx-heart text-2xl cursor-pointer mt-8"></i>
            <i className="bx bx-cart-alt text-2xl cursor-pointer"></i>
            <PrimaryBtn
              classes={"bg-main px-10 py-2 rounded-xl w-[50%] mx-auto"}
            >
              LogIn
            </PrimaryBtn>
          </div>
          {/* social media */}
          <div className="absolute bottom-10 space-x-20 w-full">
            <i className="bx bxl-facebook text-3xl cursor-pointer"></i>
            <i className="bx bxl-whatsapp text-3xl cursor-pointer"></i>
            <i className="bx bxl-twitter text-3xl cursor-pointer"></i>
            <i className="bx bxl-github text-3xl cursor-pointer"></i>
          </div>
        </nav>
      </div>
      {/* nav end */}
    </>
  );
};

export default NavMobile;
