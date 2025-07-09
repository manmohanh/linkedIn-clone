import React, { useState } from "react";
import "./navbar2.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
      <div className="flex gap-2 items-center">
        <div>
          <img
            src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"
            alt="LinkedInLogo"
            className="w-8 h-8"
          />
        </div>
        <div className="relative">
          <input
            className="searchInput w-70 bg-gray-100 rounded-sm h-10 px-4"
            placeholder="Search"
          />

          {dropdown && (
            <div className="absolute w-88 left-0 bg-gray-200">
              <div className="flex gap-2 mb-1 items-center cursor-pointer">
                <div></div>
                <div>Manmohan</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden gap-10 md:flex">
        <div className="flex flex-col items-center cursor-pointer">
          <HomeIcon
            sx={{
              color: location.pathname === "/feed" ? "black" : "gray",
            }}
          />
          <div
            className={`text-sm text-gray-500 ${
              location.pathname === "/feed" ? "border-b-3" : ""
            }`}
          >
            Home
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <GroupIcon
            sx={{
              color: location.pathname === "/my-network" ? "black" : "gray",
            }}
          />
          <div className="text-sm text-gray-500">My Network</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <WorkIcon
            sx={{
              color: location.pathname === "/resume" ? "black" : "gray",
            }}
          />
          <div className="text-sm text-gray-500">Resume</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <SpeakerNotesIcon
            sx={{
              color: location.pathname === "/message" ? "black" : "gray",
            }}
          />
          <div className="text-sm text-gray-500">Messages</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <div>
            <NotificationsIcon
              sx={{
                color: location.pathname === "/notification" ? "black" : "gray",
              }}
            />
            <span className="p-1 rounded-full text-sm bg-red-700 text-white">1</span>
          </div>
          <div className="text-sm text-gray-500">Notifications</div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" alt="Profile" className="object-cover h-7 w-7 rounded-full" />
          </div>
          <div className="text-sm text-gray-500">Me</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
