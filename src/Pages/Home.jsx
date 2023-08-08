import React from 'react'
import Navbar from '../Components/Navbar'
import TaskBar from '../Components/TaskBar'
import ProfilePhoto from '../Components/ProfilePhoto'
import image1 from '../assets/Profile_1.jpg'
import { RiMoreLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaSlidersH } from "react-icons/fa";
import Wrapper from '../Components/Wrapper'
import { FiFileText } from "react-icons/fi";

const Home = () => {
    const TaskBarData = {
        title:"News",
        path :'',
        icon:<FiFileText/>,
        parentPath:'Home'
    }
    return (
       
            <Wrapper TaskBarData={TaskBarData}>
                <div className=' grid grid-cols-2 gap-3'>


                    <div className=' overflow-y-scroll'>
                        <div className='h-[20vh] w-[100%] bg-white rounded-3xl flex flex-col justify-evenly items-center'>
                            <div className='w-[100%] flex justify-evenly items-center '>
                                <ProfilePhoto image={image1} />
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
                            <span className='text-xl font-bold'>News Feed</span>
                            <span className='text-2xl   text-slate-500'><FaSlidersH /></span>
                        </div>
                        <div className='h-[30vh] w-[100%] text-white rounded-3xl bg-[#407BFF] flex flex-col items-center justify-around'>

                            <div className='w-[95%] flex justify-between mx-auto items-center '>
                                
                                <div><ProfilePhoto image={image1} /></div>
                                <button className='border h-7 w-40 text-sm rounded-3xl'>Click to apply</button>
                            </div>
                            <div className='text-center'>
                                <p>On May 29. 2023, at approximately 1:00 PM, I was walking on the footpath of a street in India when I was hit by motorcycle. The see more</p>
                                  
                            </div>
                            <div className='w-[97%] flex mx-auto gap-3 text-[#407BFF]'>
                                <span className='rounded-3xl p-1 text-xs bg-white'>#Attempt to murder</span>
                                <span className='rounded-3xl p-1 text-xs bg-white'>#Trafic Law</span><span className='rounded-3xl p-1 text-xs bg-white'>#Criminal Law</span><span className='rounded-3xl p-1 text-xs bg-white'>#Criminal Law</span>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        Second
                    </div>
                </div>
                </Wrapper>
            



        
    )
}

export default Home
