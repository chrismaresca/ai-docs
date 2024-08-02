import React from "react";
import Image from "next/image";
import OldMiniTextDocument from "../OldMiniTextDocument";

const UserMessageBubble = () => {
  return (
    <div className="bg-muted/50 pb-3 px-[3px] rounded-s-2xl rounded-br-2xl ml-4">
      <div className="flex items-start justify-start mb-2 rounded-t-2xl py-4 px-2">
        <div className="text-left text-sm flex-1">
          <div className="mr-1">hey do this hey do this hey do this hey do this hey do this hey do this hey do this hey do this</div>
        </div>
        <Image width={32} height={32} className="h-7 w-7 rounded-full aspect-square object-cover border border-border" src={"/mckinsey.svg"} alt="User profile" />
      </div>
      <div className="w-[97%] mx-auto">
        <OldMiniTextDocument />
      </div>
    </div>
  );
};

export default UserMessageBubble;
