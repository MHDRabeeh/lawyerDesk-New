import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import avatar from '../assets/imageNotificaiton.jpg'
import { TbPointFilled } from 'react-icons/tb'
const NotificationCard = () => {
    return (
        <>
            <div className='w-[] h-16 bg-white rounded-2xl flex  mt-3 justify-center items-center '>
                <div className='w-[96%] h-14  flex items-center justify-between'>
                    <div className=' flex  flex-col'>
                        <div className='flex justify-center items-center gap-2 '>
                            <ProfilePhoto image={avatar} />
                            <div>
                                <div className=''><span className='font-bold'>New update on  corporate tax</span></div>
                                <div className='flex flex-col justify-center'>
                                    <span className='text-xs  text-[#A7A9B7]'>Hey Joseph, How are you?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 text-2xl'>
                        <span className='text-yellow-200 text-xl'><TbPointFilled /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationCard
