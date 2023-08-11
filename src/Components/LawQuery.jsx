import React from 'react'



const LawQuery = () => {
    const text = "I was driving my car at around 10:00 PM on a deserted road within Delhi city limits, maintaining a speed below the prescribed limit. Suddenly, a man appeared from the bushes, leaving me with insufficient time to react. Despite applying the brakes immediately, I was unable to prevent my vehicle from striking him. The collision resulted in severe injuries for the pedestrian. I promptly called for an ambulance to assist him."
    return (
        <>

            <div className='w-[97%] h-[54vh]  flex flex-col justify-between bg-white  -mt-0 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl'>

                <div className='w-[90%] mx-auto mt-5'>
                    <p className=' text-left text-sm'>{text}</p>
                </div>
                <div className=' text-xs flex justify-end w-[98%] text-[#a7a9b7]'><span>29/2000</span></div>
            </div>
            <div className='flex justify-center items-center mt-3 '> <button className='px-40 py-3 font-semibold rounded-3xl text-white bg-[#407bff]'>Generate</button></div>
           


        </>
    )
}

export default LawQuery
