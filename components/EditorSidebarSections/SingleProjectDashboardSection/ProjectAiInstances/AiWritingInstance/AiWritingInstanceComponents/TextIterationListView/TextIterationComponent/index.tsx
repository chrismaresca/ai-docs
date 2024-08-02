import React from "react";
import { ChevronRight, Pencil, Copy } from "lucide-react";
import { TextIteration } from "@/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Text Editor
import MiniTextDocument from "../../MiniTextDocument";

interface TextIterationComponentProps {
  iteration: TextIteration;
}

const TextIterationComponent: React.FC<TextIterationComponentProps> = ({ iteration }) => {
  return (
    <div className="group w-full flex flex-col py-2 hover:bg-slate-100 hover:shadow-md cursor-pointer px-4 hover:border-l-[6px] hover:border-l-primary">
      <HoverCard openDelay={100}>
        <HoverCardTrigger>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[12px] w-1/3 font-base tracking-tight">
              <span className="w-full truncate">{iteration.task}ndjkwnkjewjkedjkedjnknejwdwedkmkel</span>
            </div>
            <div className="inline-flex items-center">
              <div className="mr-5 text-sm font-extralight text-primary/20 group-hover:text-primary/50">{iteration.dateCreated}</div>
              <ChevronRight className="w-4 h-4 hover:scale-[1.12]" />
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-[30rem] min-h-[15rem] max-h-[30rem] overflow-y-auto shadow-xl">
          <div className="w-full">
            <div className="inline-flex justify-between w-full mb-3 ml-2">
              <div className="inline-flex text-base justify-center">
                <div className="truncate w-36">{iteration.task}ekmdewewmkldemwklkmdewlkmdlmwkeldmkwemlked</div>
                {/* <div className="inline-flex items-center justify-center ml-2 space-x-2">
                  <Pencil className="w-3 h-3 hover:scale-[1.08]" />
                  <Copy className="w-3 h-3 hover:scale-[1.08]" />
                </div> */}
              </div>
              <div className="font-light text-slate-300 text-sm mr-4">{iteration.dateCreated}</div>
            </div>
            <MiniTextDocument iteration={iteration} isEditExpanded={false} />
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default TextIterationComponent;
