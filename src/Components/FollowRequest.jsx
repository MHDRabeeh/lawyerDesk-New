import React from 'react'
import ProfilePhoto from './ProfilePhoto';
import avatar2 from '../assets/avatar2.jpg'
import { BiLink } from "react-icons/bi";

const FollowRequest = () => {
    return (
        <>
            <div className=' h-36 bg-white rounded-2xl flex  mt-3 justify-center relative'>
                <div className=' w-[93%]   flex flex-col justify-evenly '>
                    <div className='flex justify-start items-center gap-2 '>
                        <ProfilePhoto image={avatar2} />
                        <div className='flex flex-col'>

                            <div className='flex flex-col justify-start'><span className='font-bold'>Brooklyn Simmons</span> <span className='text-xs text-[#A7A9B7]'>Follows you and is inviting you to connect</span></div>
                            <div className='flex  justify-start gap-0'>
                                <span className='text-lg   text-[#A7A9B7]'><BiLink /></span>
                                <span className='text-xs  text-[#A7A9B7]'>0 mutual connections</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='px-10 py-2 rounded-3xl text-xs bg-blue-200'><button className='font-semibold'>cancel</button></div>
                        <div className='px-10 py-2 rounded-3xl text-xs bg-[#147BF5]'><button className='font-semibold text-white'>Accept</button></div>
                    </div>
                </div>
                <div className='absolute top-5 right-4 text-[#A7A9B7] text-xs'>14:00</div>
            </div>

        </>
    )
}

export default FollowRequest
