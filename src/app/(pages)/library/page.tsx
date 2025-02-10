"use client";
import { ChatHeader } from "@/components/chat/chat-heaer";
import { Input } from "@/components/common/input";
import { useState } from "react";

const page = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="h-full  bg-white rounded-xl shadow flex flex-col font-sf">
      <ChatHeader title="Library">
        <Input
          placeholder="Search"
          className="max-w-32 h-7 rounded-md p-2   text-sm font-normal m-0 focus:border-tranparent"
        />
      </ChatHeader>
      <div className="max-h-full overflow-y-auto  grid grid-cols-1 lg:grid-cols-2 px-8 py-4 gap-6">
        <div className=" h-[170px] rounded-xl shadow p-4 bg-baseColor flex flex-col justify-between">
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-lg bg-secondary "></div>
            <div className="ml-4">
              <div className="font-bold text-xl">Title Block</div>
              <div className="text-sm font-normal font-roboto text-black opacity-50">
                Short Description
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-semibold">
              <div>Publisher: Boom uitgever</div>
              <div>Location: NL</div>
            </div>
            <div className="text-sm font-semibold">
              <div>Price</div>
              <div className="flex gap-2   items-center">
                <div>Opt-in/Opt-out</div>
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`relative w-[30] h-[15px]  rounded-full flex items-center  transition-all duration-300 p-[2px] ${isActive ? "bg-blue-500" : "bg-gray-500"}`}
                >
                  <div
                    className={`w-[12px] h-[12px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${isActive ? "translate-x-[15px]" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[170px] rounded-xl shadow p-4 bg-baseColor flex flex-col justify-between">
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-lg bg-secondary "></div>
            <div className="ml-4">
              <div className="font-bold text-xl">Title Block</div>
              <div className="text-sm font-normal font-roboto text-black opacity-50">
                Short Description
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-semibold">
              <div>Publisher: Boom uitgever</div>
              <div>Location: NL</div>
            </div>
            <div className="text-sm font-semibold">
              <div>Price</div>
              <div className="flex gap-2   items-center">
                <div>Opt-in/Opt-out</div>
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`relative w-[30] h-[15px]  rounded-full flex items-center  transition-all duration-300 p-[2px] ${isActive ? "bg-blue-500" : "bg-gray-500"}`}
                >
                  <div
                    className={`w-[12px] h-[12px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${isActive ? "translate-x-[15px]" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[170px] rounded-xl shadow p-4 bg-baseColor flex flex-col justify-between">
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-lg bg-secondary "></div>
            <div className="ml-4">
              <div className="font-bold text-xl">Title Block</div>
              <div className="text-sm font-normal font-roboto text-black opacity-50">
                Short Description
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-semibold">
              <div>Publisher: Boom uitgever</div>
              <div>Location: NL</div>
            </div>
            <div className="text-sm font-semibold">
              <div>Price</div>
              <div className="flex gap-2   items-center">
                <div>Opt-in/Opt-out</div>
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`relative w-[30] h-[15px]  rounded-full flex items-center  transition-all duration-300 p-[2px] ${isActive ? "bg-blue-500" : "bg-gray-500"}`}
                >
                  <div
                    className={`w-[12px] h-[12px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${isActive ? "translate-x-[15px]" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
