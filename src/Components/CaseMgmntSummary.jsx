import React from 'react'
import { FaScaleBalanced } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from 'react-icons/md'
import CaseMagntNavigation from './CaseMagntNavigation';
import { RiAttachmentLine } from "react-icons/ri";
import { BsEmojiSmile } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'
import {IoIosArrowUp} from 'react-icons/io'

const CaseMgmntSummary = ({setShowCasePage}) => {
    
    const text = [
        {
            icon:true,
            title:"Case Summary Title",
            text: "I have added Concerns raised about breach of contract; John expresses concerns about a potentials breach of contract by ABC Corp to the Case Timeline for the date 01/01/2022"
        },
        {
            title:"Flip Card Title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus dolor lectus, at congue nisi auctor ut. Nullam vestibulum urna non arcu placerat, nec rutrum est vestibulum. Quisque nec risus eget mauris aliquam rhoncus eget ut ligula. Duis a tincidunt libero. Curabitur varius cursus elit in tincidunt. Curabitur in arcu lorem. Sed sed ullamcorper sapien, sed auctor dui. Nam tincidunt neque ut purus malesuada, ac consectetur nunc semper."
        },
        {
            title:"Flip Card Title",
            text:"I have added Concerns raised about breach of contract; John expresses concerns about a potentials breach of contract by ABC Corp to the Case Timeline for the date 01/01/2022"
        }
        
    ]
    return (
        <div className='p-3'>
            <div className='flex gap-3 item-center '>
                <div onClick={()=>setShowCasePage(false)}><span><MdKeyboardArrowLeft size={30} /></span></div>
                <div className='p-2 bg-[#147BF5] rounded-3xl text-white'> <span><FaScaleBalanced size={25} /></span></div>
                <div className='text-2xl font-bold mt-1'><p>Case No. 1</p></div>
            </div>

            <CaseMagntNavigation />

            <div className='mt-3 flex flex-col gap-2 h-[61vh] '>
                {
                    text.map((item,index) => (
                        <div key={index} className='w-[98%] mx-auto  border border-gray-200 shadow rounded-3xl h-auto p-3 '>
                            <div className='w-[100%] flex justify-between items-center text-xl font-semibold'><p>{item.title}</p> {item.icon && <span><IoIosArrowUp/></span>}</div>
                            <p className='text-left text-sm '>{item.text}</p>
                        </div>

                    ))
                }

            </div>
            <div className="w-[97%] h-10 mt-1 mx-auto flex justify-around relative items-center">
                <span className="absolute top-3 left-5  "><RiAttachmentLine className="text-slate-400 text-lg" /></span>
                <input type="text" className="w-[90%] h-10 ml-2 bg-slate-50 rounded-3xl placeholder-gray-400 px-8 placeholder-opacity-75 border-slate-100 " placeholder="write your message " />
                <span className="absolute right-[4.5rem] top-2 text-xl text-slate-400"><BsEmojiSmile /></span>
                <span className=" text-[#147BF5] p-2 bg-slate-50 rounded-full "><RiSendPlane2Fill className="text-2xl" /></span>
            </div>
        </div>
    )
}

export default CaseMgmntSummary
