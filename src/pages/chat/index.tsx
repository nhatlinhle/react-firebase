import "./style.css";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import MediaFile from "./components/mediaFile"

export default function Chat() {
  return (
    <>
      <div className="flex flex-row p-0 sm:p-[20px] text-sm h-screen overflow-hidden gap-[20px] bg-gray-100">
        <Sidebar />
        <Content />
        <MediaFile />
      </div>
    </>
  );
}
