import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import avatar from '../assets/Profile_1.jpg'
import avatar1 from '../assets/avatar.jpg'

const ClientTestimonials = () => {
    return (
        <>
            <div className=" w-2/3 rounded-3xl   h-52">
                <p className="font-bold text-lg">Client Testimonials</p>
                <div className=" h-48  w-[52vw] rounded-3xl overflow-y-auto scrollbar-hide snapp grid grid-flow-col gap-3 ">
                    {
                        [, 1, 2, 3, 4, 3].map(() => (
                            <>
                                <div className="w-56 h-[99%] bg-white rounded-2xl flex flex-col items-center justify-center gap-3 box-border snap-center">
                                    <div className="w-[100%] flex justify-center">
                                        <ProfilePhoto size={`w-16 h-16`}  image={avatar} />
                                    </div>
                                    <div><p className='font-[700] text-sm'>John Jonne </p></div>
                                    <div className='text-xs w-[95%] mx-auto text-justify  text-[#A7A9B7] '>Great experience ove my attorney overall having Matt Cadwell as my attorneyGreat experience overallrall </div>
                                </div>
                                <div className="w-56 h-[99%] bg-white rounded-2xl flex flex-col items-center justify-center gap-3 box-border snap-center">
                                    <div className="w-[100%] flex justify-center">
                                        <ProfilePhoto size={`w-16 h-16`} image={avatar1} />
                                    </div>
                                    <div><p className='font-[700] text-sm'>Jonh </p></div>
                                    <div className='text-xs w-[95%] mx-auto text-justify text-[#A7A9B7] '>Great experience ove my attorney overall having Matt Cadwell as my attorneyGreat experience overallrall  </div>
                                </div>
                            </>
                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default ClientTestimonials
