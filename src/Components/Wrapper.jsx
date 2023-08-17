import React from 'react'
import Navbar from './Navbar'
import TaskBar from './TaskBar'

const Wrapper = ({children,TaskBarData}) => {
  
   
  return (
    <>
    <div className='w-full h-screen bg-[#F3F5F9] flex gap-5 '>
            <Navbar  />
            <div className='w-[79vw]'>
                <TaskBar TaskBarData={TaskBarData} />
                <div className='w-[100%] mt-2  h-[84%]'>
                        {children}
                </div>
            </div>



        </div>
    </>
  )
}

export default Wrapper
