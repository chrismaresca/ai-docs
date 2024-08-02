import React from 'react';

const WritingStyle: React.FC = () => {
  return (
    <section className="pt-16 sm:pt-20 w-full max-w-2xl flex flex-col items-start text-left border-b border-border pb-24 box-content">
      <div className="mb-16 flex flex-col items-start">
        <div className="max-w-3xl">
          <h2 className="text-[2rem] sm:text-[3.5rem] leading-[1.1] mb-4 z-20 !tracking-[-0.1rem]">
            <span 
              data-br=":r5:" 
              data-brr="1" 
              style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>It</span>
              <span style={{ position: 'relative', zIndex: 2 }}> </span>
              <span style={{ position: 'relative', zIndex: 2 }}>all</span>
              <span style={{ position: 'relative', zIndex: 2 }}> </span>
              <span style={{ position: 'relative', zIndex: 2 }}>starts</span>
              <span style={{ position: 'relative', zIndex: 2 }}> </span>
              <span style={{ position: 'relative', zIndex: 2 }}>with</span>
              <span style={{ position: 'relative', zIndex: 2 }}> </span>
              {/* <span style={{ position: 'relative', zIndex: 2 }}>your</span>
              <span style={{ position: 'relative', zIndex: 2 }}> </span> */}
              {/* <span className="highlight relative rounded-sm bg-primary/60 z-1" style={{ backgroundColor: 'primary', position: 'relative', zIndex: 1 }}>information sources</span> */}

              <span className="highlight" style={{ backgroundColor: 'rgb(42, 28, 81, .75)', position: 'relative', zIndex: 1 }}>your writing</span>
              <span style={{ position: 'relative', zIndex: 2 }}>.</span>
              <br />
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl !tracking-[-0.03rem] !leading-[1.3]">
            <span 
              data-br=":r6:" 
              data-brr="1" 
              style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}
            >
              Generate an AI assistant on top of any document so you can quickly find, summarize and understand info. No more endless skimming.
            </span>
          </p>
        </div>
        <div className="mt-7">
          <button className="bg-black text-white font-semibold h-9 px-4 rounded-lg text-sm ease-in transition-all flex items-center hover:scale-[1.03] whitespace-nowrap">
            Get started
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="p-1 sm:p-2 bg-elementGray rounded-lg sm:rounded-xl border border-border2">
        <img className="rounded-md w-full shadow-heroImageInner" src="/images/landing/landing-doc.webp" alt="Screenshot of Unriddle Read web app" />
      </div>
    </section>
  );
};

export default WritingStyle;
