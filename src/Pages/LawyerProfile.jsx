import ProfilePhoto from "../Components/ProfilePhoto";
import Wrapper from "../Components/Wrapper"
import { MdGavel } from "react-icons/md";
import avatar from '../assets/avatar2.jpg'
import StarRating from "../Components/StarRating";
import { IoMdPersonAdd } from "react-icons/io"
import { BiSolidMessageRounded } from 'react-icons/bi'
import { BsFileEarmarkTextFill, BsFillStarFill, BsTelephone, BsEye } from 'react-icons/bs'
import { PiShareFatFill } from 'react-icons/pi'
import { FiShoppingBag } from 'react-icons/fi'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import Specialized from "../Components/Specialized";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import Languages from "../Components/Languages";
import { TbPointFilled } from 'react-icons/tb'
import NotableCases from "../Components/NotableCases";
import ClientTestimonials from "../Components/ClientTestimonials";
import ProfessionalAffiliations from "../Components/ProfessionalAffiliations";
import PublicationsMedia from "../Components/PublicationsMedia";



const LawyerProfile = () => {
    const TaskBarData = {
        title: "Manage Connections",
        path: '/lawyerProfile',
        icon: <MdGavel />
    }
    const text1 = "Joseph Cotchett is one of the most respected lawyers in the modern American legal landscape, but he maintains a humble approach to law that places the issues well above paychecks. Cotchett defends anyone he feels needs defense, regardless of their background "
    const ProfileItems = [{ icon: <IoMdPersonAdd />, title: "Connect" }, { icon: <BiSolidMessageRounded />, title: "Message" }, { icon: <BsFileEarmarkTextFill />, title: "Feed" }, { icon: <PiShareFatFill />, title: "Share" },]
    return (
        <Wrapper TaskBarData={TaskBarData}>
            <div className=" overflow-y-auto scrollbar-hide h-[84vh] ">
                <div className="grid grid-cols-3 gap-4">
                    <div className=" h-[75vh] flex flex-col gap-3">
                        <div className="h-[40%] bg-white rounded-3xl">
                            <div className="flex items-center gap-3 p-2">
                                <div>
                                    <ProfilePhoto image={avatar} size={`h-32 w-32`} />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <div><p className="text-2xl font-bold">Joseph cothett</p></div>
                                    <div><p className="text-sm text-[#A7A9B7]">Family,Corporate,Property Expert</p></div>
                                    <div className="flex gap-2 "><StarRating /></div>
                                </div>
                            </div>
                            <div className="w-[95%] flex gap-2 justify-center items-center ml-1">
                                {
                                    ProfileItems.map((item, i) => (
                                        <div key={i} className="flex gap-1 items-center p-2 bg-[#407BFF] rounded-3xl text-white"><span>{item.icon}</span> <span className="text-sm">{item.title}</span></div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="h-[10%] bg-white rounded-3xl flex items-center justify-center ">
                            <div className="flex gap-4 justify-between relative">
                                <div className="flex gap-2"><span classNamFe="text-lg text-[#A7A9B7]">Total case</span><span className="text-[#407BFF] text-2xl"><FiShoppingBag /></span><span className="text-xl font-bold">124</span></div>
                                <div className="flex gap-2"><span className="text-lg text-[#A7A9B7]">Top Rated</span><span className="text-yellow-200 text-2xl"><BsFillStarFill /></span><span className="text-xl font-bold">3.5</span></div>
                                <div className="flex items-center text-[#A7A9B7]"><span className=" "><LiaGreaterThanSolid /></span></div>
                            </div>
                        </div>


                        <div className="h-[50%] bg-white rounded-3xl flex flex-col  justify-evenly ">
                            <p className="p-2 font-bold ">Specialized In</p>
                            <div className="flex gap-2 justify-start ml-4">
                                <Specialized />
                            </div>
                            <div className="w-[95%]  mx-auto border-b">
                                <p className="text-xs leading-5 text-justify">{text1}</p>
                            </div>
                            <div className=" flex justify-around">
                                <div className="flex gap-2"><span className=""><SlLocationPin className="text-[#407BFf]" /></span><span className="text-xs text-[#A7A9B7]">California,United States</span></div>
                                <div className="flex gap-2"><span className=""><BsTelephone className="text-[#407BFf]" /></span><span className="text-xs text-[#A7A9B7]">+91 8394749372</span></div>
                            </div>
                            <div className=" flex gap-2 ml-9"><span className=""><AiOutlineMail className="text-[#407BFf]" /></span><span className="text-xs text-[#A7A9B7]">joseph@lawyerdesk.in</span></div>
                        </div>

                    </div>
                    <div className="h-[75vh] flex flex-col gap-3">
                        <div className="bg-white h-[35%] rounded-3xl grid place-items-center">
                            <div className="w-[90%] mx-auto flex flex-col justify-between h-[80%] ">
                                <p className="font-bold">Bar Admissions(Jurisdictions)</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[#407BFf] text-white p-2 rounded-3xl text-sm font-medium text-center">Bombay High Court</div>
                                    <div className="bg-[#407BFf] text-white p-2 rounded-3xl text-sm font-medium text-center">Up High Court</div>
                                    <div className="bg-[#407BFf] text-white p-2 rounded-3xl text-sm font-medium text-center">Kerala high Court</div>
                                    <div className="bg-[#407BFf] text-white p-2 rounded-3xl text-sm font-medium text-center">Delhi high Court</div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white h-[45%] rounded-3xl flex items-end justify-center">
                            <Languages />
                        </div>
                        <div className="bg-white h-[20%] rounded-3xl">
                            <div className=" ">
                                <div className="p-3 border-b border-slate-100">
                                    <p className=" font-bold">Professional Endorsements</p>
                                </div>
                                <div className="flex mt-"><span className=" text-[#407BFf] text-2xl"><TbPointFilled /></span><span className="text-sm font-bold">Corporate Law</span></div>
                                <div className=" w-[95%] mx-auto flex items-center justify-between"><span className="text-xs text-[#A7A9B7] font-semibold ml-4">10 Endorsements|5 Recommendations</span><span className="text-2xl text-[#407BFf]"><BsEye /></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[75vh] rounded-3xl  ">
                        <div>
                            <p className="p-3 font-bold text-lg">Notable Cases</p>
                        </div>

                        <div className="grid  grid-cols-1 w-[95%] h-[90%] mx-auto gap-3 justify-evenly">
                            <NotableCases />
                        </div>
                    </div>
                </div>
                <div className="flex  gap-4 mt-4" >

                    <div className=" w-1/3 rounded-3xl bg-white h-48 mt-6 p-2">
                        <p className="font-bold text-lg">Education</p>
                        <div>
                            <div className="flex items-center"><span className=" text-[#407BFf] text-3xl"><TbPointFilled /></span> <p className="text-xs font-bold">University of San Francisco school of law</p>

                            </div>
                            <div className="flex flex-col text-[#a7a9b7] text-xs font-semibold ml-7"><p>J.D Law</p></div>
                            <div className="flex flex-col text-[#a7a9b7] text-xs font-semibold ml-7"><p>1960 - 1963</p></div>
                        </div>
                        <div>
                            <div className="flex items-center"><span className=" text-[#407BFf] text-3xl"><TbPointFilled /></span> <p className="text-xs font-bold">California Polytechnic State University-San Luis Obispo</p>

                            </div>
                            <div className="flex flex-col text-[#a7a9b7] text-xs font-semibold ml-7"><p>J.D Law</p></div>
                            <div className="flex flex-col text-[#a7a9b7] text-xs font-semibold ml-7"><p>1960 - 1963</p></div>
                        </div>
                        <div>
                            <div className="flex items-center"><span className=" text-[#407BFf] text-3xl"><TbPointFilled /></span> <p className="text-xs font-bold">California Polytechnic State University-San Luis Obispo</p>

                            </div>

                        </div>

                    </div>
                    <ClientTestimonials />
                </div>

                <ProfessionalAffiliations />
                <PublicationsMedia />
                <p className="font-bold text-lg mt-4">Personal Interests </p>

                <div className="w-56 flex gap-2">
                    <div className="flex gap-1 items-center p-2 bg-[#407BFF] rounded-3xl text-white"> <span className="text-sm">Reading</span></div>
                    <div className="flex gap-1 items-center p-2 bg-[#407BFF] rounded-3xl text-white"> <span className="text-sm">History</span></div>
                    <div className="flex gap-1 items-center p-2 bg-[#407BFF] rounded-3xl text-white"> <span className="text-sm">Travel</span></div>
                    <div className="flex gap-1 items-center p-2 bg-[#407BFF] rounded-3xl text-white"> <span className="text-sm">Sports</span></div>
                </div>

            </div>
        </Wrapper>
    )
}

export default LawyerProfile
