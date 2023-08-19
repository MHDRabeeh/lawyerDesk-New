import React, { useState } from 'react'
import slidImg from "../assets/SlidesOne.jpg"
import slideImg2 from '../assets/student-experience-cambridge-law.jpg'
import slideimg3 from '../assets/explore_carousel_jul.png'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
const Carousal = () => {
    const slides = [{ url: slidImg }, { url: slideImg2 }, { url: slideimg3 }]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFristSlide = currentIndex === 0;
        const newIndex = isFristSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
    console.log(slides[0].url, "this is url");
    return (
        <div className=' h-[40vh] w-full m-auto py-4 px-1 relative group'>
            <div onClick={prevSlide} style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            {/* left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={15} />
            </div>

            {/* right Arrow */}
            <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={15} />
            </div>
            <div className='flex top-4 justify-center py-1'>
            {slides.map((slide,slideIndex)=>(
              <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-xl cursor-pointer text-black/30'><RxDotFilled/></div>
            ))}
            
            </div>
        </div>

    )
}

export default Carousal
