import React, { useState } from "react";
import Webdevelopment from "./TabsContent/ui/Webdevelopment";
import MobileAppDevelopment from "./TabsContent/ui/MobileAppDevelopment";
import BlockChainDevlopment from "./TabsContent/ui/BlockChainDevlopment";
const Tabs = () => {
  const [activeTab, setAciveTab] = useState(0);
  const tabContent = [
    <MobileAppDevelopment />,
    <Webdevelopment />,
    <BlockChainDevlopment />,
  ];
  const tabs = [
    "Mobile App Development",
    "Web Development",
    "BlockChain Development",
  ]; // 0,1,2
  const handleActiveTab = (e: any) => {
    setAciveTab(e); 
    console.log("clicked active tab", e);
  };
  return (
    <>
      <div className="flex items-center justify-center gap-6 container-wrapper-row">
        {tabs.map((tab, index) => (
          <div key={index}>
            <button
              className="border-black rounded-lg"
              onClick={() => handleActiveTab(index)}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>
      <div className="">{tabContent[activeTab]}</div>
    </>
  );
};

export default Tabs;
