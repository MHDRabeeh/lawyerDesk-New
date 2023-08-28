import React, { useState } from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { BiSolidTimeFive, BiTask } from 'react-icons/bi'
import { PiFilesFill } from 'react-icons/pi'
import { IoIosPeople } from 'react-icons/io'
import { FaScaleBalanced } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from 'react-icons/md'

import CaseMgmntSummary from './CaseMgmntSummary'
import CaseMgmntInteract from './CaseMgmntInteract'
import CaseMgmntTimeline from './CaseMgmntTimeline'
import {MdKeyboardArrowDown} from 'react-icons/md'

const CaseMagntNavigation = ({ setShowCasePage }) => {
  const [count, setCount] = useState(0)
  const showPage = [{ cmpnt: <CaseMgmntSummary /> }, { cmpnt: <CaseMgmntInteract /> }, { cmpnt: <CaseMgmntTimeline /> }]
  const showComponent = showPage[count]

  const data = [{ title: "Summary", icon: <AiFillMessage /> }, { title: "Interact", icon: <AiFillMessage /> }, { title: "Timeline", icon: <BiSolidTimeFive /> }, { title: "Tasks", icon: <BiTask /> }, { title: "File.Vault", icon: <PiFilesFill /> }, { title: 'People.&.Organizations', icon: <IoIosPeople /> }]
  return (


    <div className='p-3'>
      <div className='flex gap-3 item-center '>
        <div onClick={() => setShowCasePage(false)}><span><MdKeyboardArrowLeft size={30} /></span></div>
        <div className='p-2 bg-[#147BF5] rounded-3xl text-white'> <span><FaScaleBalanced size={25} /></span></div>
        <div className='text-2xl font-bold mt-1'><p>Case No. 1</p></div>
      </div>
      {count===2&&
        <div className='w-[98%] mx-auto flex justify-between items-center m-2'>
        <div className='text-lg font-bold'><span>Case Timeline</span></div>
        <div className=' text-[#147BF5] flex  font-bold  '><span>July 2023</span><span><MdKeyboardArrowDown size={20}/></span></div>

      </div>
      }
      

      <div className='flex gap-2 mt-2  w-[100%] mx-auto overflow-x-auto scrollbar-hide rounded-3xl'>

        {
          data.map((item, index) => (
            <div onClick={() => setCount(index)} key={index} className={`border cursor-pointer ${count === index ? "text-white bg-black" : "text-[#a7a9b7]"}  items-center justify-center h-8  px-3 py-2 font-semibold  gap-1  flex rounded-3xl text-xs`}>
              <span className='text-lg'>{item.icon}</span><span>{item.title}</span>
            </div>

          ))
        }

      </div>

      {showComponent.cmpnt}


    </div>
  )
}

export default CaseMagntNavigation
