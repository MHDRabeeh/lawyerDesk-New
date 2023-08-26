import React, { useState } from 'react'
import { MdFileCopy } from "react-icons/md";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import rightArrow from '../assets/rightArrow.jpg'
import { RiAttachmentLine } from "react-icons/ri";
import { BsEmojiSmile } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'
import img2 from '../assets/editimage.jpg'
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const CaseMgmntInteract = () => {
    const [options, setOptions]= useState(false)
    const handleOptions = ()=>{
        if(options===true){
            setOptions(false);
        }else{
            setOptions(true);
        }
    }
    return (
        <>
            <div className='p-4 h-[63vh] overflow-y-auto scrollbar-hide'>
                <div className='mt-5'>
                    <div className=" flex justify-end ">
                        <div className=" flex flex-col justify-end">
                            <div className="rounded-tr-xl rounded-bl-xl  rounded-tl-xl  p-3 bg-[#147BF5] mt-2 inline-block">
                                <p className="text-sm text-white">Open the Sharma accident case. </p>
                            </div>


                        </div>
                    </div>
                    < div >
                        <div className="rounded-tr-xl rounded-br-xl max-w-sm rounded-tl-xl  p-3 bg-[#f1f5f9] mt-2 inline-block">
                            <p className="text-sm"> Case "Sharma Accident" is now open. <b>How can I assist you with this case? </b></p>
                        </div>
                    </div>
                    <div className=" flex justify-end ">
                        <div className=" flex flex-col justify-end">
                            <div className="rounded-tr-xl rounded-bl-xl  rounded-tl-xl  p-3 bg-[#147BF5] mt-2 inline-block">
                                <p className="text-sm text-white">Give me the summary of the case </p>
                            </div>


                        </div>
                    </div>

                </div>

                <div className=' w-[42%] h-auto '>
                    <div className='px-3 py-1 w-24 mb-1 flex justify-center items-center text-sm text-white rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#147BF5]'>
                        <p>Summary</p>
                    </div>
                    <div className=' text-xs  p-2 shadow-md rounded-xl w-[100%]'>
                        <div>
                            <div><span className='font-bold'>Case:</span><span>Sharma Accident</span></div>
                            <div><span className='font-bold'>Date of Accident:</span><span>15th June 2023</span></div>
                            <div><span className='font-bold'>Location:</span><span>Sharma MG Road, Bengaluru</span></div>
                            <div><span className='font-bold'>Involved Parties:</span><span>Rakesh Sharma (Plaintiff) & Rajan Verma (Defendant)</span></div>
                            <div><span className='font-bold'>Status:</span><span> Pre Trial Investigation</span></div>
                        </div>

                    </div>
                </div>
                <p className='w-[42%]  text-sm mt-3 text-[#147BF5] font-medium'> Would you like to view or download any specific document?</p>
                <div className='mt-3  place-content-center gap-2  w-[59%] grid grid-cols-4 '>
                    <div className='text-[#707070]  flex flex-col justify-center items-center  '><span><MdFileCopy size={25} /></span> <span><span className='text-xs text-center'>Accident  Report</span></span></div>
                    <div className='text-[#707070] flex flex-col justify-center items-center '><span><MdFileCopy size={25} /></span> <span><span className='text-xs '>Medical Report of Rakesh Sharma</span></span></div>
                    <div className='text-[#707070] flex flex-col justify-center items-center '><span><MdFileCopy size={25} /></span> <span><span className='text-xs '>Witness Statements <br />(2 files)</span></span></div>
                    <div className='flex justify-center items-center w-7'><img className='h-5' src={rightArrow} alt="" /></div>
                </div>
                <div className=" flex justify-end ">
                    <div className=" flex flex-col justify-end">
                        <div className="rounded-tr-xl rounded-bl-xl max-w-xs rounded-tl-xl  p-3 bg-[#147BF5] mt-2 inline-block">
                            <p className="text-sm text-white">I want to upload the recent medical bill of Rakesh Sharma. </p>
                        </div>
                    </div>
                </div>

                <div className=' w-[42%] '>
                    <div className=' p-5 shadow-md rounded-3xl w-[100%]'>
                        <div>
                            <p className='text-sm  font-semibold'>Upload document: </p>
                        </div>
                        <div className='w-[95%]'>
                            <p className='text-xs mt-2'>Please attach the medical bill file you'd like to upload.</p>
                        </div>
                        <Upload {...props}>
                            <Button className='border rounded-3xl mt-2 px-4 text-[#147bf5] font-medium border-[#147BF5]' icon={''}>Browse Files</Button>
                        </Upload>

                    </div>
                </div>
                <div className=' w-[42%]   mt-3 '>
                    <div className=' p-5 shadow-md rounded-3xl w-[100%]'>
                        <div>
                            <p className='text-sm  font-semibold'>Yes, there is a court date scheduled for the "Sharma Accident" case.  </p>
                        </div>
                        <div className='w-[95%]'>
                            <p className='text-xs mt-2'>Please attach the medical bill file you'd like to upload.</p>
                        </div>
                        <div className=' flex gap-3 items-center justify-center w-[90%] mt-3'>
                            <button className='bg-[#147bf5] px-10 p-1 text-white text-center rounded-3xl'>Yes</button>
                            <button className=' px-10 p-1 text-[#147bf5] border border-[#147bf5] text-center rounded-3xl'>No</button>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-end ">
                    <div className=" flex flex-col justify-end">
                        <div className="rounded-tr-xl rounded-bl-xl max-w-xs rounded-tl-xl  p-3 bg-[#147BF5] mt-2 inline-block">
                            <p className="text-sm text-white">Add a task to prepare for the cross examination of witness </p>
                        </div>
                    </div>
                </div>

                <div className=' w-[42%]   mt-3 '>
                    <div className=' p-5 shadow-md rounded-3xl w-[100%]'>
                        <div>
                            <p className='text-sm  font-semibold'>Would you like to assign this task to someone or set a reminder? </p>
                        </div>
                        <div className='w-[95%]'>
                            <p className='text-xs mt-2'>Select the action in the options provided down below</p>
                        </div>

                    </div>
                </div>

                <div className='w-[42%] h-9 mt-4 flex border-l-4 border-red-400'>
                    <p className='text-xs ml-2'>   <span className='text-xs font-bold'>New Document Added : </span>Medical bill <br /> A Document with “xyz.txt” has been added to this case</p>
                </div>
                <div className='w-[42%] h-9 mt-4 flex border-l-4 border-red-400'>
                    <p className='text-xs ml-2'>   <span className='text-xs font-bold'>New TimeLine Added: </span> Court Date 30th September 2023  <br /> Venue: Bengaluru City Civil Court, Courtroom 5</p>
                </div>
                <div className='w-[42%] h-9 mt-4 flex border-l-4 border-green-400'>
                    <p className='text-xs ml-2'>   <span className='text-xs font-bold'>New Task Added:  </span> Prepare for cross-examination of the <br />  witness  due date of 25th September 2023</p>
                </div>
                <div className='w-[42%] h-9 mt-4 flex border-l-4 border-yellow-200'>
                    <p className='text-xs ml-2'>   <span className='text-xs font-bold'>New person Added:   </span>  Plaintiff contacts <br />  New persons are added to your People list</p>
                </div>


                <div className=' w-[42%]   mt-3 '>
                    <div className=' p-5 shadow-md rounded-3xl w-[100%]'>
                        <div>
                            <p className='text-sm  font-semibold'>Who are the primary contacts for this case? </p>
                        </div>
                        <div className='w-[95%]'>
                            <p className='text-xs mt-2'>Select the action in the options provided down below</p>
                        </div>

                    </div>
                </div>

                <div className=' flex  flex-col gap-2 mt-2  '>
                    <div className='flex gap-2'>
                        <div className='border flex justify-center text-xs items-center px-2 py-1 rounded-3xl font-medium bg-[#147bf5] text-white gap-1'><span>A.</span> <span>Plaintiff contacts</span></div>
                        <div className=' border  border-[#a7a9b7] text-[#a7a9b7] flex justify-center text-xs px-2 py-1 rounded-3xl font-medium'><span>B.</span> <span> Defendant contacts</span></div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='  border  border-[#a7a9b7] text-[#a7a9b7] flex justify-center text-xs px-2 py-1 rounded-3xl font-medium'><span>C.</span> <span>Witnesses</span></div>
                        <div className=' border  border-[#a7a9b7] text-[#a7a9b7] flex justify-center text-xs px-2 py-1 rounded-3xl font-medium'><span>D.</span> <span>All the Above</span> </div>
                    </div>

                </div>

                <div className='w-[42%] h-60 flex flex-col justify-evenly items-center shadow-md rounded-3xl p-3  mt-4'>
                    <div className='flex justify-start w-[100%]'> <p className=' font-semibold mt-1'>Contact Details</p></div>

                    <div className='w-[98%] mx-auto'>
                        <div><span className='text-xs font-semibold'>. Plaintiff Contacts: </span><span className='font-light text-xs leading-4'>Rakesh Sharma - Phone: +91-XXXXX-XXXXX, Email: rakesh@email.com </span></div>
                        <div><span className='text-xs font-semibold'>. Defendant Contacts </span><span className='font-light text-xs'>Rajan Verma - Phone: +91-XXXXX-XXXXX, Email: rajan@email.com </span></div>
                    </div>
                    <div className='ml-3'>

                        <p className='text-xs font-semibold'>Witnesses: </p>
                        <div><span className='font-light text-xs leading-4'> 1. Amita Desai - Phone: +91-XXXXX-XXXXX  </span></div>
                        <div><span className='font-light text-xs leading-4'>2. Rajeev Kapoor - Phone: +91-XXXXX-XXXXX</span></div>

                    </div>
                </div>
                <div className='mt-5 w-[40%] p-3'>
                    <p className='text-sm  font-semibold'>Who are the primary contacts for this case? </p>
                    <p className='text-xs mt-2'>Select the action in the options provided down below</p>
                </div>
                <div className='h-20 w-[45%]  flex justify-center items-end gap-1'>
                    <textarea value=' Enter a prompt here...' className='h-[100%] w-[100%] text-sm bg-[#EFEFEF] border-white rounded-xl'>


                    </textarea>
                    <div className='flex justify-center items-center ' >
                        <span className=" text-[#147BF5] p-2 bg-slate-50 rounded-full "><RiSendPlane2Fill className="text-2xl" /></span>
                    </div>

                </div>
                <div className=" flex justify-end ">
                    <div className=" flex flex-col justify-end">
                        <div className="rounded-tr-xl rounded-bl-xl max-w-xs rounded-tl-xl  p-3 bg-[#147BF5] mt-2 inline-block">
                            <p className="text-sm text-white">That's all for now. Thanks. </p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-end ">
                    <div className=" flex flex-col justify-end">
                        <div className="rounded-tr-xl rounded-bl-xl max-w-xs rounded-tl-xl  p-3  mt-2 inline-block">
                            <p className="text-sm text-white">That's all for now. Thanks. </p>
                        </div>
                    </div>
                </div>
            
                    
                

            </div>
            <div className="w-[97%] h-10  mx-auto flex justify-around relative items-center mb-3 ">
                <span className="absolute top-3 left-5  "><RiAttachmentLine className="text-slate-400 text-lg" /></span>
                <input type="text" className="w-[90%] h-10 ml-2 bg-slate-50 rounded-3xl placeholder-gray-400 px-8 placeholder-opacity-75 border-slate-100 " placeholder="write your message " />
                <span className="absolute right-[4.5rem] top-2 text-xl text-slate-400"><BsEmojiSmile /></span>
                <span className=" text-[#147BF5] p-2 bg-slate-50 rounded-full "><RiSendPlane2Fill className="text-2xl" /></span>
                <div onClick={handleOptions} className='absolute -mt-28 mr-[-45rem]'><img className='w-12 h-12 rounded-full' src={img2} alt="" /></div>
            </div>
        </>

    )
}

export default CaseMgmntInteract
