import React from "react";

const Header = ({ productCount }) => {
  return (
    <div className="flex items-center justify-end bg-header-bg h-8 px-48">
      <div>
        <h1 className="hidden lg:block text-font-light text-xs hover:cursor-pointer">
          My Cart ( {productCount} )
        </h1>
      </div>
    </div>
  );
};

export default Header;
