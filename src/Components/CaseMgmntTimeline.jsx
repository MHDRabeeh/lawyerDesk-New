import React from 'react'
import { TbPointFilled } from 'react-icons/tb'
import { timeLine } from '../data'


const CaseMgmntTimeline = () => {
    return (
        <div className='p-3 flex flex-col  items-start  h-[63vh] overflow-y-auto scrollbar-hide '>
            {

                timeLine.map((item, index) => (
                    < div key={item.month} className='flex mt-2 ml-10 gap-1 items-center justify-start  w-[60%]'>
                        <div className='w-16 h-auto '><span className='text-sm mr-2 text-[#a7a9b7]   '>{item.month}</span></div>
                        <div className='border-l-2 border-dashed h-14'></div>
                        <div className='flex items-center relative'>
                            {item.status && <span className='absolute -m-4 text-[#147BF5] z-20'><TbPointFilled size={25} /></span>}
                            <hr className='w-96 z-10' />
                            {item.status &&
                                <div className='h-auto w-60 p-1  text-[0.6rem] absolute ml-5 z-20 flex items-center bg-white shadow-lg border rounded-xl flex-col gap-1'>
                                    <div className={`text-white ${item.titleColor} px-1 rounded-xl`}><p className='font-medium'>{item.title}</p></div>
                                    <p className='text-center'>{item.condent}</p>
                                </div>
                            }


                        </div>
                    </div>

                ))

            }

        </div >
    )
}

export default CaseMgmntTimeline
