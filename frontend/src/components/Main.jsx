import React from "react";
import { assets } from "../assets/assets";
import { LuChevronDown } from "react-icons/lu";
import MyLocationMap from "./MyLocation";
import Chatbot from "../chatbot/Chatbot";
import { useAppContext } from "../context/AppContext";
const Main = () => {
  const { user, setUser } = useAppContext();

  return (
    <div className="flex-1 h-screen bg-[#aebdd835] text-gray-800 relative">
      <div className="container py-6 px-4 flex justify-between">
        <div className="left-side w-full">
          <h1 className="text-3xl mb-4 capitalize tracking-wide">
            Welcome {user.name}
          </h1>
          {/* <div className="bg-white h-screen w-[70%] rounded-lg"></div> */}
        </div>
        <div className="right-side  w-[68%] shrink-0">
          {/* Increased width for right side */}
          <div className="right-top mb-5 flex items-center justify-end gap-6 ml-auto">
            <input
              type="text"
              placeholder="Search any products..."
              className="rounded-full p-2 w-[50%]"
            />
            <div className="flex items-center gap-2">
              <img
                src={assets.user}
                alt=""
                className="w-12 rounded-full bg-blue-500 border-[1px] border-gray-300"
              />
              <LuChevronDown />
            </div>
          </div>
          <div className="p-2 bg-white h-[80vh] rounded-md shadow-md relative overflow-hidden">
            <MyLocationMap />
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Main;

{
  /* <div className="bg-white p-2 rounded-md w-[60%] h-[50%] overflow-hidden">
              <MyLocationMap />
            </div> */
}
