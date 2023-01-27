import Image from "next/image";
import trendImg from "../../public/asset/trend.webp";
import trendImg_1 from "../../public/asset/trend-4.webp";
import trendImg_2 from "../../public/asset/trend-2.webp";
import trendImg_3 from "../../public/asset/trend-3.webp";
import cupidImg_1 from "../../public/asset/cupid-1.webp"
import cupidImg_2 from "../../public/asset/cupid-2.webp"
import cupidImg_3 from "../../public/asset/cupid-3.webp"
import cupidImg_4 from "../../public/asset/cupid-4.webp"
import makeup_1 from "../../public/asset/makeup-1.webp"
import makeup_2 from "../../public/asset/makeup-2.webp"
import makeup_3 from "../../public/asset/makeup-3.webp"
import makeup_4 from "../../public/asset/makeup-4.webp"
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
const Product_cards = () => {
  return (
    <>
      <div>
        <div className="md:mx-[5%] mx-[3%] mb-20">
          <h4 className="font-bold text-2xl">For a trend-worthy gift</h4>
          <p className="my-5 text-gray-500 font-semibold">12 items</p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
            <div>
              <Image
                src={trendImg}
                alt="trendImage"
                className="w-[100%] hover:cursor-pointer"
              />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  Anastasia Beverly Hills
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Soft Glam palette Vault
                </h4>
                <p className="text-[12px] text-gray-600 font-bold">
                  $70.00 ($100 value)
                </p>
              </div>
            </div>
            <div>
              <Image src={trendImg_1} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
            <div>
              <Image src={trendImg_2} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
            <div>
              <Image src={trendImg_3} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
          </div>
        </div>
        {/* Cupid-approved picks */}
        <div className="md:mx-[5%] mx-[3%] mb-20">
          <h4 className="font-bold text-2xl">Cupid-approved picks</h4>
          <p className="my-5 text-gray-500 font-semibold">12 items</p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
            <div>
              <Image
                src={cupidImg_1}
                alt="trendImage"
                className="w-[100%] hover:cursor-pointer"
              />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  Anastasia Beverly Hills
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Soft Glam palette Vault
                </h4>
                <p className="text-[12px] text-gray-600 font-bold">
                  $70.00 ($100 value)
                </p>
              </div>
            </div>
            <div>
              <Image src={cupidImg_2} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
            <div>
              <Image src={cupidImg_3} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
            <div>
              <Image src={cupidImg_4} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
          </div>
        </div>

        {/*  make up cards*/}

        <div className="md:mx-[5%] mx-[3%] mb-20">
          <h4 className="font-bold text-2xl">For the makeup muse</h4>
          <p className="my-5 text-gray-500 font-semibold">12 items</p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
            <div>
              <Image
                src={makeup_1}
                alt="trendImage"
                className="w-[100%] hover:cursor-pointer"
              />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  Anastasia Beverly Hills
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Soft Glam palette Vault
                </h4>
                <p className="text-[12px] text-gray-600 font-bold">
                  $70.00 ($100 value)
                </p>
                <div>
                   <p className="bg-[#FDF1F3] text-[#CF0058] text-[13px] font-semibold p-1 w-fit mt-3">Free Gift with Purchase</p>
                </div>
              </div>
            </div>
            <div>
              <Image src={makeup_2} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
            <div>
              <Image src={makeup_3} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
                <div>
                   <p className="bg-[#FDF1F3] text-[#CF0058] text-[13px] font-semibold p-1 w-fit mt-3">Free Gift with Purchase</p>
                   <p className="bg-[#FDF1F3] text-[#CF0058] text-[13px] font-semibold p-1 w-fit mt-3">+2 offers</p>
                </div>
              </div>
            </div>
            <div>
              <Image src={makeup_4} alt="trendImage" className="w-[100%]" />
              <div className="mt-5">
                <h5 className="text-[12px] text-gray-600 font-bold">
                  <span className="uppercase">ulta</span> Beauty Collection
                </h5>
                <h4 className="text-[13px] font-semibold">
                  Juice Infused Lip Oil
                </h4>
                <p className="text-[12px]  font-bold  flex items-center">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <BsStar />
                  </span>
                  <span className="mx-3">(2,840)</span>
                </p>
                <p className="text-[13px] font-semibold">$10,000</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Product_cards;
