import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import avatar from '../assets/avatar3.png'
import { IoLinkSharp } from "react-icons/io5";
import { ImFileText } from "react-icons/im";

const OtherNotification = () => {
  return (
    <div>
         <div className='w-[] h-16 bg-white rounded-2xl flex  mt-3 justify-center items-center '>
                <div className='w-[96%] h-14  flex items-center justify-between'>
                    <div className=' flex  flex-col'>
                        <div className='flex justify-center items-center gap-2 '>
                            <ProfilePhoto image={avatar} />
                            <div>
                                <div className=''><span className='font-bold'>Cody Fisher</span> <span className='text-xs'>Sent to an attachment</span></div>
                                <div className='flex flex-col justify-center'>
                                    <span className='text-xs flex items-center text-blue-500 font-bold'>  <span><IoLinkSharp/></span> Legal document.docx</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 text-2xl'>
                        <span className='text-[#A7A9B7] text-xs'>14:00</span>
                    </div>
                </div>
            </div>
            <div className='w-[] h-16 bg-white rounded-2xl flex  mt-3 justify-center items-center '>
                <div className='w-[96%] h-14  flex items-center justify-between'>
                    <div className=' flex  flex-col'>
                        <div className='flex justify-center items-center gap-2 '>
                            <ProfilePhoto image={avatar} />
                            <div>
                            <div className=''><span className='font-bold'>Cody Fisher</span> <span className='text-xs'>Sent to an attachment</span></div>
                                <div className='flex flex-col justify-center'>
                                <span className='text-xs flex  text-blue-500 font-bold'>  <span><ImFileText/></span>Trump loses bid to move New York hush-money case to federal court...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 text-2xl'>
                    <span className='text-[#A7A9B7] text-xs'>14:00</span>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default OtherNotification
