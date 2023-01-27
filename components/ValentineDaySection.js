import Image from "next/image";
import Link from "next/link";
import valImg_1 from "../public/asset/val-1.webp";
import valImg_2 from "../public/asset/val-2.webp";
import valImg_3 from "../public/asset/val-3.webp";
import valImg_4 from "../public/asset/val-4.webp";
const ValentineDaySection = () => {
  return (
    <div className="mb-10">
      <div className="text-center mt-20">
        <h5 className="uppercase font-bold mb-3">Valentine's Day</h5>
        <h3 className="font-bold text-4xl mb-4">Spread the love</h3>
        <p className="font-semibold text-lg mb-10">
          And skip the roses. Beauty for you and yours
        </p>
      </div>
      <div className="all-container grid  md:grid-cols-4 gap-4">
        <div>
          <Image src={valImg_1} alt="val_img" className="w-[100%]" />
          <h5 className="uppercase text-xl font-bold mt-3">
            Shop the gift guide
          </h5>
          <p className="my-4 font-medium text-sm">
            Because thier favourite beauty lasts very longer than the box of
            chocolates
          </p>
          <Link
            href={{
              pathname: "/products/Products",
            }}
          >
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
        <div>
          <Image src={valImg_2} alt="val_img" className="w-[100%]" />
          <h5 className="uppercase text-xl font-bold mt-3">
            Create looks you love
          </h5>
          <p className="my-4 font-medium text-sm">
            With makeup that makes you feel your best
          </p>
          <Link href="/">
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
        <div>
          <Image src={valImg_3} alt="val_img" className="w-[100%]" />
          <h5 className="uppercase text-xl font-bold mt-3">Share a scent</h5>
          <p className="my-4 font-medium text-sm">
            A new fragrance will remind them of you with every spritz{" "}
          </p>
          <Link href="/">
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
        <div>
          <Image src={valImg_4} alt="val_img" className="w-[100%]" />
          <h5 className="uppercase text-xl font-bold mt-3">Make it personal</h5>
          <p className="my-4 font-medium text-sm">
            Show how well you know them--take the fragrance Quiz to find thier
            new go-to scent.
          </p>
          <Link href="/">
            <p className="underline font-semibold">Learn More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValentineDaySection;
