// "use client";

// import React, { useEffect, useRef, useState } from "react";

// // AI Writing Output

// import { useConversationContext } from "@/context/ConversationContext";
// import AiWritingInstance from "../../AiWritingInstance";

// const AiConversation: React.FC = () => {
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const { showConversation } = useConversationContext();
//   const [inputValue, setInputValue] = useState("");

//   const initialContent = "";

  const initialContent = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "It’s 19871. You can’t turn on a radio, or go to a mall without hearing Olivia Newton-John’s hit song, Physical.",
          },
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "This is an indented line.",
              },
            ],
            attrs: {
              indent: 1, // This assumes your schema supports an indent attribute
            },
          },
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "This line is bold.",
                marks: [
                  {
                    type: "bold",
                  },
                ],
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "This line is italic.",
                marks: [
                  {
                    type: "italic",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

//   useEffect(() => {
//     if (bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [showConversation]);

//   const handleButtonClick = () => {
//     console.log(inputValue);
//   };

//   return (
//     <div className="flex flex-col flex-grow overflow-hidden pb-4">
//       <div className="flex-grow overflow-y-auto px-3"></div>
//       <AiWritingInstance inputValue={inputValue} setInputValue={setInputValue} onButtonClick={handleButtonClick} />
//     </div>
//   );
// };

// export default AiConversation;
