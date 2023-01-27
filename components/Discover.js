import Image from "next/image";
import Link from "next/link";
import cardOneImg from "../public/asset/beauty-1.webp";
import cardOneImg2 from "../public/asset/beauty-2.webp";
import cardOneImg3 from "../public/asset/beauty-3.webp";
import cardOneImg4 from "../public/asset/beauty-4.webp";

const Discover = () => {
  return (
    <div className="all-container">
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-6">
          Discover DIOR at Ulta Beauty
        </h1>
        <p className="text-xl">
          Step into a world celebrating confidence, individual beauty, and
          savoir-faire excellence.
        </p>
      </div>
      <div className="all-card grid  lg:grid-cols-4 md:grid-cols-2 gap-5 my-10">
        <div className="">
          <div className="border p-4 mb-3">
            <Image src={cardOneImg} alt="card" className="w-[100%]" />
          </div>
          <h5 className="uppercase text-xl font-semibold">dior</h5>
          <p className="font-bold text-xl">
            Addict Lip Maximizer Plumping Lip Gloss
          </p>
          <Link href="/">
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
        <div className="">
          <div className="border p-4 mb-3">
            <Image src={cardOneImg2} alt="card" className="w-[100%]"/>
          </div>
          <h5 className="uppercase text-xl font-semibold">dior</h5>
          <p className="font-bold text-xl">Forever Skin Glow Foundation</p>
          <Link href="/">
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
        <div className="">
          <div className="border p-4 mb-3">
            <Image src={cardOneImg3} alt="card" className="w-[100%]" />
          </div>
          <h5 className="uppercase text-xl font-semibold">dior</h5>
          <p className="font-bold text-xl">Capture Totale Le Sérum</p>
          <Link href="/">
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
        <div className="">
          <div className="border p-4 mb-3">
            <Image src={cardOneImg4} alt="card" className="w-[100%]" />
          </div>
          <h5 className="uppercase text-xl font-semibold">dior</h5>
          <p className="font-bold text-xl">
            Miss Dior Blooming Bouquet Eau de Toilette
          </p>
          <Link href="/">
            <p className="underline font-semibold">Shop Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
