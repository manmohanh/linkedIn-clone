import React from "react";
import Card from "../card/card";

const ProfileCard = () => {
  return (
    <Card padding={0}>
      <div className="relative h-25">
        <div className="relative h-22 w-full rounded-md">
          <img
            src="https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background_53876-173299.jpg?semt=ais_hybrid&w=740"
            alt="backimage"
            className="object-cover rounded-t-md h-full w-full"
          />
        </div>

        <div className="absolute top-14 left-6 z-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
            alt="Profile"
            className="object-cover w-16 h-16 rounded-full border-2 border-white cursor-pointer"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="text-xl">Manmohan Hansda</div>
        <div className="text-sm my-1">@Amazon software eng</div>
        <div className="text-sm my-1">Delhi, India</div>
        <div className="text-sm my-1">Amazon</div>
      </div>
    </Card>
  );
};

export default ProfileCard;
