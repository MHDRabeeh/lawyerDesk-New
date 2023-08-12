import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { TbPointFilled } from 'react-icons/tb'
import image1 from '../assets/Modalimg.jpg'
import { RiSendPlane2Fill } from 'react-icons/ri'
const ModalLaw = ({ setModal }) => {
    return (
        <div className='fixed  inset-0  flex justify-center items-center bg-black bg-opacity-80'>
            <div className='w-[30vw] h-[50vh] bg-white rounded-3xl '>
                <div className=' flex justify-end '>
                    <div className='p-1 bg-[#407BFF] m-3 rounded-full'>
                        <span onClick={() => setModal((pre) => false)} className='text-white cursor-pointer text-xl font-semibold rounded-full'><RxCross2 /></span>
                    </div>
                </div>
                <div className='flex flex-col justify-between h-[82%]'>
                    <div className='w-[70%] mx-auto flex gap-3'>
                        <div>
                            <div><img src={image1} className='w-20' alt="" /></div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='text-xl font-bold'>Need to fix..!</span>
                            <span><button className='text-xs px-3 py-2 bg-[#407bff] text-white rounded-3xl'>Retry (max 1)</button></span>
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto'>
                        {
                            ["In the legal case involving a vehicular", "the driver, hereby referred to as the", "contends that they exercised due care"].map((item, i) => (
                                <p className='flex items-center text-sm ' key={i}> <span><TbPointFilled /></span>{item}</p>
                            ))
                        }
                    </div>

                    <div className='w-[90%] mx-auto flex items-center gap-2'>
                        <input type="text" className='w-[80%] mx-auto border-slate-200 h-9 rounded-full bg-slate-100 placeholder text-sm placeholder-slate-300 px-4' placeholder='Enter details...' />
                        <div className='bg-slate-100 rounded-full p-2'><span className='text-[#407bff] text-2xl'><RiSendPlane2Fill /></span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalLaw
