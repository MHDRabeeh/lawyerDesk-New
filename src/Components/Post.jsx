import React, { useState } from 'react'
import ProfilePhoto from './ProfilePhoto'
import image1 from '../assets/photo_2023-08-14_15-29-13.jpg'
import image2 from '../assets/Profile_1.jpg'
import post from '../assets/post.jpg'
import { AiTwotoneHeart } from "react-icons/ai";
import { FaRegComment } from 'react-icons/fa'
import { BiShareAlt } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'


const Post = () => {
  const [showComment, setShowComment] = useState(false)
  const handleComment = (status) => {
    if (status === true) {
      setShowComment(false)
    } else {
      setShowComment(true)
    }

  }

  const text = "The new amendment to IT Rules 2022 prima facie lacks the necessary safeguards, the Bombay High Court observed on Monday in the plea filed by stand "
  return (
    <>
      <div className='w-[100%] min-h-[61vh] bg-white rounded-3xl mt-4 p-2'>
        <div className='flex gap-2 items-center '>
          <div><ProfilePhoto image={image1} /></div>
          <div className='flex flex-col'>
            <span className='text-sm font-bold'>Sharmeen Hakim</span>
            <span className='text-xs font-light'>Today at 8:22 AM</span>
          </div>
        </div>

        <div>
          <p className='mt-1 text-sm  '>{text}<span className='font-semibold text-[#407bff] underline cursor-pointer '>see more</span></p>
        </div>

        <div className='flex gap-2 mt-2'>
          {
            ["#Attempt to murder", "#Trafic Law", "#Criminal Law", "#Criminal Law"].map((item, i) => (
              <span key={i} className='rounded-3xl border border-[#407bff] text-[#407bff] px-1 text-xs  '>{item}</span>
            ))
          }

        </div>

        <div className='mt-2'>
          <img className='w-[100%] h-60' src={post} alt="" />
        </div>
        <div className='w-[95%] mx-auto flex justify-around text-[#A7A9B7] mt-2'>

          <div className='flex flex-col text-xs  justify-center items-center font-light'><span className='text-red-500'><AiTwotoneHeart size={30} /></span> <span>25k + like</span></div>
          <div onClick={() => handleComment(showComment)} className='flex cursor-pointer flex-col text-xs  justify-center items-center font-light'> <span><FaRegComment size={30} /></span><span>Comments</span></div>
          <div className='flex flex-col text-xs  justify-center items-center font-light'><span><BiShareAlt size={30} /></span><span>Share</span></div>
          <div className='flex flex-col text-xs  justify-center items-center font-light'> <span><BsBookmark size={30} /></span><span>Save</span></div>
        </div>
          

          {/* Comment  */}

        {showComment &&
          <>
            <hr class="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className='w-[100%] h-[30vh] bg-white'>
              <p className='text-[#a7a9b7] m-2 font-medium'>2600 comments</p>
              <div className='flex justify-start items-start gap-1'>
                <div>
                  <ProfilePhoto image={image2} size={`w-7`} />
                </div>
                < div >
                  <div className="rounded-tr-xl rounded-br-xl  rounded-bl-xl  p-3 bg-[#f1f5f9] mt-2 inline-block">
                    <p className='text-xs font-bold'>Harish Salve</p>
                    <p className="text-sm">Very informative one....👍</p>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex gap-5 text-xs font-light text-[#A7A9B9]'>
                      <span>Like</span><span>Reply</span>
                    </div>
                    <p className="text-xs text-[#A7A9B9] mt-1">4:20 AM</p>
                  </div>

                </div>
              </div>
              <div className='flex justify-start items-start gap-1'>
                <div>
                  <ProfilePhoto image={image2} size={`w-7`} />
                </div>
                < div >
                  <div className="rounded-tr-xl rounded-br-xl  rounded-bl-xl  p-3 bg-[#f1f5f9] mt-2 inline-block">
                    <p className='text-xs font-bold'>Harish Salve</p>
                    <p className="text-sm">Very informative one....👍</p>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex gap-5 text-xs font-light text-[#A7A9B9]'>
                      <span>Like</span><span>Reply</span>
                    </div>
                    <p className="text-xs text-[#A7A9B9] mt-1">4:20 AM</p>
                  </div>

                </div>
              </div>
            </div>
            
          </>}


      </div>

    </>
  )
}

export default Post
