import React, { useState } from 'react'
import Wrapper from '../Components/Wrapper'

import OngoingResearches from '../Components/OngoingResearches';
import { AiOutlineBank } from "react-icons/ai";
import LawLbryHistory from '../Components/LawLbryHistory';


const LawLibrary = () => {
    const TaskBarData = {
        title: "Law Library",
        path: '',
        icon: <AiOutlineBank/>,
        parentPath: 'Law Library'
    }
    const [page,setPage]=useState(true)
    const handlePage =(value)=>{
       value?setPage(value):setPage(value)
    }
    return (
        <Wrapper TaskBarData={TaskBarData} >
            <div className='h-14 w-[370px] rounded-xl bg-white mx-auto  flex  justify-center items-center mt-4'>
                <div className=' grid grid-cols-2 w-[95%] gap-1 h-[80%]'>
                    <div onClick={()=>handlePage(true)} className={ `${page?`bg-black`:`bg-white`}   rounded-xl flex items-center justify-center  font-semibold text-[#a7a9b7] text-sm`}><button>On Going Researches</button></div>
                    <div onClick={()=>handlePage(false)} className={ `${page?`bg-white`:`bg-black`} rounded-xl  flex items-center justify-center font-semibold`}><button className='text-[#a7a9b7] text-sm'>History</button></div>
                </div>
            </div>
           
            
            {page?<OngoingResearches/>: <LawLbryHistory/>}
           






        </Wrapper>
    )
}

export default LawLibrary
