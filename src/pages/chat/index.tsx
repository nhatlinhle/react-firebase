import "./style.css";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import MediaFile from "./components/mediaFile";
import { useState } from "react";

export default function Chat() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = (visible: boolean) => {
    setShowSidebar(visible);
  };

  return (
    <>
      <div className="flex flex-row p-0 sm:p-[20px] text-sm h-screen overflow-hidden gap-[20px] bg-gray-100">
        <Sidebar showSidebar={showSidebar} toggleSidebar={() => toggleSidebar(false)} />
        <Content
          toggleSidebar={() => toggleSidebar(true)}
          showSidebar={showSidebar}
        />
        <MediaFile />
      </div>
    </>
  );
}

