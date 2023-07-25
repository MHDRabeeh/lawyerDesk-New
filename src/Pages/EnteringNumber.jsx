import SplashScreen from "../Components/SplashScreen"
import logo from "../assets/logo.svg"
import imageTwo from '../assets/EnterPhoneNumber.jpg'
import UsaFlag from '../assets/USA flag.png'
import sideImage from '../assets/Frame (1).png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"


const EnteringNumber = () => {
    const navigate = useNavigate()

    return (
        <SplashScreen sideImage={sideImage} imageSize="w-[40rem]" divSize="">
            <div className="flex flex-col w-[92%] h-[92%]  mt-8 justify-evenly items-center  ">
                <div>
                    <img className="w-56" src={logo} alt="" />
                </div>
                <div className=" flex flex-col items-center justify-center gap-2">

                    <div>
                        <img src={imageTwo} className="w-36" alt="" />
                    </div>
                    <div><span className="text-[#407BFF] text-xl font-bold">Enter Phone Number</span></div>
                    <div className="flex flex-col justify-center items-center text-slate-400 text-sm"><span>You will receive a 6 digit code </span>
                        <span>to verify next</span>

                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-sm font-[600]">Placeholder</span>
                    <div className="font-[600] text-base tracking-wider rounded-full p-2 w-[20rem] border cursor-pointer
                          border-[#407BFF] flex ">
                        <span className="flex ml-1 "> <img className="w-5 mx-1" src={UsaFlag} alt="" />+1</span>
                        <span className="text-xl text-slate-500"><RiArrowDropDownLine /></span>
                        {/* <button className="tracking-wider">8538783639</button> */}
                        <input className="tracking-wider border-none" type="tel" placeholder="Mobile Number" />
                    </div>
                    </div>
                    <div>
                        <button onClick={()=>navigate('/otpverify')} className="text-white font-[700] text-sm   bg-[#407BFF] rounded-full p-2 w-[20rem]
                         border-2 border-[#407BFF]">send OTP</button>
                    </div>
                </div>
                <div className="font-[500] text-sm"><span>Already Joined?</span> <span
          className="text-[#407BFF]">Sign In here</span></div>

            </div>
        </SplashScreen>
    )
}

export default EnteringNumber
