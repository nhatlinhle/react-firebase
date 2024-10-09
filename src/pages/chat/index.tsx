
import "./style.css";

export default function Chat() {
  const times = Array.from({ length: 10 });

  return (
    <>
      <div className="grid grid-cols-12 py-[20px] text-sm h-screen overflow-hidden">
        <div className="col-span-3 px-[20px]">
          <div className="flex flex-col gap-[15px]">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-0" placeholder="Search..." required />
            </div>
            <div className="flex flex-col overflow-y-auto h-screen pr-[5px]" id="style-4">
              <a href="" className="py-[15px] pl-[15px] pr-[25px] flex flex-row gap-[15px] rounded-lg bg-gray-100">
                <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden">
                  <img className="h-[60px] w-[60px]" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
                </div>
                <div className="flex flex-1 flex-col gap-[5px] pt-[5px]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="font-bold text-base">Roronoa Zoro</span>
                    <span className="text-gray-500 text-xs">2m</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-gray-500">Hello my frient</span>
                    <span className="bg-red-500 text-xs p-[2px] flex justify-center items-center text-white rounded-full w-[20px] h-[20px]">2</span>
                  </div>
                </div>
              </a>
              {times.map((_, index) => (
                <a href="" className="py-[15px] pl-[15px] pr-[25px] flex flex-row gap-[15px] rounded-lg hover:bg-gray-100">
                  <div className="shadow-md shadow-gray-500 rounded-lg overflow-hidden">
                    <img className="h-[60px] w-[60px]" src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" alt="" />
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
        <div className="col-span-6">
          <div className="flex flex-col gap-[15px]">
            
          </div>
        </div>
        <div className="col-span-3 bg-red-500"></div>
      </div>
    </>
  )
}