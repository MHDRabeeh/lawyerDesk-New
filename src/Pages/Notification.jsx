import React from 'react'
import Wrapper from '../Components/Wrapper'
import { IoNotificationsSharp } from "react-icons/io5";



import NotificationCard from '../Components/NotificationCard';
import FollowRequest from '../Components/FollowRequest';
import OtherNotification from '../Components/OtherNotification';

const Notification = () => {
    const TaskBarData = {
        title: "Notification",
        path: '/notifications',
        icon: <IoNotificationsSharp />
    }
    return (
        <Wrapper TaskBarData={TaskBarData}>
            <div className='flex flex-col '>
                <div className='grid grid-cols-3 w-[100%] gap-2'>
                    {
                        ['Recent', "Today", 'Yesterday'].map((item, i) => (
                            <div key={i} className='flex text-[#a7a9b7] text-lg font-bold'><p>{item}</p></div>
                        ))
                    }
                </div>

                <div className='w-[100%] grid grid-cols-3 gap-5 mt-3 rounded-3xl'>
                    {/* divide 3 notification  div  col using map  */}
                    {
                        [0, 1, 2].map((item, i) => (
                            <div key={i} className=' rounded-3xl'>
                                {item==0 && 
                                    [1,2,3].map((element)=>(
                                        <NotificationCard />
                                        

                                    ))
                                   
                                }
                                    {item==0 && [1].map((element)=><FollowRequest/>) }
                                    {item==0 && [1].map((element)=><OtherNotification/>) }
                                 {item==1 && 
                                    [1,2,3,4,5,6,1,].map((item)=>(
                                        
                                        <NotificationCard />
                                    ))
                                }
                                   {item==2 && [0,].map((element)=><OtherNotification />) }
                                   {item==2 && [0,2,4].map((element)=><NotificationCard />) }
                                   {item==2 && [0,].map((element)=><FollowRequest />) }
                               
                               
                            </div>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default Notification
