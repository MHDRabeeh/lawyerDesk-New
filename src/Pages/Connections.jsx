
import ConxRequests from "../Components/ConxRequests"
import ConxSeggestions from "../Components/ConxSeggestions"
import Wrapper from "../Components/Wrapper"
import { FaUsers } from "react-icons/fa";
const Connections = () => {
    const TaskBarData = {
        title:"Manage Connections",
        path :'/connections',
        icon:<FaUsers/>
    }
    return (
        <>
            <Wrapper TaskBarData={TaskBarData}>
                <div className="p-2 ">
                    <span className="text-xl font-bold">Connection Requests</span>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                                <>
                                    <ConxRequests key={index} />
                                </>
                            ))
                        }
                    </div>
                    <div className="p-1 text-xl font-bold mt-1"> Connection Suggestions</div>
                    <div className="snapp grid grid-flow-col gap-3 overflow-auto">
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                                <>
                                    <ConxSeggestions key={index} />
                                </>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Connections
