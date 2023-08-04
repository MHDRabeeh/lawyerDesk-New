import LawyerCard from "../Components/LawyerCard"
import Wrapper from "../Components/Wrapper"
import { FaUserTie } from "react-icons/fa";


const FindLawyer = () => {
  const TaskBarData = {
    title: "Find Lawyer",
    path: '/findLawyer',
    icon: <FaUserTie/>
  }
  return (
    <Wrapper TaskBarData={TaskBarData} >
      <p className="text-lg font-semibold ml-1">Find Lawyer</p>
      <div className="grid grid-cols-3  gap-3 h-[79.9vh]  overflow-y-auto scrollbar-hide">
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
      </div>
    </Wrapper>
  )
}

export default FindLawyer
