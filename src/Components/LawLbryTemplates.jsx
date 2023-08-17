import React from 'react'
import { BsFiletypeDocx } from 'react-icons/bs'

const LawLbryTemplates = () => {
    const data = [{ title: "Legal notice/Letter Of Representation" }, { title: 'Vakalatnama' }, , { title: 'Bail Application' }, { title: 'Affidavits' }, { title: 'Petition for Compensation' }, { title: 'Reply to the Opposing Submissions' }]
    return (
        <>
            <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>
                <div className='w-[95%] mx-auto mt-3 flex justify-between  '>
                    <p className=' text-left text-lg font-bold'>Templates</p>
                </div>
                <div className='grid grid-cols-12   p-3  w-[100%] h-[45vh] gap-3 overflow-auto scrollbar-hide mx-auto  rounded-2xl mt-3 '>


                    {
                        data.map((item, index) => (
                            < >
                                <div key={index} className='col-span-5 h-12 border rounded-xl shadow-sm flex items-center justify-start'>
                                    <div className='w-[95%] mx-auto flex items-center justify-start '>
                                        <div className='flex justify-start items-center gap-1'>
                                            <span className='text-[#147bf5] '><BsFiletypeDocx size={20} /></span>
                                            <p className='font-semibold '>{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 h-9 invisible'></div>
                                <div className='col-span-5 h-12 border rounded-xl shadow-sm flex items-center justify-start'>
                                    <div className='w-[95%] mx-auto flex items-center justify-start '>
                                        <div className='flex justify-start items-center gap-1'>
                                            <span className='text-[#147bf5] '><BsFiletypeDocx size={20} /></span>
                                            <p className='font-semibold '>{item.title}</p>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))
                    }



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

export default LawLbryTemplates
