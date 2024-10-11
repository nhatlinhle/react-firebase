
import "./style.css";
import { FaPhone, FaVideo, FaEllipsisV, FaReply, FaSmile, FaThumbsUp, FaImage, FaPlusCircle, FaBell } from "react-icons/fa";

export default function Chat() {
  const times = Array.from({ length: 30 });

  return (
    <>
      <div className="flex flex-row p-[20px] text-sm h-screen overflow-hidden gap-[20px] bg-gray-100">
        <div className="hidden md:block min-w-[350px] w-[350px]">
          <div className="flex flex-col gap-[15px]">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-[14px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-0" placeholder="Search..." required />
            </div>
            <div className="flex flex-col overflow-y-auto h-screen pr-[5px] pb-[100px] style-scrool-chat">
              <a href="" className="py-[15px] pl-[15px] pr-[25px] flex flex-row gap-[15px] rounded-lg bg-sky-600 text-white">
                <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden">
                  <img className="h-[55px] w-[55px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                </div>
                <div className="flex flex-1 flex-col gap-[5px] pt-[5px]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="font-bold text-base">Roronoa Zoro</span>
                    <span className="text-xs">2m</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="">Hello my frient</span>
                    <span className="bg-red-500 text-xs p-[2px] flex justify-center items-center text-white rounded-full w-[20px] h-[20px]">2</span>
                  </div>
                </div>
              </a>
              {times.map((_, index) => (
                <a key={index} href="" className="py-[15px] pl-[15px] pr-[25px] flex flex-row gap-[15px] rounded-lg hover:bg-sky-100">
                  <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden">
                    <img className="h-[55px] w-[55px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[5px] pt-[5px]">
                    <div className="flex flex-row justify-between items-center">
                      <span className="font-bold text-base">Roronoa Zoro { index }</span>
                      <span className="text-gray-500 text-xs">2m</span>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <span className="text-gray-500">Hello my frient</span>
                      <span className="bg-red-500 text-xs p-[2px] flex justify-center items-center text-white rounded-full w-[20px] h-[20px]">2</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="block">
          <div className="flex flex-col bg-white rounded-lg">
            <div className="flex flex-row justify-between p-[10px] border-b border-gray-200">
              <div className="flex flex-row items-center gap-[8px] cursor-pointer hover:bg-gray-100 rounded-lg p-[8px]">
                <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden">
                  <img className="h-[45px] w-[45px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-base">Chat 1</span>
                  <span className="font-normal text-sm text-gray-400">Hoạt động 1 phú trước</span>
                </div>
              </div>
              <div className="flex flex-row gap-[20px] items-center">
                <FaPhone className="text-lg text-gray-400 cursor-pointer hover:text-gray-500" />
                <FaVideo className="text-lg text-gray-400 cursor-pointer hover:text-gray-500" />
                <FaEllipsisV className="text-lg text-gray-400 cursor-pointer hover:text-gray-500" />
              </div>
            </div>
            <div className="flex flex-col h-screen pb-[118px] gap-[10px]">
              <div className="flex-1 flex overflow-y-auto pt-[10px] flex-col-reverse px-[18px] gap-[10px] style-scrool-chat">
                {/* My comment */}
                <div className="block">
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row justify-end gap-[10px] group/mesage-chat">
                      <div className="flex flex-row gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                        <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                      </div>
                      <div className="p-[15px] bg-sky-600 text-white rounded-tr-[30px] rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>View the documentation for further usage examples and how to use icons from other</p>
                        <div className="flex justify-end">
                          <span className="flex h-[20px] w-[20px] bg-gray-800 rounded-full justify-center items-center">
                            <FaThumbsUp className="text-xs text-yellow-500" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end gap-[10px] group/mesage-chat">
                      <div className="flex flex-row gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                        <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                      </div>
                      <div className="p-[15px] bg-sky-600 text-white rounded-br-[30px] rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>View the documentation for further usage examples and how to use icons from other</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Friend comment */}
                <div className="flex flex-row justify-start gap-[10px] items-end">
                  <div className="shadow-sm shadow-gray-500 rounded-lg overflow-hidden min-w-[40px] min-h-[40px] mb-[2px]">
                    <img className="h-[40px] w-[40px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                      <div className="p-[15px] bg-gray-300 text-black rounded-tl-[30px] rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>View the documentation for further usage examples and how to use icons from other</p>
                        <div className="flex justify-end">
                          <span className="flex h-[20px] w-[20px] bg-gray-800 rounded-full justify-center items-center">
                            <FaThumbsUp className="text-xs text-yellow-500" />
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                        <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                      <div className="p-[15px] bg-gray-300 text-black rounded-bl-[30px] rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>View the documentation for further usage examples and how to use icons from other</p>
                      </div>
                      <div className="flex flex-row-reverse gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                        <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* My reply */}
                <div className="block">
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row justify-end gap-[10px] group/mesage-chat">
                      <div className="p-[15px] pb-[40px] bg-gray-200 text-gray-400 rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>Hello</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] mt-[-25px]">
                    <div className="flex flex-row justify-end gap-[10px] group/mesage-chat">
                      <div className="flex flex-row gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                        <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                      </div>
                      <div className="p-[15px] bg-sky-600 text-white rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>View the documentation</p>
                        <div className="flex justify-end">
                          <span className="flex h-[20px] w-[20px] bg-gray-800 rounded-full justify-center items-center">
                            <FaThumbsUp className="text-xs text-yellow-500" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Friend reply */}
                <div className="flex flex-row justify-start gap-[10px] items-end">
                  <div className="shadow-sm shadow-gray-500 rounded-lg overflow-hidden min-w-[40px] min-h-[40px] mb-[2px]">
                    <img className="h-[40px] w-[40px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                  </div>
                  <div className="block">
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] pb-[40px] bg-sky-200 text-gray-400 rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:opacity-100 to only apply the opacity-100 utility on hover.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] mt-[-25px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] bg-gray-300 text-black rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>Utilities for controlling the opacity of an element.</p>
                        </div>
                        <div className="flex flex-row-reverse gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                          <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                          <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                          <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* I answer myself */}
                <div className="block">
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row justify-end gap-[10px] group/mesage-chat">
                      <div className="p-[15px] pb-[40px] bg-sky-200 text-gray-400 rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>For a complete list of all available state modifiers, check out the Hover, Focus, & Other States documentation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px] mt-[-25px]">
                    <div className="flex flex-row justify-end gap-[10px] group/mesage-chat">
                      <div className="flex flex-row gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                        <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                      </div>
                      <div className="p-[15px] bg-sky-600 text-white rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>Breakpoints and media queries</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* You answer you */}
                <div className="flex flex-row justify-start gap-[10px] items-end">
                  <div className="shadow-sm shadow-gray-500 rounded-lg overflow-hidden min-w-[40px] min-h-[40px] mb-[2px]">
                    <img className="h-[40px] w-[40px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                  </div>
                  <div className="block">
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] pb-[40px] bg-gray-200 text-gray-400 rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:opacity-100 to only apply the opacity-100 utility on hover.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] mt-[-25px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] bg-gray-300 text-black rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>Utilities for controlling the opacity of an element.</p>
                        </div>
                        <div className="flex flex-row-reverse gap-[15px] left-[-100px] top-0 items-center min-h-full opacity-0 group-hover/mesage-chat:opacity-100">
                          <FaEllipsisV className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                          <FaReply className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                          <FaSmile className="text-base text-gray-400 cursor-pointer hover:text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[15px] items-end pl-[18px] pr-[15px]">
                <FaImage className="text-2xl text-blue-500 mb-[10px] cursor-pointer hover:text-blue-900" />
                <FaPlusCircle className="text-2xl text-blue-500 mb-[10px] cursor-pointer hover:text-blue-900" />
                <div className="relative flex flex-1">
                  <textarea rows={1} className="block resize-none w-full p-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-0">
                  </textarea>
                  <span className="flex justify-center items-center h-full absolute right-[10px]">
                    <FaSmile className="text-2xl text-blue-500 cursor-pointer hover:text-blue-900" />
                  </span>
                </div>
                <FaThumbsUp className="text-2xl text-blue-500 mb-[10px] cursor-pointer hover:text-blue-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block min-w-[350px] w-[350px]">
          <div className="flex flex-col bg-white rounded-lg">
            <div className="flex flex-col gap-[15px] items-center p-[30px] border-b border-gray-100">
              <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden relative">
                <img className="h-[70px] w-[70px] object-contain" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
              </div>
              <span className="text-lg font-semibold text-gray-500">Chat 1</span>
              <div className="grid grid-cols-2 gap-[10px] w-full">
                <span className="border border-gray-200 py-[15px] rounded-lg flex justify-center cursor-pointer">
                  <FaPhone className="text-xl text-blue-400" />
                </span>
                <span className="border border-gray-200 py-[15px] rounded-lg flex justify-center cursor-pointer">
                  <FaPhone className="text-xl text-blue-400" />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] p-[30px] border-b border-gray-100">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-[10px] items-center text-lg text-gray-400">
                  <FaBell className=""/>
                  <span>Notification</span>
                </div>
                <span>Icon handle</span>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] p-[30px] border-b border-gray-100">
              <div className="flex flex-row justify-between items-center text-lg">
                <span className="font-bold">Files</span>
                <a href="" className="text-sky-500 text-base">See all</a>
              </div>
              <div className="flex flex-row gap-[10px] overflow-hidden">
                <img className="h-[100px] w-[100px] object-contain rounded-lg" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                <img className="h-[100px] w-[100px] object-contain rounded-lg" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                <img className="h-[100px] w-[100px] object-contain rounded-lg" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                <img className="h-[100px] w-[100px] object-contain rounded-lg" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}