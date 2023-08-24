import React from 'react'
import { AiFillMessage } from 'react-icons/ai'
import {BiSolidTimeFive,BiTask} from 'react-icons/bi'
import {PiFilesFill} from 'react-icons/pi'
import {IoIosPeople} from 'react-icons/io'

const CaseMagntNavigation = () => {
  const data = [ { title: "Interact", icon: <AiFillMessage /> }, { title: "Timeline", icon: <BiSolidTimeFive /> }, { title: "Tasks", icon: <BiTask /> }, { title: "File.Vault", icon: <PiFilesFill /> },{title:'People.&.Organizations',icon:<IoIosPeople/>}]
  return (
    <div className='flex gap-2 mt-2  w-[100%] mx-auto overflow-x-auto scrollbar-hide rounded-3xl'>
      <div  className='text-white bg-black h-8 items-center justify-center  px-3 py-2 font-semibold  gap-1  flex rounded-3xl text-xs'>
            <span className='text-lg'><AiFillMessage/></span><span>Summary</span>
          </div> 
      {
        data.map((item, index) => (
          <div key={index} className='border text-[#a7a9b7] items-center justify-center h-8  px-3 py-2 font-semibold  gap-1  flex rounded-3xl text-xs'>
            <span className='text-lg'>{item.icon}</span><span>{item.title}</span>
          </div>

        ))
      }

    </div>
  )
}

export default CaseMagntNavigation
