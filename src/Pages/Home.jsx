import React from 'react'
import ProfilePhoto from '../Components/ProfilePhoto'
import image1 from '../assets/photo_2023-08-14_15-29-13.jpg'
import image2 from '../assets/Profile_1.jpg'
import { RiMoreLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaSlidersH } from "react-icons/fa";
import Wrapper from '../Components/Wrapper'
import { FiFileText } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Post from '../Components/Post'
import { FaArrowTrendUp } from "react-icons/fa6";
import Carousal from '../Components/Carousal';
import imgConcn from '../assets/Connection.jpg'
import chatimg from '../assets/Chat.jpg';
import lawimg from '../assets/Law.jpg'
import { useNavigate } from 'react-router-dom';

const data = [{ title: "Connections", img: imgConcn ,path:"/connections"}, { title: "Chat", img: chatimg ,path:"/chat"}, { title: "Cennections", img: lawimg ,path:"/chat"}]
const Home = () => {
    const TaskBarData = {
        title: "News",
        path: '',
        icon: <FiFileText />,
        parentPath: 'Home'
    }
    const navigate = useNavigate()
    return (

        <Wrapper TaskBarData={TaskBarData}>
            <div className=' grid grid-cols-2 gap-3'>


                <div className=' overflow-auto h-[85vh]  scrollbar-hide'>
                    <div className='h-[20vh] w-[100%] bg-white rounded-3xl flex flex-col justify-evenly items-center'>
                        <div className='w-[100%] flex justify-evenly items-center '>
                            <ProfilePhoto image={image2} />
                            <input type="text" className='w-[80%] rounded-3xl border-gray-200 h-11 p-3 placeholder-gray-300 placeholder-opacity-75 ' placeholder='What you want to talk about' />
                            <div><span className='text-gray-300 text-2xl'><RiMoreLine /></span></div>
                        </div>
                        <div className='flex justify-between w-[90%] mx-auto'>
                            <div className='flex items-center text-[#A7A9B7] gap-2'><span className='text-3xl'><BsCameraVideo /></span> <span className='text-sm'>Video</span></div>
                            <div className='flex items-center text-[#A7A9B7]  gap-2 '><span className='text-3xl'><IoImageOutline /></span> <span className='text-sm'>Image</span></div>
                            <div className='flex items-center text-[#A7A9B7]  gap-2 '><span className='text-3xl'><HiOutlineEmojiHappy /></span> <span className='text-sm'>Image</span></div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-4'>


                        {/* News Feed */}


                        <span className='text-xl font-normal'>News Feed</span>
                        <span className='text-2xl   text-slate-500'><FaSlidersH /></span>
                    </div>
                    <div className='h-[30vh] w-[100%] text-white rounded-3xl bg-[#407BFF] flex flex-col items-center justify-evenly mt-2'>
                        <div className='w-[95%] flex justify-between mx-auto items-center '>
                            <div className='flex gap-2 items-center'>
                                <div><ProfilePhoto image={image1} /></div>
                                <div className='flex flex-col'>
                                    <span className='text-sm font-bold'>Case of Hit & Run</span>
                                    <span className='text-xs font-light'>By Susan</span>
                                </div>

                            </div>

                            <button className='border px-3 py-1 font-semibold text-xs rounded-3xl'>Click to apply</button>
                        </div>
                        <div className='text-left w-[95%] mx-auto'>
                            <p className='text-sm font-light'>On May 29. 2023, at approximately 1:00 PM, I was walking on the footpath of a street in India when I was hit by motorcycle. The <span className='font-medium underline cursor-pointer hover:text-slate-200'>see more</span></p>

                        </div>
                        <div className='w-[97%] flex mx-auto gap-3 text-[#407BFF]'>
                            {
                                ["#Attempt to murder", "#Trafic Law", "#Criminal Law", "#Criminal Law"].map((item, i) => (
                                    <span key={i} className='rounded-3xl px-1 text-xs bg-white font-semibold'>{item}</span>
                                ))
                            }
                        </div>
                        <div className='flex justify-start  w-[95%] mx-auto'>
                            <p className=' font-bold '>8 more applicats</p>
                        </div>
                        <div className='w-[95%] mx-auto flex justify-start'>
                            <p className='flex items-center text-sm gap-1 font-light'><span><SlLocationPin /></span> vishakapattanam</p>

                        </div>
                        <div className='w-[95%] mx-auto flex justify-start'>
                            <p className='flex items-center text-sm gap-1 font-light'><span><FaArrowTrendUp /></span> 80% Match to your specialization </p>
                        </div>
                    </div>
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className=''>
                    <div className='w-[100%] h-[40vh] '>
                        <Carousal />
                    </div>
                    <div className='mt-3 p-3 flex flex-col gap-2'>
                        {
                            data.map((ele, index) => (
                                <div key={index} className='w-[100%] h-[5.5rem] flex  items-center bg-white rounded-3xl cursor-pointer' onClick={()=>navigate(ele.path)}>
                                    <div className='flex gap-4 items-center px-5'>
                                        <img className='w-16 h-16' src={ele.img} alt="" />
                                        <p className='font-semibold'>{ele.title}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </Wrapper>





    )
}

export default Home
