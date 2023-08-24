import React, { useState } from 'react'
import Wrapper from '../Components/Wrapper'
import { FaScaleBalanced } from "react-icons/fa6";
import imgOne from '../assets/newCaseImg.jpg'
import { AiOutlinePlus } from "react-icons/ai";
import BadgeStar from '../assets/badgeStar.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ClickOnAny from '../assets/ClickonAnyCase.jpg'
import CaseMgmntSummary from '../Components/CaseMgmntSummary';
const CaseManagement = () => {
    const [showCasePage, setShowCasePage] = useState(false)

    const TaskBarData = {
        title: "Case Management",
        path: '',
        icon: <FaScaleBalanced />,
        parentPath: 'Case Management'
    }

    return (
        <>
            <Wrapper TaskBarData={TaskBarData}>

                <div className='grid grid-cols-2 gap-3 mt-4'>
                    <div className=' h-[83vh] rounded-3xl flex flex-col gap-2'>
                        <div className=' h-[25vh] rounded-3xl bg-white grid grid-cols-2 items-center justify-center'>

                            <div className='h-[97%]  flex  items-center justify-center '>
                                <img src={imgOne} className='h-[97%] w-[90%]' alt="" />
                            </div>
                            <div className='h-[90%] flex flex-col justify-between '>
                                <div className=''>
                                    <p className='text-[#002386] font-bold text-lg'>Register your legal case today, &</p>
                                    <p className='text-lg italic font-light'>let the truth prevail!</p>
                                </div>
                                <div className='flex w-[95%] mx-auto justify-end'> <button className='bg-gradient-to-b from-[#51B9FF] to-[#147BF5] flex items-center text-white p-3  gap-2 text-xl rounded-3xl font-medium'><span><AiOutlinePlus size={25} /></span>New Case</button></div>
                            </div>

                        </div>
                        <div className=' bg-white rounded-3xl h-[58vh] p-2'>
                            <div className='flex gap-2 mt-2 w-[95%] mx-auto'>
                                <button className='p-3 text-xs rounded-3xl  bg-[#147bf5] text-white font-light'>Recently Added</button>
                                <button className='border px-5 py-3 rounded-3xl text-xs'>Other Cases</button>
                            </div>
                            <div className=' w-[100%] h-[40vh] mt-3 flex flex-col gap-3'>
                                <div className='w-[95%] h-14 mx-auto rounded-xl border p-2 flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={BadgeStar} className='w-7 h-7' alt="" />
                                        <p className='text-sm font-semibold'>Case No.4</p>
                                        <p className='text-xs font-light'>Case ID: TS32111</p>
                                    </div>
                                    <div>
                                        <span className='cursor-pointer text-3xl text-gray-400'><IoIosArrowDroprightCircle /></span>

                                    </div>

                                </div>
                                <div className='w-[95%] h-14 mx-auto rounded-xl border p-2 flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={BadgeStar} className='w-7 h-7' alt="" />
                                        <p className='text-sm font-semibold'>Case No.5</p>
                                        <p className='text-xs font-light'>Case ID: TS32111</p>
                                    </div>
                                    <div>
                                        <span className='cursor-pointer text-3xl text-[#058EEA]'><IoIosArrowDroprightCircle /></span>

                                    </div>

                                </div>
                                <div className='w-[95%] h-14 mx-auto rounded-xl border p-2 flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={BadgeStar} className='w-7 h-7' alt="" />
                                        <p className='text-sm font-semibold'>Case No.6</p>
                                        <p className='text-xs font-light'>Case ID: TS32111</p>
                                    </div>
                                    <div>
                                        <span className='cursor-pointer text-3xl text-[#058EEA]'><IoIosArrowDroprightCircle /></span>

                                    </div>

                                </div>
                                <div className='w-[95%] h-14 mx-auto rounded-xl border p-2 flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={BadgeStar} className='w-7 h-7' alt="" />
                                        <p className='text-sm font-semibold'>Case No.7</p>
                                        <p className='text-xs font-light'>Case ID: TS32111</p>
                                    </div>
                                    <div>
                                        <span className='cursor-pointer text-3xl text-[#058EEA]'><IoIosArrowDroprightCircle /></span>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    {
                        showCasePage ? (
                            <div className='bg-white h-[83vh] rounded-3xl '>

                               <CaseMgmntSummary setShowCasePage={setShowCasePage}/>
                            </div>

                        ) : (
                            <div className='bg-white h-[83vh] rounded-3xl flex justify-center items-center'>

                                <div onClick={()=> setShowCasePage(true)} className='flex flex-col justify-center items-center gap-5'>
                                    <div>
                                        <img src={ClickOnAny} className='h-32' alt="" />
                                    </div>
                                    <p className='text-xl font-extralight text-gray-300 italic'>Click on any case to view detail</p>
                                </div>
                            </div>
                        )
                    }




                </div>


            </Wrapper>

        </>
    )
}

export default CaseManagement
