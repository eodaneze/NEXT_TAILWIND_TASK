import Image from "next/image"
import Link from "next/link"
import rewardImg from "../public/asset/reward.webp"

const RewardSection = () => {
  return (
    <div>
      <div className="">
        <div className="all-container">
          <h1 className="mt-20 mb-10 font-bold text-xl">Ultimate Rewards</h1>
          <div className="bg-[#fafafa] grid md:grid-cols-2 items-center px-36 py-10">
            <div>
                  <Image src={rewardImg} alt='deal-img' className="w-[100%]"  />
            </div>
            <div>
                <h3 className="font-semibold text-4xl mb-5">You spend, you earn</h3>
                <p className="text-sm">Ultimate Rewards. Sign in or join now to earn points with very purchase</p>
                <div className="flex mt-5 items-center gap-5">
                     <Link href="/">
                         <p className="bg-black text-white uppercase p-3 hover:p-4 cursor-pointer transition-all">Sign In</p>
                     </Link>
                     <Link href="/">
                         <p className="underline font-medium">Join Now</p>
                     </Link>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RewardSection