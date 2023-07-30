import React, { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Header = ({ productCount, cart }) => {
  const [toggleDropdown, setDropdown] = useState(false);

  return (
    <div className="relative flex items-center justify-end bg-header-bg h-8 px-12 lg:px-48">
      <div
        onClick={() => {
          setDropdown(!toggleDropdown);
        }}
      >
        <h1 className="hidden lg:block text-font-light text-xs hover:cursor-pointer">
          My Cart ( {productCount} )
        </h1>

        <div className="flex">
          <RiShoppingCart2Fill className="text-font-light hover:cursor-pointer lg:hidden" />
          <h1 className="text-font-light text-xs hover:cursor-pointer lg:hidden">
            ( {productCount} )
          </h1>
        </div>
      </div>
      {toggleDropdown ? (
        <>
          <div
            class="absolute z-10 origin-top-right top-8 w-60 bg-[#FFF] border-b-lg ring-1 ring-b-lg p-2 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div class="py-1" role="none">
              {cart.map((item) => (
                <div className="relative flex my-2 origin-top-right">
                  <img
                    src={process.env.PUBLIC_URL + "/classic-tee.jpg"}
                    className="object-cover h-24"
                    alt="Classic Tee"
                  ></img>
                  <div className="ml-1">
                    <h1 className="text-sm">{item[2]}</h1>
                    <div className="flex">
                      <h1 className="text-sm">{item[1]}x </h1>
                      <h1 className="font-bold text-sm"> ${item[1] * 75.0}</h1>
                    </div>
                    <p className="text-xs mt-4">Size: {item[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
