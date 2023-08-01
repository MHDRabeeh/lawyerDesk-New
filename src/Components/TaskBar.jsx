import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import image1 from '../assets/Profile_1.jpg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsFileEarmarkText } from "react-icons/bs";
const TaskBar = () => {
    return (
        <div className='w-[100%] h-20  bg-white mt-3 rounded-3xl  '>

            <div className='w-[97%] h-20 flex justify-between items-center mx-auto'>
                <div className='flex justify-between gap-3 items-center'>
                <div className=' bg-[#407BFF]  p-3 rounded-full'>
                    
                    <span className='text-xl font-extrabold text-white'>
                        <BsFileEarmarkText className='h-5 w-5 font-extrabold' />
                    </span>
                </div>
                 <p className='text-2xl font-[500] tracking-wide'>News</p>
                </div>
               
                <div className='flex gap-2 justify-between items-center '>
                    <div>
                        <p className=''><IoIosNotificationsOutline className='h-8 w-12' /></p>
                    </div>
                    <div>
                        <ProfilePhoto image={image1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskBar
