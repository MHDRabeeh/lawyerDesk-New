import React, { useState } from 'react'
import { BsFiletypeDocx } from 'react-icons/bs';

const LawLbryQuestions = () => {
    const [showPage, setShowPage] = useState(true)
    const QuesData = [{title:'Can the pedestrian provide an account of their actions leading up to the accident?'},{title:"Was the pedestrian wearing any reflective or bright clothing that would have made them more visible at the time of the accident?"},{title:'Did the pedestrian look both ways before attempting to cross the road?'},{title:'Were there any nearby crosswalks or pedestrian signals the pedestrian could have used to cross safely?'}]
    const ansData = [{title:'Were you driving within the speed limit at the time of the accident?'},{title:"Were there any distractions, such as a mobile phone or GPS, which could have affected your attention to the road?"},{title:"Were you under the influence of alcohol or  drugs at the time of the accident?"},{title:"Was your vehicle properly maintained, and were all essential components functioning  correctly?"},{title:"Did you apply the brakes immediately upon noticing the pedestrian?"},]
    console.log(ansData);
    return (
        <>
            <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>
                <div className='w-[95%] mx-auto mt-3 flex justify-between  '>
                    <p className=' text-left text-lg font-bold'>Question</p>
                </div>
                <div className='flex gap-4 ml-2 mt-1'>
                    <button onClick={() => setShowPage(true)} className={`p-3  text-sm font-light  rounded-3xl border ${showPage?"bg-[#147bf5] text-white":"text-[#b7b9a7]"}`}>To Answer</button>
                    <button onClick={() => setShowPage(false)} className={`px-6 py-3  font-light text-sm  rounded-3xl border ${showPage?"text-[#b7b9a7]":"bg-[#147bf5] text-white"}`}>To Ask</button>
                </div>
                <div className='grid grid-cols-12   p-3  w-[100%] h-[45vh] gap-3 overflow-auto scrollbar-hide mx-auto  rounded-2xl mt-3 '>


                    {showPage &&
                        ansData.map((item, index) => (
                            
                            < > 
                           
                                <div key={index} className={`col-span-5  border rounded-xl shadow-sm flex items-center justify-start`}>
                                    <div className='w-[95%] mx-auto flex items-center justify-start '>
                                        <div className='flex justify-start items-start gap-1'>
                                            <span>{index+1}.</span>
                                            <p className='font-semibold text-sm'>{item.title}  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 h-9 invisible'></div>
                                <div className='col-span-5 h-12 border rounded-xl shadow-sm flex items-center justify-start'>
                                    <div className='w-[95%] mx-auto flex items-center justify-start '>
                                        <div className='flex justify-start items-start gap-1'>
                                            <span>{index+6}.</span>
                                            <p className='font-semibold text-sm '> {item.title} </p>
                                        </div>
                                    </div>
                                </div>
                                </>
                            
                            
                        ))
                    }
                    {!showPage &&
                        QuesData.map((item, index) => (
                            < >
                                <div key={index} className='col-span-5 h-14 border rounded-xl shadow-sm flex items-center justify-start'>
                                    <div className='w-[95%] mx-auto flex items-center justify-start '>
                                        <div className='flex justify-start items-start gap-1'>
                                            <span>{index+1}.</span>
                                            <p className='font-semibold text-sm'>{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 h-9 invisible'></div>
                                <div className='col-span-5  border rounded-xl shadow-sm flex h-16 items-center justify-start'>
                                    <div className='w-[95%] mx-auto flex items-center justify-start '>
                                        <div className='flex justify-start items-start gap-1'>
                                            <span className=' '>{index+5}.</span>
                                            <p className='font-semibold text-sm  '>   {item.title}  </p>
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

export default LawLbryQuestions
