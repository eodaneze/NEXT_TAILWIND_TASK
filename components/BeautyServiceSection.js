import Image from "next/image";
import Link from "next/link";
import megaImg from "../public/asset/mega.webp";
import personImg1 from "../public/asset/person-1.webp";
import personImg2 from "../public/asset/person-2.webp";
import personImg3 from "../public/asset/person-3.webp";
const BeautyServiceSection = () => {
  return (
    <div className="bg-[#FDF1F3]  my-20 w-[100%] ">
      <div className="grid md:grid-cols-2 items-center">
        <div className="ml-20 w-full">
          <h1 className="font-bold text-6xl">
            <span>Beauty</span>
            <span>Services</span>
          </h1>
          <p className="w-[50%] font-medium mt-5">
            Your best look. Our promise. Each service begins with a
            complimentary consultation with a licensed beauty pro. Ask questions
            and share ideas—we'll do the same.
          </p>
          <div className="flex mt-5 gap-7">
            <Link href="/">
              <p className="underline font-semibold">Learn More</p>
            </Link>
            <Link href="/">
              <p className="underline font-semibold">Book Appointment</p>
            </Link>
          </div>
        </div>
        <div className="w-[100%]">
          <Image src={megaImg} alt="image" className="w-[100%]" />
        </div>
      </div>

      <div className="all-container py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
          <div className="text-center">
            <Image
              className="w-[100%] hover:cursor-pointer"
              src={personImg1} 
              alt="person_image"
            />
            <div className="">
              <h1 className="font-bold my-2 text-2xl hover:underline transition-all cursor-pointer">Discover brands you'll love</h1>
              <p className="text-[15px] font-medium text-[#555]">
                Explore select Black-owned and founded brands at your next salon
                appointment, now through Feb. 11.
              </p>
            </div>
          </div>
          <div>
            <Image className="w-[100%]" src={personImg2} alt="person_image" />
            <div className="text-center">
              <h1 className="font-bold my-2 text-2xl hover:underline transition-all cursor-pointer">Add an Olaplex treatment</h1>
              <p className="text-[15px] font-medium text-[#555]">
              Try the Repair and Protect service at your next appointment.
              </p>
            </div>
          </div>
          <div>
            <Image className="w-[100%]" src={personImg3} alt="person_image" />
            <div className="text-center">
              <h1 className="font-bold my-2 text-2xl hover:underline transition-all cursor-pointer">Do it for the points</h1>
              <p className="text-[15px] font-medium text-[#555]">
              Did you know you can earn and redeem points on Salon appointments? Book now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


// terms and condition section


  );
};

export default BeautyServiceSection;
