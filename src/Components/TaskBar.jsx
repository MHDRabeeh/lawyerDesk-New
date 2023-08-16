import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import image1 from '../assets/Profile_1.jpg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const TaskBar = ({ TaskBarData: { title, icon, path,parentPath } }) => {
    const navigate = useNavigate()

    return (
        <div className='w-[100%] h-20  bg-white mt-3 rounded-3xl  '>

            <div className='w-[97%] h-20 flex justify-between items-center mx-auto'>
                <div className='flex justify-between gap-3 items-center'>
                    <div className=' bg-[#147BF5]  p-3 rounded-full'>

                        <span className='text-xl  text-white h-5 w-5 font-extrabold'>
                            {icon}
                        </span>
                    </div>
                    <div>
                        <p className='text-xl font-[600] tracking-wide'>{title}</p>
                        <div className='ml-1 text-xs font-semibold'><span className='text-[#A7A9B7]'>{parentPath}</span><span className='text-[#147BF5]'>{path}</span></div>
                    </div>

                </div>

                <div className='flex gap-2 justify-between items-center '>
                    <div>
                        <p className='' onClick={() => navigate('/notifications')}><IoIosNotificationsOutline className='h-8 w-12 cursor-pointer' /></p>
                    </div>
                    <div onClick={()=>navigate('/lawyerProfile')}>
                        <ProfilePhoto image={image1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskBar
