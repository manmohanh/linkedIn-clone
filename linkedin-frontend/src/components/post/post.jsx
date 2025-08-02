import React, { useState } from "react";
import Card from "../card/card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";

const Post = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const handleSendComment = (e) => {
    e.preventDefault();
  };

  const desc = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        placeat! Error, quis nobis. Deserunt harum, omnis temporibus doloribus
        rerum, mollitia dicta quia vel repudiandae nam dignissimos excepturi
        facilis sequi necessitatibus vero voluptatum dolore consequuntur! Eaque,
        quae quia dolor illo sit blanditiis obcaecati officiis cumque! Veniam
        est perferendis perspiciatis amet enim adipisci similique corporis.`;

  return (
    <Card padding={0}>
      <div className="flex gap-3 p-4">
        <div className="w-12 h-12 rounded-4xl">
          <img
            className="object-cover rounded-4xl w-12 h-12 border-2 border-white cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
            alt="Profile"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">Dummy User</div>
          <div className="text-sm text-gray-500">SDE-II Eng. @Amazon</div>
        </div>
      </div>

      <div className="text-md p-4 my-3 whitespace-pre-line flex-grow">
        {seeMore ? desc : desc.slice(0, 120)}
        {"... "}
        <span
          onClick={() => setSeeMore((prev) => !prev)}
          className="text-gray-500 cursor-pointer"
        >
          {seeMore ? "See Less" : "See More"}
        </span>
      </div>

      <div className="w-[100%] h-[300px]">
        <img
          src="https://marketplace.canva.com/MADarW99hmA/1/thumbnail_large-1/canva-beautiful-landscape-MADarW99hmA.jpg"
          alt="desc-image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="my-2 p-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon
            sx={{
              color: "blue",
              fontSize: 12,
            }}
          />{" "}
          <div className="text-sm text-gray-600">1 Likes</div>
        </div>

        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-600">3 Comments</div>
        </div>
      </div>

      <div className="flex p-1">
        <div className="w-[33%] justify-center flex gap-1 items-center borde-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
          <ThumbUpIcon
            sx={{
              color: "blue",
              fontSize: 22,
            }}
          />{" "}
          <span>Like</span>
        </div>

        <div onClick={()=>setComment((prev)=>!prev)} className="w-[33%] justify-center flex gap-1 items-center borde-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
          <CommentIcon
            sx={{
              fontSize: 22,
            }}
          />{" "}
          <span>Comment</span>
        </div>

        <div className="w-[33%] justify-center flex gap-1 items-center borde-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
          <SendIcon
            sx={{
              fontSize: 22,
            }}
          />{" "}
          <span>Share</span>
        </div>
      </div>

      {/* comment */}
      {comment && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
              alt="Profile"
              className="object-cover rounded-full w-12 h-12 border-2 border-white cursor-pointer"
            />

            <form className="flex gap-2 w-full" onSubmit={handleSendComment}>
              <input
                placeholder="Add a comment..."
                type="text"
                className="w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100"
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-800 text-white rounded-3xl px-3"
              >
                Send
              </button>
            </form>
          </div>

          <div className="w-full p-4">
            <div className="my-4">
              <div className="flex gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
                  alt="Profile"
                  className="object-cover rounded-full w-10 h-10 border-2 border-white cursor-pointer"
                />

                <div className="cursor-pointer">
                  <div className="text-md">Dummy name</div>
                  <div className="text-sm text-gray-500">@Amazon SDE-II</div>
                </div>
              </div>

              <div className="px-11 my-2">Hi this is awesome</div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
