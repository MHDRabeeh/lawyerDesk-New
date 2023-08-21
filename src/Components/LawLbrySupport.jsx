import React from 'react'
import { BsFiletypePdf } from 'react-icons/bs'
import { MdFileCopy } from "react-icons/md";

const LawLbrySupport = () => {
    return (
        <>
            <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>
                <div className='w-[95%] mx-auto mt-3 flex justify-between  '>
                    <div>
                        <p className=' text-left text-lg font-bold'>Acts, Laws, and Regulations</p>
                        <p className='text-xs font-medium'>You can find all supporting documents below for your case</p>
                    </div>


                    <span className='text-3xl text-[#147BF5]'><MdFileCopy /></span>
                </div>
                <div className='grid grid-cols-12   p-3  w-[100%] h-[45vh] gap-3 overflow-auto scrollbar-hide mx-auto  rounded-2xl mt-3 '>
                    <div className='col-span-5 h-20 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>First Information Report (FIR):</span> A copy of the FIR filed with the police after the accident. This document provides an official account of the incident and is crucial for any legal proceedings.</p>

                        </div>
                    </div>
                    <div className='col-span-2 h-9 invisible'></div>
                    <div className='col-span-5 h-16 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Accident report:</span> The official police report of the accident, including any photographs, sketches, or other relevant documentation of the accident scene.</p>

                        </div>
                    </div>
                    <div className='col-span-5 h-20 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Vehicle registration certificate:</span>  A copy of the registration certificate for the vehicle involved in the accident, confirming the ownership and registration details.</p>

                        </div>
                    </div>
                    <div className='col-span-2 h-9 invisible'></div>
                    <div className='col-span-5 h-20 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Vehicle insurance policy:</span>   A copy of the valid insurance policy for the vehicle, including any third-party liability coverage, which could be relevant to the compensation claims.</p>

                        </div>
                    </div>
                    <div className='col-span-5 h-20 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Witness statements:</span> Written statements from any witnesses to the accident, which can help establish the events that occurred and potentially support the driver's version of the incident.</p>

                        </div>
                    </div>
                    <div className='col-span-2 h-9 invisible'></div>
                    <div className='col-span-5 h-20 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Traffic camera footage or surveillance footage:</span> If available, any video evidence of the accident from nearby traffic or surveillance cameras, which could help reconstruct the events leading up to the collision.</p>

                        </div>
                    </div>
                    <div className='col-span-5 h-20 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Vehicle inspection report:</span>  If applicable, a report from a certified mechanic or vehicle inspector to determine if any mechanical failures or malfunctions contributed to the accident.</p>

                        </div>
                    </div>
                    <div className='col-span-2 h-9 invisible'></div>
                    <div className='col-span-5 h-16 border rounded-xl shadow-sm '>
                        <div className='w-[97%] mx-auto p-2 flex justify-center items-start gap-2'>
                            <div className=' '>
                                <input type="checkbox" className='rounded-full text-[#147bf5] ' />
                            </div>
                            <p className='text-xs mt-2'>  <span className='text-xs mt-2 font-bold'>Personal documents:</span> Any additional documentation that may be required, such as the driver's Aadhaar card, passport, or other identification documents.</p>

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

export default LawLbrySupport
