import React from 'react'
import ModalLaw from './ModalLaw'

const LawLbryLegalDec = () => {
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
                <div className='flex justify-center items-center '> <button className='px-40 py-3 font-semibold rounded-3xl text-white bg-[#407bff]'>Regenerate</button></div>
            </div>
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default LawLbryLegalDec
