import React from 'react'
import { BiSolidUserVoice, BiSolidBookReader, BiSolidPencil } from "react-icons/bi";
import { LuEdit2 } from "react-icons/lu";



const Languages = () => {
    const langKnowlodge = [
        { language: "English", Reading: true, Writing: true, Speack: true },
        { language: "Hindi", Reading: true, Writing: false, Speack: true },
        { language: "Malayalam", Reading: true, Writing: false, Speack: false },
        { language: "Telugu", Reading: true, Writing: true, Speack: false },


    ]
    return (
        <div className='w-[90%] h-[97%]'>
            <div className='w-[95%] flex justify-between mx-auto'>

            <p className='font-semibold p-3 text-lg'>Languages</p>
            <span><LuEdit2 className="text-[#407BFF] text-xl mt-2"/></span>
            </div>
            <div className='flex flex-col gap-3 justify-evenly items-center'>
                {langKnowlodge.map((item,i) => (
                    <div key={i} className='grid grid-cols-4 gap-1 justify-around'>
                        <div className='flex  justify-center items-center text-slate-300'><span>{item.language}</span></div>
                        {item.Speack ? <div className="flex gap-1 items-center text-xs border px-3  font-semibold border-[#407BFF] rounded-3xl text-[#407BFF] "><span className="text-lg"> <BiSolidUserVoice /></span>Speack</div> : <div></div>}
                        {item.Reading ? <div className="flex gap-1 items-center text-xs border  px-3 font-semibold border-[#407BFF] rounded-3xl text-[#407BFF] "><span className="text-base"><BiSolidBookReader /></span>Read</div> : <div></div>}
                        {item.Writing ? <div className="flex gap-1 items-center text-xs border  px-3 font-semibold border-[#407BFF] rounded-3xl text-[#407BFF] "><span className="text-base"> <BiSolidPencil /></span>Writing</div> : <div></div>}
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Languages
