import React from 'react'
import { FaSlidersH } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";


const LawLbryHistory = () => {
    return (
        <>
            <div className='w-[100%] flex justify-between mx-auto mt-2'> <span className='font-bold'>History</span> <span className='text-slate-800 text-xl'><FaSlidersH /></span></div>
            <div className='h-[70vh] grid grid-cols-1 gap-3 mt-3  w-[100%] rounded-3xl overflow-auto scrollbar-hide '>
                {
                    [1, 1, 3, 4, 5, 6].map(() => (
                        <div className='bg-white h-28  rounded-3xl flex flex-col justify-around '>
                            <div className='flex gap-3 ml-3 '><span className='text-3xl text-[#407BFF]'><AiFillMessage /> </span><p className='text-lg font-semibold '>Financial Law related constituent and the...</p></div>
                            <div className='flex justify-between w-[97%] mx-auto'>
                                <div className='flex gap-4 ml-4'>
                                    <div className='flex gap-2 items-center'><span className='text-xs font-light'>Legal Description</span><span className='text-2xl text-green-400'><BiCheck /></span></div>
                                    <div className='flex gap-2 items-center'><span className='text-xs font-light'>Legal Description</span><span className='text-2xl text-green-400'><BiCheck /></span></div>
                                </div>
                                <div ><span className='text-3xl text-[#407bff]'><IoIosArrowDroprightCircle /></span></div>
                            </div>

                        </div>

                    ))
                }


            </div>
        </>
    )
}

export default LawLbryHistory
