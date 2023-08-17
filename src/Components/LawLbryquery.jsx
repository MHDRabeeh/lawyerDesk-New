import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import LawLbryActLaws from './LawLbryActLaws';
import LawLbryJugment from './LawLbryJugment';
import LawLbryLegalDec from './LawLbryLegalDec';
import LawQuery from './LawQuery';
import LawLbryTemplates from './LawLbryTemplates';

const LawLbryquery = (props) => {
    const setPage = props.setPage
    const [count, setCount] = useState(0)
    const showPages = [{ page: "Query", status: false, cmpnt: <LawQuery /> }, { page: "Legal Dec", status: false, cmpnt: <LawLbryLegalDec /> }, { page: "Act & Laws", status: false, cmpnt: <LawLbryActLaws /> }, { page: "Judgment", status: false, cmpnt: <LawLbryJugment /> }, { page: "Templates", status: false ,cmpnt: <LawLbryTemplates />}, { page: "Questions", status: false }, { page: "Support", status: false },]
    const handlePage = (index) => {
        setCount(index)

    }
    let showComponent = showPages[count]
    return (
        <div className=''>
            <div className=''>
                <div className='flex gap-2 mt-6 items-center'><span onClick={() => setPage(pre => false)} className='text-2xl cursor-pointer '><IoIosArrowBack /></span><span className='text-lg font-semibold'>The legal implications of autonomous vehicles and their impact on traffic regulations.</span></div>
                <div className='flex mt-10 items-center '>
                  
                    {
                        showPages.map((item, index) => (
                            <span onClick={() => handlePage(index)} key={index} className={`p-4  cursor-pointer ${index === count ? 'bg-[#147BF5] text-white' : 'bg-white text-[#A7A9B7]'}  shadow  duration-200   font-light text-xs rounded-tr-xl rounded-tl-xl`}>{item.page}</span>
                        ))
                    }
                </div>
                   </div>

                   {showComponent.cmpnt} 
        </div>

    )
}

export default LawLbryquery
