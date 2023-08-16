import ProfilePhoto from "./ProfilePhoto"
import avathar from '../assets/avatar.jpg'
import { GrLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { AiTwotoneStar, AiTwotoneSetting } from "react-icons/ai";
import { TbSphere } from "react-icons/tb";
import Specialized from "./Specialized";
import StarRating from "./StarRating";


const LawyerCard = () => {
    const text = "Harish Salve KC is an Indian senior advocate who practices at the Supreme Court of India. He served as the Solicitor General of India from 1 November 1999 to 3 November 2002. He also fought the case of Kulbhushan Jadhav at the International Court of Justice."

    return (
        <div className="bg-white h-72 rounded-2xl p-2  flex flex-col justify-around">
            <div className=" flex justify-between items-start">
                <div className="flex">
                    <div className="">
                        <ProfilePhoto size={`w-16 h-16`} image={avathar} />
                    </div>
                    <div className="flex items-start p-1  gap-2">
                        <div className="flex flex-col">
                            <p className="font-semibold ml-2">Hairsh Salve</p>
                            <div className=" font-extralight  flex items-center"><span className="ml-1 text-xl "><IoLocationOutline className="text-[#147BF5]" /></span><span className="text-sm text-[#A7A9B7]">New Delhi, India</span></div>
                        </div>
                        <div className="flex gap-2">
                            {/* added StarRating component */}
                          <StarRating/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-1 bg-[#147BF5] rounded-full flex "><span className="text-white text-xl"><AiFillMessage /></span></div>

                </div>
            </div>
            <p className="text-xs mt-1 text-justify p-1">{text}</p>
            <p className="font-semibold">Specialized In</p>
            <div className="flex gap-1">
                {/* adding specialized skill component */}
                <Specialized />
            </div>
            <div className="flex gap-12 ">
                <div className="flex text-[#A7A9B7] items-center gap-1 mt-2 font-medium text-xs"><span>Top Rated</span> <span className="text-yellow-300 text-xl"><AiTwotoneStar /></span><span className="text-black text-lg ml-1 font-[600]">3.5</span> </div>
                <div className="flex text-[#A7A9B7] items-center gap-1 mt-2 font-medium text-xs"><span>Experience</span> <span className="text-[#147BF5] text-xl"><AiTwotoneSetting /></span>  <span className="text-black text-lg ml-1 font-[600]">20</span> </div>
            </div>
            <div className="flex  text-[#A7A9B7] items-center gap-1 mt-2 font-medium text-xs"><span>Speak</span> <span className="text-[#147BF5] text-xl"><TbSphere /></span>  <span className="text-black text-lg ml-1 font-[600]">Telugu</span> </div>


        </div>
    )
}

export default LawyerCard
