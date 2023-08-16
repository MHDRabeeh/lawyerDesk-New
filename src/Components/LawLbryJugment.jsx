import React from 'react'
import { MdFileCopy } from 'react-icons/md';
import { FaRegFilePdf } from 'react-icons/fa'
import { BsFiletypePdf } from 'react-icons/bs'

const LawLbryJugment = () => {
  return (
    <>
      <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>
        <div className='w-[95%] mx-auto mt-3 flex justify-between  '>
          <p className=' text-left text-lg font-bold'>Judgements</p>

        </div>
        <div className='grid grid-cols-12   p-3  w-[100%] h-[45vh] gap-3 overflow-auto scrollbar-hide mx-auto  rounded-2xl mt-3 '>
          <div className='col-span-5 h-28 border rounded-xl shadow-sm p-2'>
            <div className='w-[95%] mx-auto'>
              <div className='flex justify-between'>
                <p className='font-bold '>Dalbir Singh vs. State of Haryana,AIR 2000 SC 1677</p>
                <span className='text-[#147bf5]'><BsFiletypePdf size={25} /></span>

              </div>
              <p className='text-xs mt-2'>In this case, the Supreme Court held that if the driver was not driving rashly or negligently, and the accident occurred due to an unavoidable circumstance, the driver could not be held liable under Sections 304A, 337, or 338 of the Indian Penal Code.</p>
            </div>
          </div>
          <div className='col-span-2 h-9 invisible'></div>
          <div className='col-span-5 h-28 border rounded-xl shadow-sm p-2'>
            <div className='w-[95%] mx-auto'>
              <div className='flex justify-between'>
                <p className='font-bold '>S. Govindan vs. S. Iyyadurai, AIR1965 Mad 133</p>
                <span className='text-[#147bf5]'><BsFiletypePdf size={25} /></span>

              </div>
              <p className='text-xs mt-2'>In this case, the Madras High Court held that if a pedestrian appears suddenly on the road, the driver cannot always be expected to stop the vehicle instantly. If the driver does everything possible to avoid the accident but still collides with the pedestrian, the driver may not be considered negligent.</p>
            </div>
          </div>
          <div className='col-span-5 h-28 border rounded-xl shadow-sm p-2'>
            <div className='w-[95%] mx-auto'>
              <div className='flex justify-between'>
                <p className='font-bold '>Jai Prakash vs. The State of Haryana, (1991) 1 SCC 504</p>
                <span className='text-[#147bf5]'><BsFiletypePdf size={25} /></span>

              </div>
              <p className='text-xs mt-2'>In this case, the Supreme Court held that if the driver was not driving rashly or negligently, and the accident occurred due to an unavoidable circumstance, the driver could not be held liable under Sections 304A, 337, or 338 of the Indian Penal Code.</p>
            </div>
          </div>
          <div className='col-span-2 h-9 invisible'></div>
          <div className='col-span-5 h-28 border rounded-xl shadow-sm p-2'>
            <div className='w-[95%] mx-auto'>
              <div className='flex justify-between'>
                <p className='font-bold '>Dalbir Singh vs. State of Haryana,AIR 2000 SC 1677</p>
                <span className='text-[#147bf5]'><BsFiletypePdf size={25} /></span>

              </div>
              <p className='text-xs mt-2'>In this case, the Supreme Court held that if the driver was not driving rashly or negligently, and the accident occurred due to an unavoidable circumstance, the driver could not be held liable under Sections 304A, 337, or 338 of the Indian Penal Code.</p>
            </div>
          </div>
          <div className='col-span-5 h-28 border rounded-xl shadow-sm p-2'>
            <div className='w-[95%] mx-auto'>
              <div className='flex justify-between'>
                <p className='font-bold '>S. Govindan vs. S. Iyyadurai, AIR1965 Mad 133</p>
                <span className='text-[#147bf5]'><BsFiletypePdf size={25} /></span>

              </div>
              <p className='text-xs mt-2'>In this case, the Supreme Court held that if the driver was not driving rashly or negligently, and the accident occurred due to an unavoidable circumstance, the driver could not be held liable under Sections 304A, 337, or 338 of the Indian Penal Code.</p>
            </div>
          </div>
          <div className='col-span-2 h-9 invisible'></div>
          <div className='col-span-5 h-28 border rounded-xl shadow-sm p-2'>
            <div className='w-[95%] mx-auto'>
              <div className='flex justify-between'>
                <p className='font-bold '>Jai Prakash vs. The State of Haryana, (1991) 1 SCC 504</p>
                <span className='text-[#147bf5]'><BsFiletypePdf size={25} /></span>

              </div>
              <p className='text-xs mt-2'>In this case, the Supreme Court held that if the driver was not driving rashly or negligently, and the accident occurred due to an unavoidable circumstance, the driver could not be held liable under Sections 304A, 337, or 338 of the Indian Penal Code.</p>
            </div>
          </div>

        </div >
        <div className=' text-xs flex justify-end w-[98%] text-[#a7a9b7]'><span>29/2000</span></div>
      </div>
      <div className='flex justify-between  items-center  mt-3 w-[95%] mx-3 '>
        <div className='font-bold '>Not what you were expecting?</div>
        <div className='flex justify-center items-center '> <button className='px-40 py-3 font-semibold rounded-3xl text-white bg-[#147BF5]'>Regenerate</button></div>
      </div>
    </>
  )
}

export default LawLbryJugment
