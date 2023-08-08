import React from 'react'
import logo from '../assets/logo.svg'
import { RiHome5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { AiOutlineBank } from "react-icons/ai";
import { FaScaleBalanced } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";




const Navbar = () => {
    const Menu = [
        { icon: <RiHome5Fill />, title: 'Home' ,path:"/Home" },
        { icon: <AiOutlineBank />, title: 'Law Library',path:'/lawLibrary' },
        { icon: <FaScaleBalanced />, title: 'Case Management' },
        { icon: <BsSearch />, title: 'SA Serch' },
        { icon: <FiSettings />, title: 'Settings' },
    ]

    const  navigate= useNavigate()
     return (
        <div className='w-[17vw] h-[97vh] bg-white ml-5 mt-4 rounded-3xl box-border flex flex-col  '>

            <div className='mt-5'>
                <img src={logo} className='w-[60%] mx-auto mt-5' />
            </div>

            <div className='h-[70%] mt-16 '>
                {
                    Menu.map((item,index)=>(
                        <div key={index} className=' w-[94.5%] mx-auto rounded-xl box-border hover:bg-[#60a5fa] mb-3 border-l-4 border-white ml-3 cursor-pointer duration-150'>
                        <ul className='  '>
                            <li onClick={()=>{navigate(item.path)}} className='flex p-3 gap-2 items-center text-[#A7A9B7] hover:text-white'><span className='text-2xl'>{item.icon}</span>
                                <span className='text-base font-[500]'>{item.title}</span></li>
                        </ul>
    
                    </div>
                    ))
                }
                

            </div>


        </div>
    )
}

export default Navbar
