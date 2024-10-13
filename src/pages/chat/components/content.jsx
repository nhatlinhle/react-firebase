import {
  FaPhone,
  FaVideo,
  FaEllipsisV,
  FaReply,
  FaSmile,
  FaThumbsUp,
  FaImage,
  FaPlusCircle,
  FaArrowLeft,
} from "react-icons/fa";

export default function Content() {
    return (
      <>
        <div className="block">
          <div className="flex flex-col bg-white sm:rounded-lg">
            <div className="flex flex-row justify-between p-[10px] border-b border-gray-200">
              <div className="flex flex-row items-center gap-[8px] cursor-pointer hover:bg-gray-100 rounded-lg p-[8px]">
                <span className="items-center mr-[5px] flex sm:hidden">
                  <FaArrowLeft className="text-xl text-blue-800" />
                </span>
                <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden">
                  <img
                    className="h-[45px] w-[45px] object-contain"
                    src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-base">Chat 1</span>
                  <span className="font-normal text-sm text-gray-400">
                    1 phút trước
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-[20px] items-center">
                <FaPhone className="text-lg text-gray-400 cursor-pointer hover:text-gray-500" />
                <FaVideo className="text-lg text-gray-400 cursor-pointer hover:text-gray-500" />
                <FaEllipsisV className="text-lg text-gray-400 cursor-pointer hover:text-gray-500" />
              </div>
            </div>
            <div className="flex flex-col h-screen pb-[98px] pb-[118px] gap-[10px]">
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
                        <p>
                          View the documentation for further usage examples and
                          how to use icons from other
                        </p>
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
                        <p>
                          View the documentation for further usage examples and
                          how to use icons from other
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Friend comment */}
                <div className="flex flex-row justify-start gap-[10px] items-end">
                  <div className="shadow-sm shadow-gray-500 rounded-lg overflow-hidden min-w-[40px] min-h-[40px] mb-[2px]">
                    <img
                      className="h-[40px] w-[40px] object-contain"
                      src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                      <div className="p-[15px] bg-gray-300 text-black rounded-tl-[30px] rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                        <p>
                          View the documentation for further usage examples and
                          how to use icons from other
                        </p>
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
                        <p>
                          View the documentation for further usage examples and
                          how to use icons from other
                        </p>
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
                    <img
                      className="h-[40px] w-[40px] object-contain"
                      src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                      alt=""
                    />
                  </div>
                  <div className="block">
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] pb-[40px] bg-sky-200 text-gray-400 rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>
                            Tailwind lets you conditionally apply utility
                            classes in different states using variant modifiers.
                            For example, use hover:opacity-100 to only apply the
                            opacity-100 utility on hover.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] mt-[-25px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] bg-gray-300 text-black rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>
                            Utilities for controlling the opacity of an element.
                          </p>
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
                        <p>
                          For a complete list of all available state modifiers,
                          check out the Hover, Focus, & Other States
                          documentation.
                        </p>
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
                    <img
                      className="h-[40px] w-[40px] object-contain"
                      src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg"
                      alt=""
                    />
                  </div>
                  <div className="block">
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] pb-[40px] bg-gray-200 text-gray-400 rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>
                            Tailwind lets you conditionally apply utility
                            classes in different states using variant modifiers.
                            For example, use hover:opacity-100 to only apply the
                            opacity-100 utility on hover.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] mt-[-25px]">
                      <div className="flex flex-row justify-start gap-[10px] group/mesage-chat">
                        <div className="p-[15px] bg-gray-300 text-black rounded-xl max-w-[70%] flex flex-col gap-[10px]">
                          <p>
                            Utilities for controlling the opacity of an element.
                          </p>
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
                  <textarea
                    rows={1}
                    className="block resize-none w-full p-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-0"
                  ></textarea>
                  <span className="flex justify-center items-center h-full absolute right-[10px]">
                    <FaSmile className="text-2xl text-blue-500 cursor-pointer hover:text-blue-900" />
                  </span>
                </div>
                <FaThumbsUp className="text-2xl text-blue-500 mb-[10px] cursor-pointer hover:text-blue-900" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
}