import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper px-7 py-10">
      <div className="heading flex bg-teal-300 gap- items-center justify-between rounded-lg">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item bg-blue-400 p-2 w-full text-white font-semibold border-r  text-center cursor-pointer ${
              currentTabIndex === index ? "active bg-sky-400" : ""
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content flex items-center justify-center py-12 bg-zinc-300 text-black text-lg font-medium rounded-md">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
