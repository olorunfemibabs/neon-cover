import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start bg-[#19192E]">
      <Sidebar />
      <div className="bg-[#FAFAFA] flex-1 text-[#1A1941] rounded-l-[24px] h-screen max-h-screen">
          {children}
      </div>
    </div>
  );
};

export default Layout;