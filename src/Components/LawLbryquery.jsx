import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const LawLbryquery = ({setPage}) => {

    const text = "I was driving my car at around 10:00 PM on a deserted road within Delhi city limits, maintaining a speed below the prescribed limit. Suddenly, a man appeared from the bushes, leaving me with insufficient time to react. Despite applying the brakes immediately, I was unable to prevent my vehicle from striking him. The collision resulted in severe injuries for the pedestrian. I promptly called for an ambulance to assist him."
    return (
        <div className=''>
            


                <div className='relative'>
                    <div className='flex gap-2 mt-6 items-center'><span onClick={()=>setPage(pre=>false)} className='text-2xl cursor-pointer '><IoIosArrowBack /></span><span className='text-lg font-semibold'>The legal implications of autonomous vehicles and their impact on traffic regulations.</span></div>
                    <div className='flex mt-10 items-center '>
                        <span className='p-4 bg-[#407bff] text-white text-xs font-light  rounded-xl'>Query</span>
                        {
                            ["Legal Dec", "Act & Laws", "Judgment", "Templates", "Questions", "Support"].map((item) => (
                                <span className='p-4 bg-white cursor-pointer   shadow  duration-200  text-[#A7A9B7] font-light text-xs rounded-xl'>{item}</span>
                            ))
                        }
                    </div>
                    <div className='w-[97%] h-8 bg-white top-[100px] rounded-tr-3xl  rounded-bl-3xl absolute'></div>
                    <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-2 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>

                        <div className='w-[90%] mx-auto mt-5'>
                            <p className=' text-left text-sm'>{text}</p>
                        </div>
                        <div className=' text-xs flex justify-end w-[98%] text-[#a7a9b7]'><span>29/2000</span></div>
                    </div>

                </div>
            


            <div className='flex justify-center items-center mt-3 '> <button className='px-40 py-3 font-semibold rounded-3xl text-white bg-[#407bff]'>Generate</button></div>
        </div>

    )
}

export default LawLbryquery
