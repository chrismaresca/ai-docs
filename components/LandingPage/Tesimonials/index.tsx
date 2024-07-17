import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Zeyu Yao",
      username: "@cytronicoder",
      img: "/images/testimonials/cytronicoder.jpg",
      text: "I'm using unriddle ai right now for my research into single-cell multiomics frameworks, and it's amazing!",
    },
    {
      name: "amit",
      username: "@amit_ajwani",
      img: "/images/testimonials/amit_ajwani.jpg",
      text: "This is craaazy useful. university students today don’t know how good they have it!",
    },
    {
      name: "Riley Brown",
      username: "@rileybrown_ai",
      img: "/images/testimonials/rileybrown_ai.jpg",
      text: "My friend I've been looking for this tool for months",
    },
    {
      name: "Evelyn",
      username: "@youspoileve",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I appreciate being able to read, take notes and then compare what I just learned to what Unriddle summarizes.",
    },
    {
      name: "Kumail Hunaid 😎",
      username: "@kumailht",
      img: "/images/testimonials/kumailht.jpg",
      text: "If you read PDFs at all for work or research, you should really try out @unriddle_ai. It's excellent. I'm in awe of the product, I think you'll be too.",
    },
    {
      name: "Angie Gonzalez 🌸",
      username: "@uxbyangie",
      img: "/images/testimonials/uxbyangie.jpg",
      text: "Wow, this is super useful!! I wish I had this when I was in college. 🔥🔥",
    },
    {
      name: "LAMAR 🚀",
      username: "@0xLamar_Dickens",
      img: "/images/testimonials/0xLamar_Dickens.jpg",
      text: "This tool is a game-changer! No more brackets or manual linking. It uses GPT-4 to automatically connect notes based on context and meaning.",
    },
    {
      name: "Filip",
      username: "@gutsyfilip",
      img: "https://randomuser.me/api/portraits/men/89.jpg",
      text: "I’ve tried lot of AI research apps and Unriddle is so far ahead in simplicity, quality and speed!",
    },
    {
      name: "Sam Casey",
      username: "@_samcasey",
      img: "/images/testimonials/_samcasey.jpg",
      text: "Unriddle is the best AI-based writing tool I’ve used so far, go check it out.",
    },
    {
      name: "Alamin",
      username: "@iam_chonchol",
      img: "/images/testimonials/iam_chonchol.jpg",
      text: "Unriddle makes diving into research papers so much easier and quicker. A must-try tool!",
    },
    {
      name: "Vijay",
      username: "@vijaypgeorge",
      img: "/images/testimonials/vijaypgeorge.jpg",
      text: "We use @unriddle_ai to help parse through hundreds of dermatology research papers.",
    },
    {
      name: "Izzi",
      username: "@ltowniz",
      img: "https://randomuser.me/api/portraits/women/13.jpg",
      text: "Unriddle has legit been a game changer for me this semester. Unriddle is supercharging my studying already.",
    },
    {
      name: "Zeyu Yao",
      username: "@cytronicoder",
      img: "/images/testimonials/cytronicoder.jpg",
      text: "I'm using unriddle ai right now for my research into single-cell multiomics frameworks, and it's amazing!",
    },
    {
      name: "amit",
      username: "@amit_ajwani",
      img: "/images/testimonials/amit_ajwani.jpg",
      text: "This is craaazy useful. university students today don’t know how good they have it!",
    },
    {
      name: "Riley Brown",
      username: "@rileybrown_ai",
      img: "/images/testimonials/rileybrown_ai.jpg",
      text: "My friend I've been looking for this tool for months",
    },
    {
      name: "Evelyn",
      username: "@youspoileve",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I appreciate being able to read, take notes and then compare what I just learned to what Unriddle summarizes.",
    },
    {
      name: "Kumail Hunaid 😎",
      username: "@kumailht",
      img: "/images/testimonials/kumailht.jpg",
      text: "If you read PDFs at all for work or research, you should really try out @unriddle_ai. It's excellent. I'm in awe of the product, I think you'll be too.",
    },
    {
      name: "Angie Gonzalez 🌸",
      username: "@uxbyangie",
      img: "/images/testimonials/uxbyangie.jpg",
      text: "Wow, this is super useful!! I wish I had this when I was in college. 🔥🔥",
    },
    {
      name: "LAMAR 🚀",
      username: "@0xLamar_Dickens",
      img: "/images/testimonials/0xLamar_Dickens.jpg",
      text: "This tool is a game-changer! No more brackets or manual linking. It uses GPT-4 to automatically connect notes based on context and meaning.",
    },
    {
      name: "Filip",
      username: "@gutsyfilip",
      img: "https://randomuser.me/api/portraits/men/89.jpg",
      text: "I’ve tried lot of AI research apps and Unriddle is so far ahead in simplicity, quality and speed!",
    },
    {
      name: "Sam Casey",
      username: "@_samcasey",
      img: "/images/testimonials/_samcasey.jpg",
      text: "Unriddle is the best AI-based writing tool I’ve used so far, go check it out.",
    },
    {
      name: "Alamin",
      username: "@iam_chonchol",
      img: "/images/testimonials/iam_chonchol.jpg",
      text: "Unriddle makes diving into research papers so much easier and quicker. A must-try tool!",
    },
    {
      name: "Vijay",
      username: "@vijaypgeorge",
      img: "/images/testimonials/vijaypgeorge.jpg",
      text: "We use @unriddle_ai to help parse through hundreds of dermatology research papers.",
    },
    {
      name: "Izzi",
      username: "@ltowniz",
      img: "https://randomuser.me/api/portraits/women/13.jpg",
      text: "Unriddle has legit been a game changer for me this semester. Unriddle is supercharging my studying already.",
    },
    {
      name: "Zeyu Yao",
      username: "@cytronicoder",
      img: "/images/testimonials/cytronicoder.jpg",
      text: "I'm using unriddle ai right now for my research into single-cell multiomics frameworks, and it's amazing!",
    },
    {
      name: "amit",
      username: "@amit_ajwani",
      img: "/images/testimonials/amit_ajwani.jpg",
      text: "This is craaazy useful. university students today don’t know how good they have it!",
    },
    {
      name: "Riley Brown",
      username: "@rileybrown_ai",
      img: "/images/testimonials/rileybrown_ai.jpg",
      text: "My friend I've been looking for this tool for months",
    },
    {
      name: "Evelyn",
      username: "@youspoileve",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I appreciate being able to read, take notes and then compare what I just learned to what Unriddle summarizes.",
    },
    {
      name: "Kumail Hunaid 😎",
      username: "@kumailht",
      img: "/images/testimonials/kumailht.jpg",
      text: "If you read PDFs at all for work or research, you should really try out @unriddle_ai. It's excellent. I'm in awe of the product, I think you'll be too.",
    },
    {
      name: "Angie Gonzalez 🌸",
      username: "@uxbyangie",
      img: "/images/testimonials/uxbyangie.jpg",
      text: "Wow, this is super useful!! I wish I had this when I was in college. 🔥🔥",
    },
    {
      name: "LAMAR 🚀",
      username: "@0xLamar_Dickens",
      img: "/images/testimonials/0xLamar_Dickens.jpg",
      text: "This tool is a game-changer! No more brackets or manual linking. It uses GPT-4 to automatically connect notes based on context and meaning.",
    },
    {
      name: "Filip",
      username: "@gutsyfilip",
      img: "https://randomuser.me/api/portraits/men/89.jpg",
      text: "I’ve tried lot of AI research apps and Unriddle is so far ahead in simplicity, quality and speed!",
    },
    {
      name: "Sam Casey",
      username: "@_samcasey",
      img: "/images/testimonials/_samcasey.jpg",
      text: "Unriddle is the best AI-based writing tool I’ve used so far, go check it out.",
    },
    {
      name: "Alamin",
      username: "@iam_chonchol",
      img: "/images/testimonials/iam_chonchol.jpg",
      text: "Unriddle makes diving into research papers so much easier and quicker. A must-try tool!",
    },
    {
      name: "Vijay",
      username: "@vijaypgeorge",
      img: "/images/testimonials/vijaypgeorge.jpg",
      text: "We use @unriddle_ai to help parse through hundreds of dermatology research papers.",
    },
    {
      name: "Izzi",
      username: "@ltowniz",
      img: "https://randomuser.me/api/portraits/women/13.jpg",
      text: "Unriddle has legit been a game changer for me this semester. Unriddle is supercharging my studying already.",
    },
    {
      name: "Zeyu Yao",
      username: "@cytronicoder",
      img: "/images/testimonials/cytronicoder.jpg",
      text: "I'm using unriddle ai right now for my research into single-cell multiomics frameworks, and it's amazing!",
    },
    {
      name: "amit",
      username: "@amit_ajwani",
      img: "/images/testimonials/amit_ajwani.jpg",
      text: "This is craaazy useful. university students today don’t know how good they have it!",
    },
    {
      name: "Riley Brown",
      username: "@rileybrown_ai",
      img: "/images/testimonials/rileybrown_ai.jpg",
      text: "My friend I've been looking for this tool for months",
    },
    {
      name: "Evelyn",
      username: "@youspoileve",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I appreciate being able to read, take notes and then compare what I just learned to what Unriddle summarizes.",
    },
    {
      name: "Kumail Hunaid 😎",
      username: "@kumailht",
      img: "/images/testimonials/kumailht.jpg",
      text: "If you read PDFs at all for work or research, you should really try out @unriddle_ai. It's excellent. I'm in awe of the product, I think you'll be too.",
    },
    {
      name: "Angie Gonzalez 🌸",
      username: "@uxbyangie",
      img: "/images/testimonials/uxbyangie.jpg",
      text: "Wow, this is super useful!! I wish I had this when I was in college. 🔥🔥",
    },
    {
      name: "LAMAR 🚀",
      username: "@0xLamar_Dickens",
      img: "/images/testimonials/0xLamar_Dickens.jpg",
      text: "This tool is a game-changer! No more brackets or manual linking. It uses GPT-4 to automatically connect notes based on context and meaning.",
    },
    {
      name: "Filip",
      username: "@gutsyfilip",
      img: "https://randomuser.me/api/portraits/men/89.jpg",
      text: "I’ve tried lot of AI research apps and Unriddle is so far ahead in simplicity, quality and speed!",
    },
    {
      name: "Sam Casey",
      username: "@_samcasey",
      img: "/images/testimonials/_samcasey.jpg",
      text: "Unriddle is the best AI-based writing tool I’ve used so far, go check it out.",
    },
    {
      name: "Alamin",
      username: "@iam_chonchol",
      img: "/images/testimonials/iam_chonchol.jpg",
      text: "Unriddle makes diving into research papers so much easier and quicker. A must-try tool!",
    },
    {
      name: "Vijay",
      username: "@vijaypgeorge",
      img: "/images/testimonials/vijaypgeorge.jpg",
      text: "We use @unriddle_ai to help parse through hundreds of dermatology research papers.",
    },
    {
      name: "Izzi",
      username: "@ltowniz",
      img: "https://randomuser.me/api/portraits/women/13.jpg",
      text: "Unriddle has legit been a game changer for me this semester. Unriddle is supercharging my studying already.",
    },
    // Placeholder for testimonials
  ];

  const chunkSize = Math.ceil(testimonials.length / 2);
  const chunkedTestimonials = [testimonials.slice(0, chunkSize), testimonials.slice(chunkSize)];

  return (
    <div className="relative max-w-[84rem] flex h-full w-full flex-col items-center justify-center gap-[1.5rem] overflow-visible rounded-lg mt-72 scale-[0.9] sm:scale-100 mb-8">
      {chunkedTestimonials.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full overflow-visible [--gap:1.5rem] [--duration:200s]">
          <div className={`flex w-max animate-marquee items-stretch gap-[--gap] ${rowIndex % 2 === 0 ? "[animation-direction:reverse] hover:pause" : "hover:[animation-play-state:paused]"}`}>
            {row.map((testimonial, index) => (
              <figure key={index} className="relative w-[28rem] h-[13.5rem] overflow-hidden rounded-lg border p-8 border-border bg-secondary hover:bg-border transition-colors duration-200 ease-in-out">
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-row items-center gap-3.5">
                    <img className="rounded-full" width="40" height="40" alt={testimonial.name} src={testimonial.img} />
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium">{testimonial.name}</figcaption>
                      <p className="text-sm text-textGray font-medium">{testimonial.username}</p>
                    </div>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm sm:text-base">{testimonial.text}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
