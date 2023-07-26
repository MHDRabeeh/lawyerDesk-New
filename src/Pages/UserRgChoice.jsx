import SplashScreen from "../Components/SplashScreen"
import logo from '../assets/logo.svg'
import sideImage from '../assets/Frame.png'
import { useNavigate } from "react-router-dom"


const UserRgChoice = () => {
  const  navigate = useNavigate() 
  return (
    <SplashScreen sideImage={sideImage} imageSize="w-[44rem] h-[20rem]" divSize=" w-[40rem] h-[24rem]" >
      <div className="flex flex-col w-[92%] h-[92%]  mt-8 justify-evenly items-center ">
        <div className="">
          <img className="w-56" src={logo} alt=""/>
        </div>
        <div className=" flex flex-col items-center text-3xl font-[700]"><span
         className="text-[#407BFF]">Join as us</span>Public, Lawyer or Student<span></span></div>
        <div className=" flex flex-col gap-4 items-center justify-center">
          <div>
            <button className="text-white font-[700] text-sm   bg-[#407BFF] rounded-full p-2 w-[20rem] 
             border-2 border-[#407BFF]" onClick={()=>navigate('/enteringNumber')}>Register as Public</button>
          </div>
          <div>
            <button className="text-[#407BFF] font-[800] text-sm hover:bg-[#407BFF] hover:text-white
             rounded-full p-2 w-[20rem] border-2 duration-500
             border-[#407BFF]" onClick={()=>navigate('/enteringNumber')}>Register as Lawyer</button>
          </div>
          <div>
            <button className="text-[#407BFF] font-[800] text-sm  rounded-full p-2 w-[20rem] border-2
            hover:bg-[#407BFF] hover:text-white duration-500
            border-[#407BFF]" onClick={()=>navigate('/enteringNumber')}>Register as Student</button>
          </div>
        </div>
        <div className="font-[500] text-sm"><span>Already Joined?</span> <span
          className="text-[#407BFF]">Sign In here</span></div>

      </div>

    </SplashScreen>
  )
}

export default UserRgChoice
