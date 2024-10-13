import {
  FaPhone,
  FaVideo,
  FaBell,
} from "react-icons/fa";

export default function MedidaFile() {
    return (
        <>
          <div className="hidden xl:block min-w-[350px] w-[350px]">
            <div className="flex flex-col bg-white rounded-lg">
              <div className="flex flex-col gap-[15px] items-center py-[30px] px-[18px] border-b border-gray-100">
                <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden relative">
                  <img
                    className="h-[70px] w-[70px] object-contain"
                    src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                    alt=""
                  />
                </div>
                <span className="text-lg font-semibold text-gray-500">
                  Chat 1
                </span>
                <div className="grid grid-cols-2 gap-[10px] w-full">
                  <span className="border border-gray-200 py-[15px] rounded-lg flex justify-center cursor-pointer">
                    <FaPhone className="text-xl text-blue-400" />
                  </span>
                  <span className="border border-gray-200 py-[15px] rounded-lg flex justify-center cursor-pointer">
                    <FaVideo className="text-xl text-blue-400" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] px-[18px] py-[30px] border-b border-gray-100">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-[10px] items-center text-lg text-gray-400">
                    <FaBell className="" />
                    <span>Notification</span>
                  </div>
                  <span>Turn on/off</span>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] px-[18px] py-[30px] border-b border-gray-100">
                <div className="flex flex-row justify-between items-center text-lg">
                  <span className="font-bold">Files</span>
                  <a href="" className="text-sky-500 text-base">
                    See all
                  </a>
                </div>
                <div className="flex flex-row gap-[10px] overflow-hidden">
                  <img
                    className="h-[100px] w-[100px] object-contain rounded-lg"
                    src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                    alt=""
                  />
                  <img
                    className="h-[100px] w-[100px] object-contain rounded-lg"
                    src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                    alt=""
                  />
                  <img
                    className="h-[100px] w-[100px] object-contain rounded-lg"
                    src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                    alt=""
                  />
                  <img
                    className="h-[100px] w-[100px] object-contain rounded-lg"
                    src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}