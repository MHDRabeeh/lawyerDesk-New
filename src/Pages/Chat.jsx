import React from 'react'
import Wrapper from '../Components/Wrapper'
import ChatSearch from '../Components/ChatSearch'
import ChatCard from '../Components/ChatCard'
import {BiSolidMessageDetail} from "react-icons/bi";

const Chat = () => {
    const TaskBarData = {
        title:"Chat",
        path :'/chat',
        icon:<BiSolidMessageDetail/>
    }
  return (
  <Wrapper TaskBarData={TaskBarData}>
    <div className='grid grid-cols-8 gap-3'>
        <div className='col-span-3 bg-white h-[84vh] rounded-3xl '>
            <ChatSearch/>
            <div className='mt-4 h-[85%] w-[100%] flex flex-col gap-3 items-center overflow-auto scrollbar-hide '>
                {
                    [1,2,3,3,3,3].map((item,i)=>(
                        <ChatCard key={i}/>
                    ))
                }
                    
            </div>
        </div>

        <div className='col-span-5 bg-white h-48 rounded-3xl'></div>
    </div>
  </Wrapper>
  )
}

export default Chat
