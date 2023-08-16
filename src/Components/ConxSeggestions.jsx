import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import avatar1 from '../assets/avatar4.jpg'
import { FaUsers } from "react-icons/fa";
const ConxSeggestions = () => {
  return (
    <div className='w-[10rem] h-[13.3rem] bg-white rounded-2xl flex flex-col items-center justify-center gap-1 box-border snap-center'>
        <ProfilePhoto image={avatar1} size={'w-24 h-24'}/>
        <p className='text-sm font-bold'>Elon Musk</p>
        <p className='text-xs text-[#A7A9B7]'>Specialized in corporates Law</p>
       <div className='flex gap-2'><span className='text-[#147BF5]'><FaUsers/></span> <span className='text-xs tracking-tight font-bold'>10 Mutual Connections</span></div>
       <button className='p-[.4rem] w-[80%] font-semibold rounded-3xl text-sm text-white bg-[#147BF5]'>Click to apply</button>
    </div>
  )
}

export default ConxSeggestions
