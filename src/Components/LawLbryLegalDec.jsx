import React, { useState } from 'react'
import ModalLaw from './ModalLaw'

const LawLbryLegalDec = () => {
    const [modal ,setModal] = useState(false)
    const textThree = `The defendant seeks legal representation to defend their actions and mitigate any potential liability, maintaining that they exercised reasonable care under the circumstances and that the pedestrian's sudden appearance contributed to the unfortunate incident.`
    const textTwo = ' Unexpectedly, a pedestrian emerged from the bushes adjacent to the road, presenting the defendant with little time to react. Despite their immediate attempt to brake, the defendant was unable to prevent the collision, resulting in severe injuries for the pedestrian. The defendant asserts that they took prompt action to call for an ambulance in order to provide medical assistance to the injured individual.'
    const textOne = `In the legal case involving a vehicular accident, the driver, hereby referred to as the defendant, contends that they exercised due care and caution while operating their motor vehicle on a desolate urban road in Delhi. The incident occurred at approximately 10:00 PM, with the defendant maintaining a speed below the mandated limit.`
    return (
        <>
            <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>

                <div className='w-[90%] mx-auto mt-5'>

                    <h1 className='font-bold '>Legal Description</h1>
                    <p className=' text-left text-sm mt-3'>{textOne}</p>
                    <p className=' text-left text-sm mt-3'>{textTwo}</p>
                    <p className=' text-left text-sm mt-4'>{textThree}</p>

                </div>
                <div className=' text-xs flex justify-end w-[98%] text-[#a7a9b7]'><span>29/2000</span></div>
            </div>
            <div className='flex justify-between  items-center  mt-3 w-[95%] mx-3 '>
                <div className='font-bold '>Not what you were expecting?</div>
                <div onClick={()=>setModal(true)} className='flex justify-center items-center '> <button className='px-40 py-3 font-semibold rounded-3xl text-white bg-[#407bff]'>Regenerate</button></div>
            </div>
           {modal&&<ModalLaw setModal={setModal}/>} 
           



        </>
    )
}

export default LawLbryLegalDec
