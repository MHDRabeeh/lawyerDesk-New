import LawyerCard from "../Components/LawyerCard"
import Wrapper from "../Components/Wrapper"


const FindLawyer = () => {
  const TaskBarData = {
    title: "Find Lawyer",
    path: '/findLawyer',
    icon: ''
  }
  return (
    <Wrapper TaskBarData={TaskBarData} >
      <p className="text-lg font-semibold ml-1">Find Lawyer</p>
      <div className="grid grid-cols-3  gap-3">
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
      </div>
    </Wrapper>
  )
}

export default FindLawyer
