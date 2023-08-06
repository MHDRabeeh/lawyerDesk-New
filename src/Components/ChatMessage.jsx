import ProfilePhoto from "./ProfilePhoto"
import avatar from '../assets/avatar3.png'
import { BsCameraVideo, BsTelephone } from "react-icons/bs";
import image1 from '../assets/CarCrash.jpg'
import { RiAttachmentLine } from "react-icons/ri";
import { BsEmojiSmile } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'


const ChatMessage = () => {
    const Message = [{ senderId: 1, text: "Hello, I'm in need of legal assistance. Can you help me with my situation?", image: false },
    { senderId: 2, text: "Of course, I'm here to help.", image: false },
    { senderId: 1, text: "I recently got injured in a car accident, and I believe it was the other driver's fault.", image: false },
    { senderId: 2, text: "I'm sorry to hear about your accident. I can definitely assist you with your personal injury case." },
    { senderId: 1, text: image1, image: true }]
    return (
        <div className="">

            <div className="flex justify-between items-center  w-[96%] mx-auto h-14 mt-1  border-b-[1px] border-[#f8fafc] ">
                <div className="flex gap-2 items-center  ">
                    <div className="flex items-center relative">
                        <ProfilePhoto image={avatar} />
                        <p className="text-7xl absolute top-1 text-lime-500 left-9">•</p>
                    </div>
                    <div>
                        <p className="font-bold">Elon Musk</p>
                        <p className="text-[#A7A9B9] text-xs">typring.... </p>
                    </div>
                </div>
                <div className="flex items-center gap-6 justify-center">
                    <div className="text-3xl"><span><BsCameraVideo /></span></div>
                    <div className="text-2xl"><span><BsTelephone /></span></div>
                </div>
            </div>
            <div className="mt- overflow-auto scrollbar-hide  h-[63vh] p-3">
                <div className="flex justify-center">
                    <p className=" p-1 text-[#A7A9B9] inline-block  text-xs rounded-lg bg-[#f1f5f9]">Yesterday</p>
                </div>
                {
                    Message.map((item, i) => (



                        <div key={i}>
                            {item.text && item.senderId == 1 &&
                                < div >
                                    <div className="rounded-tr-xl rounded-br-xl  rounded-tl-xl  p-3 bg-[#f1f5f9] mt-2 inline-block">

                                        {item.image ?
                                            <img src={item.text} className="w-48 h-32" alt="" /> :
                                            <p className="text-sm"> {item.text}</p>
                                        }
                                    </div>
                                    <p className="text-xs text-[#A7A9B9] mt-1">4:20 AM</p>
                                </div>
                            }


                            {item.text && item.senderId == 2 && <div className=" flex justify-end ">
                                <div className=" flex flex-col justify-end">
                                    <div className="rounded-tr-xl rounded-bl-xl  rounded-tl-xl  p-3 bg-[#407BFF] mt-2 inline-block">
                                        <p className="text-sm text-white">{item.text}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <p className="text-xs text-[#A7A9B9] mt-1">4:20 AM</p>
                                    </div>

                                </div>
                            </div>
                            }
                        </div>

                    ))
                }
            </div>
            <div className="w-[95%] h-10 mt-4 mx-auto flex justify-around relative items-center">
                <span className="absolute top-3 left-5  "><RiAttachmentLine className="text-slate-400 text-lg" /></span>
                <input type="text" className="w-[90%] h-10 ml-2 bg-slate-50 rounded-3xl placeholder-gray-400 px-8 placeholder-opacity-75 border-slate-100 " placeholder="write your message " />
                <span className="absolute right-[4.5rem] top-2 text-xl text-slate-400"><BsEmojiSmile /></span>
                <span className=" text-[#407BFF] p-2 bg-slate-50 rounded-full "><RiSendPlane2Fill className="text-2xl" /></span>

            </div>

        </div >
    )
}

export default ChatMessage
