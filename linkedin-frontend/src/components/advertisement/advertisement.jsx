import React from "react";
import Card from "../card/card";

const Advertisement = () => {
  return (
    <div className="sticky top-18">
      <Card padding={0}>
        <div className="relative h-25">
          <div className="relative h-22 w-full rounded-md">
            <img
              src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png"
              alt="backimage"
              className="object-cover rounded-t-md h-full w-full"
            />
          </div>

          <div className="absolute top-14 left-[40%] z-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
              alt="Profile"
              className="object-cover w-14 h-14 rounded-full border-2 border-white cursor-pointer"
            />
          </div>
        </div>

        <div className="px-5 py-5 mx-auto">
            <div className="text-sm font-semibold text-center">Manmohan</div>
            <div className="text-sm my-3 text-center">Get the latest jobs and industry news</div>
            <div className="text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer">Explore</div>
        </div>
      </Card>
    </div>
  );
};

export default Advertisement;
