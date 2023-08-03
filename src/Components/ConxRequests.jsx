import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import avatarOne from '../assets/avatar3.png'
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
const ConxRequests = () => {
    return (
        <div className='w-[] h-16 bg-white rounded-2xl flex  justify-center items-center '>
            <div className='w-[96%] h-14  flex items-center justify-between'>

                <div className=' flex '>
                    <div className='flex justify-center items-center '>
                        <ProfilePhoto image={avatarOne} />  
                    </div>
                    <div className='flex flex-col justify-center items-center ml-3'>
                        <div className='mt-2'><span className='font-bold'>Elon Musk </span><span className='text-xs ml-4 text-[#A7A9B7]'>2 days ago</span></div>
                        <span className='text-xs ml-4 text-[#A7A9B7]'>Business man</span>
                    </div>


                </div>
                <div className='flex gap-3 text-2xl'> <span><FcCheckmark /></span>
                    <span className='text-red-500'><RxCross2 /></span>
                </div>

            </div>
        </div>
    )
}

export default ConxRequests
