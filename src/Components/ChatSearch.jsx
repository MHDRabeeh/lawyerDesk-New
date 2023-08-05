import {BsSearch} from "react-icons/bs";

const ChatSearch = () => {
    return (
        <div className="flex mt-5 items-center ml-10  w-[90%] ">
            <span className=" text-xl absolute mt-1 text-[#A7A9B7]  p-3"><BsSearch/></span>
            <input className=" w-[90%] pl-8 placeholder-gray-500 placeholder-opacity-75 rounded-3xl bg-[#f1f5f9] border-[#e2e8f0]" type="text"  placeholder="Search Lawyers" />
        </div>
    )
}

export default ChatSearch
