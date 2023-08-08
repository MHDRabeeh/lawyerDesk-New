import React from 'react'
import Wrapper from '../Components/Wrapper'

import OngoingResearches from '../Components/OngoingResearches';
import { AiOutlineBank } from "react-icons/ai";


const LawLibrary = () => {
    const TaskBarData = {
        title: "Law Library",
        path: '',
        icon: <AiOutlineBank/>,
        parentPath: 'Law Library'
    }
    return (
        <Wrapper TaskBarData={TaskBarData} >
            <div className='h-14 w-[370px] rounded-xl bg-white mx-auto  flex  justify-center items-center mt-4'>
                <div className=' grid grid-cols-2 w-[95%] gap-1 h-[80%]'>
                    <div className=' bg-black rounded-xl  flex items-center justify-center  font-semibold text-[#a7a9b7] text-sm'><button>On Going Researches</button></div>
                    <div className='bg-white rounded-xl  flex items-center justify-center hover:bg-slate-100'><button className='text-[#a7a9b7] text-sm'>History</button></div>
                </div>
            </div>
           
            <OngoingResearches/>






        </Wrapper>
    )
}

export default LawLibrary
