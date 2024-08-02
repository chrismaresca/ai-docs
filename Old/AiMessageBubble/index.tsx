import React from "react";
import Image from "next/image";
import OldMiniTextDocument from "../OldMiniTextDocument";

const MessageBubble = () => {
  return (
    <div className="pb-1">
      <div className="flex items-start justify-start mb-2 rounded-tr-2xl  py-4 px-2">
        <Image width={32} height={32} className="h-7 w-7 rounded-full aspect-square object-cover border border-slate-300" src={"/mckinsey.svg"} alt="User profile" />

        <div className="text-left text-sm flex-1">
          <div className="ml-3">hey do this hey do this hey do this hey do this hey do this hey do this hey do this hey do this</div>
        </div>
      </div>
      <div className="w-[97%] mx-auto">
        <OldMiniTextDocument type="current" />
      </div>
    </div>
  );
};

export default MessageBubble;
