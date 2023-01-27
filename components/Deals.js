import Image from "next/image";
import Link from "next/link";
import dealImg from "../public/asset/deal.webp"

const Deals = () => {
  return (
    <div>
      <div className="">
        <div className="all-container">
          <h1 className="mt-20 mb-10 font-bold text-xl">Today's deals</h1>
          <div className="bg-[#fafafa] grid md:grid-cols-2 items-center">
            <div>
                  <Image src={dealImg} alt='deal-img' className="w-full" />
            </div>
            <div className="text-center md:text-left">
                 <p className="text-center mb-5 p-10 bg-[#F6EDF3] md:w-fit  font-semibold">sign-ups end Jan 26, 12pm CT</p>
                 <h4 className="uppercase font-bold mb-5">flowless by finishing touch</h4>
                 <h2 className="capitalize font-semibold text-3xl mb-3">dash to beauty</h2>
                 <p className="text-sm mb-7">The more sign-ups, the better the deal on this finishing Touch Flowless Pedi.</p>

                 <Link href="/">
                      <p className="underline font-semibold">View details</p>
                 </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
