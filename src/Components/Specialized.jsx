import React from 'react'
import { MdFamilyRestroom } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";

const Specialized = () => {
    const SpecializedData = [{
        title: "Family Law",
        icon: <MdFamilyRestroom />,
    },
    {
        title: "Corporate Law",
        icon: <FaUserTie />,
    },
    {
        title: "Property Law",
        icon: <BiSolidBuildingHouse />,
    }
    ]
  return (
    <>
       {
                    SpecializedData.map((item, index) => (
                        
                            <button key={index} className="flex items-center text-xs border p-1 font-semibold border-[#147BF5] rounded-3xl text-[#147BF5] "><span className="text-base"> {item.icon}</span>{item.title}</button>
                        
                    ))
                }
    </>
  )
}

export default Specialized
