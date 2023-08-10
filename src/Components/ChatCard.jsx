import ProfilePhoto from "./ProfilePhoto"
import avatar from '../assets/avatar3.png'

function ChatCard() {
    return (
        <div className="w-[98%] border  rounded-2xl h-20 flex items-center">
            <div className=" mx-auto h-20 flex items-center w-[98%] justify-between">
                <div className="flex gap-2 items-center  ">
                    <div className="flex items-center relative">
                        <ProfilePhoto image={avatar} size={`w-16 h-16`} />
                        <p className="text-8xl absolute top-[.3rem] text-lime-500 left-10">•</p>
                    </div>
                    <div>
                        <p className="font-bold">Elon Musk</p>
                        <p className="text-[#A7A9B9] text-xs">Hey Elon,How are you </p>
                    </div>
                </div>

                <div className=" flex flex-col gap-1 ">
                    <div className="p-1 bg-[#407BFF] rounded-full flex items-center justify-center"> <p className="text-white text-sm font-bold ">1</p></div>
                    <div className="text-xs text-[#A7a9b7]"> <p>14:02</p></div>
                   
                </div>
            </div>
        </div>
    )
}

export default ChatCard
