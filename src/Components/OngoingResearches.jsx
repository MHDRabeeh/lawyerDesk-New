import React from 'react'
import { FaSlidersH } from "react-icons/fa";
import image from '../assets/OngoingResearch.jpg'
import { BiCheck } from "react-icons/bi";

const OngoingResearches = () => {
  const data = [{ valueOne: "Legal Description", valueTwo: "Acts & Law" }, { valueOne: "Judgment", valueTwo: "Templates " }, { valueOne: "Questions", valueTwo: "Supporting Docs" }]
  return (
    <>
      <div className='w-[100%] flex justify-between mx-auto mt-2'> <span className='font-bold'>Ongoing Researches</span> <span className='text-slate-800 text-xl'><FaSlidersH /></span></div>
      <div className='w-[100%] h-[70vh] mt-3 grid grid-cols-4 gap-3 rounded-3xl overflow-auto scrollbar-hide'>
        {
          [1, 2, 3, 4,5,6,7,8,9].map((item, index) => (
            <div key={index} className='h-[50vh] bg-white rounded-2xl flex flex-col justify-around'>
              <div className='w-[100%] flex justify-center'><img src={image} className='h-36 w-40' alt="ongoingImage" /></div>
              <div className='w-[70%] mx-auto'><p className='text-lg font-bold'>Financial Law related constituent and the...</p></div>
              <div className='w-[90%] flex flex-col gap-2 justify-start mx-auto'>
                {data.map((item, index) => (
                  <div className='flex gap-2 ' key={index}>
                    <span className='bg-[#147BF5] text-xs font-light px-3 py-1 rounded-3xl text-white text-center flex items-center'>{item.valueOne} <BiCheck className='text-white text text-lg font-semibold' /></span>
                    <span className='bg-[#147BF5] text-xs font-light px-3 py-1 rounded-3xl text-white text-center flex items-center'>{item.valueTwo} <BiCheck className='text-white text text-lg font-semibold' /></span>
                  </div>

                ))}

              </div>
            </div>

          ))
        }
      </div>

    </>
  )
}

export default OngoingResearches

