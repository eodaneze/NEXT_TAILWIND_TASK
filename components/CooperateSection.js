import Image from "next/image";
import Link from "next/link";
import commitImg from "../public/asset/commit.webp";
import commitImg2 from "../public/asset/commit-2.webp";
import commitImg3 from "../public/asset/commit-3.webp";
const CooperateSection = () => {
  return (
    <div className="all-container">
      <h1 className="font-bold text-2xl mb-6">Our corporate commitments</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-6">
        <div>
          <div className="flex items-center gap-4 justify-center bg-[#FAFAFA] p-6 border">
            <div>
              <Image className="w-[300px]" src={commitImg} alt="commit-img" />
            </div>
            <div>
                <p className="text-sm font-semibold">We're committed to creating a more inclusive world that brings possibilities to life for all.</p>
                <Link href="">
                   <p className="underline font-semibold">Learn More</p>
                </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-[#FAFAFA] p-6 border">
            <div>
              <Image className="w-[250px]" src={commitImg2} alt="commit-img" />
            </div>
            <div>
                <p className="text-sm font-semibold">Our guests are at the heart of all we do, including choices in how you shop.</p>
                <Link href="">
                   <p className="underline font-semibold">Learn More</p>
                </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-[#FAFAFA] p-6 border">
            <div>
              <Image className="w-[200px]" src={commitImg3} alt="commit-img" />
            </div>
            <div>
                <p className="text-sm font-semibold">We use the power of beauty to enhance the world around us.</p>
                <Link href="">
                   <p className="underline font-semibold">Learn More</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperateSection;
