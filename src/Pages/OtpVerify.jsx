import React from 'react'
import SplashScreen from '../Components/SplashScreen'
import logo from '../assets/logo.svg'
import EnterOtp from '../assets/EnterOtp.jpg'
import sideImage from '../assets/justice-goddess 1.png'


const OtpVerify = () => {
  const   renterInput= ()=>{
    return  <input maxLength={1} className='border w-10 h-10 rounded-full text-center text-xl ' type="text" />
  }
  return (
    <SplashScreen sideImage={sideImage}  imageSize="w-[40rem] h-[40rem]" divSize="">
      <div className='flex flex-col w-[92%] h-[92%]  mt-8 justify-evenly items-center '>
        <div className="">
          <img className="w-56" src={logo} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <div>
            <img src={EnterOtp} className="w-36" alt="" />
          </div>
          <div className='text-[#407BFF] text-xl font-bold
           '><span>Enter OTP</span></div>


          <div className='flex flex-col items-center justify-center text-slate-400 text-sm border-gray-300'>
            <span>A 6 digit otp has send to </span>
            <span>+91 7510839378 </span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 justify-center'>
          <div className='flex gap-2'>
            {renterInput()}
            {renterInput()}
            {renterInput()}
            {renterInput()}
            {renterInput()}
            {renterInput()}
          </div>
          <div>
            <button onClick={() => navigate('#')} className="text-white font-[700] text-sm   bg-[#407BFF] rounded-full p-2 w-[20rem]
                         border-2 border-[#407BFF]">Verify OTP</button>
          </div>
        </div>
        <div className=" text-sm font-[700]"><span>Don't receive otp?</span> <span
          className="text-[#407BFF]">Resend OTP</span></div>

      </div>

    </SplashScreen>
  )
}

export default OtpVerify
