import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import boxes from "../assets/boxes.png";
import { useAppContext } from "../context/AppContext";
const Sidebar = () => {
  const [expended, setExpended] = useState(true);
  const { user } = useAppContext();

  const handleSidebar = () => {
    setExpended(!expended);
  };

  return (
    <div
      className={`bg-white border-r-[.6px] border-gray-800 ${
        expended ? "w-60" : "w-28"
      } transition-all duration-300 ease-linear h-screen rounded-r-lg text-gray-800`}
    >
      <div className="flex flex-col my-2">
        <div className="logo py-2 mx-auto">
          <div className="flex items-start gap-2">
            <img src={assets.logo} alt="" className="w-10" />
            {expended && (
              <p className="text-[25px] font-semibold text-black tracking-tight">
                Trackify
              </p>
            )}
          </div>
        </div>
        {/* top part---- */}
        <div className="top flex items-center justify-between px-2 mt-8 tracking-tight">
          <img
            src={assets.user}
            alt=""
            className="w-12 rounded-full bg-blue-500"
          />
          {expended && (
            <div className=" flex flex-col items-center">
              <p className=" capitalize font-[400] text-[18px] text-black">
                {user?.name || "User "}
              </p>
              <p className="text-gray-500 italic text-sm font-light tracking-tighter">
                {user?.email || "User@gmail.com"}
              </p>
            </div>
          )}

          {expended ? (
            <assets.LuPanelRightOpen
              onClick={handleSidebar}
              className="shrink-0 text-[25px] cursor-pointer"
            />
          ) : (
            <assets.LuPanelRightClose
              onClick={handleSidebar}
              className="shrink-0 text-[25px] cursor-pointer"
            />
          )}
        </div>
        <hr className="w-[80%] mx-auto border-b-[.6px] border-blue-500/30 mt-4 mb-3" />
        {/* Middle part ---- */}
        <div className="middle mt-3 pl-4 pr-2 flex flex-col gap-2">
          {/* 1----------------------------*/}
          <div className="cursor-pointer pl-2 relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full px-1 py-1.5 lg:py-2 rounded-xl transition-all  ${
                  isActive
                    ? "text-white bg-blue-500"
                    : "hover:text-gray-900 hover:bg-stone-100"
                }`
              }
            >
              <div className="">
                <assets.LuLayoutDashboard
                  className={`${
                    expended
                      ? "text-[1.2rem] lg:text-[1.5rem]"
                      : "text-[1.4rem] lg:text-[1.7rem]"
                  }`}
                />
                {/* Tooltip */}
                {!expended && (
                  <p className="absolute z-50 left-[calc(100%+18px)] lg:left-[calc(100%+22px)] top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-primary text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm whitespace-nowrap">
                    Dashboard
                  </p>
                )}
              </div>
              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                Dashboard
              </p>
            </NavLink>
          </div>
          {/* 2 --------------------*/}
          <div className="cursor-pointer pl-2 relative group">
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full px-1 py-1.5 lg:py-2 rounded-xl transition-all  ${
                  isActive
                    ? "text-white bg-blue-500"
                    : "hover:text-gray-900 hover:bg-stone-100"
                }`
              }
            >
              <div className="">
                <assets.BsBoxes
                  className={`${
                    expended
                      ? "text-[1.2rem] lg:text-[1.5rem]"
                      : "text-[1.4rem] lg:text-[1.7rem]"
                  }`}
                />
                {/* Tooltip */}
                {!expended && (
                  <p className="absolute z-50 left-[calc(100%+18px)] lg:left-[calc(100%+22px)] top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-primary text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm whitespace-nowrap">
                    Inventory
                  </p>
                )}
              </div>
              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                Inventory
              </p>
            </NavLink>
          </div>
          {/* 3-------------------- */}
          <div className="cursor-pointer pl-2 relative group">
            <NavLink
              to="/shipment"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full px-1 py-1.5 lg:py-2 rounded-xl transition-all  ${
                  isActive
                    ? "text-white bg-blue-500"
                    : "hover:text-gray-900 hover:bg-stone-100"
                }`
              }
            >
              <div className="">
                <assets.LuTruck
                  className={`${
                    expended
                      ? "text-[1.2rem] lg:text-[1.5rem]"
                      : "text-[1.4rem] lg:text-[1.7rem]"
                  }`}
                />
                {/* Tooltip */}
                {!expended && (
                  <p className="absolute z-50 left-[calc(100%+18px)] lg:left-[calc(100%+22px)] top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-primary text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm whitespace-nowrap">
                    Shipment
                  </p>
                )}
              </div>
              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                Shipment
              </p>
            </NavLink>
          </div>
          {/* 4--------------- */}
          <div className="cursor-pointer pl-2 relative group">
            <NavLink
              to="/recentlogs"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full px-1 py-1.5 lg:py-2 rounded-xl transition-all  ${
                  isActive
                    ? "text-white bg-blue-500"
                    : "hover:text-gray-900 hover:bg-stone-100"
                }`
              }
            >
              <div className="">
                <assets.LuSwatchBook
                  className={`${
                    expended
                      ? "text-[1.2rem] lg:text-[1.5rem]"
                      : "text-[1.4rem] lg:text-[1.7rem]"
                  }`}
                />
                {/* Tooltip */}
                {!expended && (
                  <p className="absolute z-50 left-[calc(100%+18px)] lg:left-[calc(100%+22px)] top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-primary text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm whitespace-nowrap">
                    RecentLogs
                  </p>
                )}
              </div>
              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                Recent Logs
              </p>
            </NavLink>
          </div>
          {/* AD-------------------- */}
          {expended ? (
            <div className="ad py-4 w-full bg-gradient-to-br from-blue-300 via-blue-300 to-blue-600 rounded-xl shadow-md  px-2 mb-3">
              <p className="capitalize text-[18px] text-white font-medium tracking-tight leading-6">
                Automate Everything with AI
              </p>
              <img src={boxes} alt="" className="w-10 mx-auto  mb-3" />
              <div className="bg-white px-2 py-1 rounded-full flex justify-end w-fit ml-auto">
                <p className=" text-black font-medium">Subscribe Now</p>
              </div>
            </div>
          ) : (
            <div className="bg-white h-20 w-full"></div>
          )}

          {/* 5------------------ */}
          <div className="cursor-pointer pl-2 relative group">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full px-1 py-1.5 lg:py-2 rounded-xl transition-all  ${
                  isActive
                    ? "text-white bg-blue-500"
                    : "hover:text-gray-900 hover:bg-stone-100"
                }`
              }
            >
              <div className="">
                <assets.LuUser
                  className={`${
                    expended
                      ? "text-[1.2rem] lg:text-[1.5rem]"
                      : "text-[1.4rem] lg:text-[1.7rem]"
                  }`}
                />
                {/* Tooltip */}
                {!expended && (
                  <p className="absolute z-50 left-[calc(100%+18px)] lg:left-[calc(100%+22px)] top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-primary text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm whitespace-nowrap">
                    UserProfile
                  </p>
                )}
              </div>
              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                User Profile
              </p>
            </NavLink>
          </div>
          {/* 6------------------------ */}
          <div className="cursor-pointer pl-2 mb-2">
            <div className="flex items-center gap-2 hover:translate-x-2 hover:scale-105 transition-all ">
              <assets.RiChatAiLine
                className={`${
                  expended
                    ? "text-[1.2rem] lg:text-[1.5rem]"
                    : "text-[1.4rem] lg:text-[1.7rem]"
                }`}
              />

              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                Ask AI
              </p>
            </div>
          </div>
          {/* 7---------------- */}
          <div className="cursor-pointer pl-2 ">
            <div className="flex items-center gap-2 hover:translate-x-2 hover:scale-105 transition-all ">
              <assets.LuSettings2
                className={`${
                  expended
                    ? "text-[1.2rem] lg:text-[1.5rem]"
                    : "text-[1.4rem] lg:text-[1.7rem]"
                }`}
              />

              <p
                className={`text-sm lg:text-[0.95rem] transition-all  ${
                  expended
                    ? "max-w-full opacity-100"
                    : "opacity-0 max-w-0 overflow-hidden"
                }`}
              >
                Settings
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[80%] mx-auto border-b-[.6px] border-blue-500/30 mt-4" />
        <div className="bottom flex items-center justify-center flex-grow mt-3">
          <img src={assets.logo} alt="" className="w-8" />
          {expended && (
            <p className="text-[20px] font-semibold text-black tracking-tight">
              Trackify
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
