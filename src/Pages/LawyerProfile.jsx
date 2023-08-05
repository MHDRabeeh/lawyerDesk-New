import ProfilePhoto from "../Components/ProfilePhoto";
import Wrapper from "../Components/Wrapper"
import { MdGavel } from "react-icons/md";
import avatar from '../assets/avatar2.jpg'
import StarRating from "../Components/StarRating";


const LawyerProfile = () => {
    const TaskBarData = {
        title: "Manage Connections",
        path: '/lawyerProfile',
        icon: <MdGavel />
    }
    return (
        <Wrapper TaskBarData={TaskBarData}>
            <div className="grid grid-cols-3 gap-4 overflow-y-auto scrollbar-hide">
                <div className=" h-[75vh] flex flex-col gap-3">
                    <div className="h-[40%] bg-white rounded-3xl">
                        <div className="flex items-center gap-3 p-2">
                            <div>
                                <ProfilePhoto image={avatar} size={`h-32 w-32`} />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <div><p className="text-2xl font-bold">Joseph cothett</p></div>
                                <div><p className="text-sm text-[#A7A9B7]">Family,Corporate,Property Expert</p></div>
                                <div className="flex gap-2 "><StarRating/></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="h-[10%] bg-white rounded-3xl"></div>
                    <div className="h-[50%] bg-white rounded-3xl"></div>
                </div>
                <div className="h-[75vh] flex flex-col gap-3">
                    <div className="bg-white h-[35%] rounded-3xl"></div>
                    <div className="bg-white h-[45%] rounded-3xl"></div>
                    <div className="bg-white h-[20%] rounded-3xl"></div>
                </div>
                <div className="bg-white h-[75vh] rounded-3xl grid  grid-cols-1 divide-y">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </Wrapper>
    )
}

export default LawyerProfile
