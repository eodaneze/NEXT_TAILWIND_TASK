import React from "react";

const ShopeByPrice = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:mx-[15%] gap-4 mb-20">
        <div className="text-center">
          <div className="flex items-center justify-center circl-1 bg-[#FEF0F5]">
            <div className="items-center justify-center">
              <span>
                <h1 className="text-[#CB0258] text-6xl font-extrabold">$25</h1>
                <h4 className="text-[#CB0258] text-2xl font-bold mt-4">
                  & under
                </h4>
              </span>
            </div>
          </div>
          <h1 className="font-bold text-sm underline">Shop under $25</h1>
        </div>
        <div className="text-center">

        <div className="flex items-center justify-center circl-1 bg-[#FEF0F5]">
          <div className="items-center justify-center">
            <span>
              <h1 className="text-[#CB0258] text-6xl font-extrabold">$50</h1>
              <h4 className="text-[#CB0258] text-2xl font-bold mt-4">
                & under
              </h4>
            </span>
          </div>
        </div>
        <h1 className="font-bold text-sm underline">Shop $50 and under</h1>
        </div>

        <div className="text-center">

        <div className="flex items-center justify-center circl-1 bg-[#FEF0F5]">
          <div className="items-center justify-center">
            <span>
              <h1 className="text-[#CB0258] text-6xl font-extrabold">$100</h1>
              <h4 className="text-[#CB0258] text-2xl font-bold mt-4">
                & under
              </h4>
            </span>
          </div>
        </div>
        <h1 className="font-bold text-sm underline">Shop $100 and under</h1>
        </div>
        <div className="text-center">

        <div className="flex items-center justify-center circl-1 bg-[#FEF0F5]">
          <div className="items-center justify-center">
            <h2>
              <span className="text-[#CB0258] text-4xl font-bold">gift</span>
              <span className="text-[#CB0258] text-4xl font-bold">Cards</span>
            </h2>
          </div>
        </div>
        <h1 className="font-bold text-sm underline">Shop gift cards</h1>
        </div>
      </div>
    </div>
  );
};

export default ShopeByPrice;

// https://www.ulta.com/shop/valentines-day-gifts
