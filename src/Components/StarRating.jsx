import React from 'react'
import { BsStarFill } from "react-icons/bs";

function StarRating() {
    return (
        <>
            {
                [0, 1, 2].map((item,index) => (
                    <span key={index} className="flex gap-1 p-1 justify-center items-center text-white rounded-full bg-[#147BF5]"><BsStarFill /></span>
                ))
            }

        </>
    )
}

export default StarRating
