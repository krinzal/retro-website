import React, { useState } from "react";
import Titlebar from "./titlebar";
import About from "./popups/about";
import Team from "./popups/team";
import Work from "./popups/work";

const Home = () => {
  const [IsAbout, setAbout] = useState(false)
  const [IsTeam, setTeam] = useState(false)
  const [IsWork, setWork] = useState(false)
  
  return (
    <div className="z-10 relative p-0 shadow-retro w-full lg:max-w-[98%] xl:max-w-[95%] mx-0 lg:mx-auto bg-bgdark mt-8 pt-0 pr-4 lg:pr-0">
      {IsAbout && <About closeModal={setAbout} />}
      {IsTeam && <Team closeTeam={setTeam} />}
      {IsWork && <Work closeWork={setWork} />}
      

    <div className="dots"></div>
      <Titlebar contents="contents"/>

<div>

      <div className=" p-8 relative grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden min-h-[50% w-screen]">
        
        <div onClick={()=>setAbout(true)} className=" a relative z-10 sm:p-8 p-5 py-[60px] lg:py-[50px] max-[447px]:p-10 min-[1067px]:py-[60px] bg-white border-[1px] border-black shadow-items hover:shadow-itemshover mb-2 mr-2">
          <div className="h-full flex items-center justify-between max-[447px]:flex-col max-[447px]:gap-8">
            <div className="flex flex-col items-start justify-start h-auto flex-wrap break-words">
              <h2 className="font-logo  mr-4 mb-4 text-main tracking-[3.7px] font-bold uppercase text-[1.09rem] sm:text-[1.2rem] lg:text-[1.09rem]">
                About
              </h2>
              <p className="font-normal text-text text-[0.9rem] sm:text-[1.05rem] mt-2 tracking-[1.7px] lg:text-[0.9rem] break-words ">
                About Our <br className="hidden lg:block min-[1067px]:hidden"/>Company
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "63px", width: "63px" }}
            >
              <g transform="translate(0,0)">
                <path
                  d="M29.65 117.89v276.22h124.62V117.89H29.65zm90.55 253.16a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm18-189.16H45.56v-16h92.63v16zm0-32H45.56v-16h92.63v16zm153 188.51h73.1v39.71h41.74v16H249.48v-16h41.74V338.4zm-118-220.51V322.4h309.15V117.89H173.19zM466.35 306.4H189.19V133.89h277.16V306.4z"
                  fill="#000000"
                  fillOpacity="1"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        <div onClick={()=>setWork(true)} className="a col-span-1 lg:col-span-2 relative z-10 sm:p-8 p-5 py-[60px]  max-[447px]:p-10 lg:py-[50px] bg-white border-[1px] border-black shadow-items hover:shadow-itemshover mb-2 mr-2">
          <div className="h-full flex items-center justify-between max-[447px]:flex-col max-[447px]:gap-8">
            <div className="flex flex-col items-start justify-start ">
              <h2 className="font-logo mb-4 text-main tracking-[3.7px] font-bold uppercase text-[1.09rem] sm:text-[1.2rem] lg:text-[1.09rem]">
                Our works
              </h2>
              <p className="font-normal text-text text-[0.9rem] sm:text-[1.05rem] mt-2 tracking-[1.7px] lg:text-[0.9rem]">
                Some of our projects
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ height: "63px", width: "63px" }}
            >
              <g transform="translate(0,0)">
                <path
                  d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                  fill="#000000"
                  fillOpacity="1"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div onClick={()=>setTeam(true)} className="a col-span-1 lg:col-span-2 relative z-10 sm:p-8 p-5 py-[60px] max-[447px]:p-10 bg-white border-[1px] border-black shadow-items hover:shadow-itemshover mb-2 mr-2">
          <div className=" h-full flex items-center justify-between max-[447px]:flex-col max-[447px]:gap-8">
          <div className="flex flex-col items-start justify-start ">
              <h2 className="font-logo mb-4 text-main tracking-[3.7px] font-bold uppercase text-[1.0rem] sm:text-[1.2rem] lg:text-[1.09rem]">
                Our Team
              </h2>
              <p className="font-normal text-text text-[0.8rem] sm:text-[1.05rem] mt-2 tracking-[1.7px] lg:text-[0.9rem]">
                Meet our friendly team members
              </p>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="63" width="63">
    <path d="M389 40.84c18.5 0 35 18.79 35 44.03 0 25.33-16.5 44.03-35 44.03s-35-18.7-35-44.03c0-25.24 16.5-44.03 35-44.03zm-132.9 0c18.4 0 35 18.79 35 44.03 0 25.33-16.6 44.03-35 44.03-18.5 0-35.1-18.7-35.1-44.03 0-25.24 16.6-44.03 35.1-44.03zm-133 0c18.5 0 35 18.79 35 44.03 0 25.33-16.5 44.03-35 44.03s-35.09-18.7-35.09-44.03c0-25.24 16.59-44.03 35.09-44.03zm133 109.06c64 2 118 2 182.8 4.2 30.9 17.8 45.2 109 44.3 140.7l-17.6 17.7c-7.7-42.8-17.4-99.9-33.5-112.6v87.6l4.1 183.7H414l-16.7-184.7h-18l-16.7 184.7h-22.3l4.2-183.7-8-88.5h-29.3l-7.2 88.2 4.2 183.7h-22.3l-16.8-184.7h-18l-16.8 184.7h-22.2l4.2-183.7L205 199h-29.3l-8 88.5 4.2 183.7h-22.3l-16.7-184.7h-18L98.01 471.2h-22.2l4.2-183.7v-87.6c-16.2 12.7-25.9 69.8-33.6 112.6l-17.6-17.7c-.9-31.7 13.5-122.9 44.3-140.7 64.99-2.2 118.99-2.2 182.99-4.2z" fill="#000000" fillOpacity="1"></path>
  </svg>
          </div>
        </div>

        <div className="a col-span-1 relative z-10 sm:p-8 p-5 py-[60px] bg-white max-[447px]:p-10  border-[1px] border-black shadow-items hover:shadow-itemshover mb-2 mr-2">
          <div className="fp-cell--border-top absolute top-0 left-[-16px] right-[-16px] border-t-[#DADCE0] mb-2 mr-2"></div>
          <div className=" h-full flex items-center justify-between max-[447px]:flex-col max-[447px]:gap-8">
          <div className="flex flex-col items-start justify-start ">
              <h2 className="font-logo mb-4 text-main tracking-[3.7px] font-bold uppercase text-[1.09rem] sm:text-[1.2rem] lg:text-[1.09rem]">
                Contact
              </h2>
              <p className="font-normal text-text text-[0.9rem] sm:text-[1.05rem] mt-2 tracking-[1.7px] lg:text-[0.9rem]">
                connect with us
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="63" width="63">
    <path d="M182.78 80.125c3.367 19.498 10.608 52.67 19.126 84.813 8.126 30.663 17.73 60.122 25.063 75.062 57.968-.962 148.212-16.707 252.343-46.344-91.756-70.023-188.486-99.376-296.532-113.53zM164.657 85c-65.62 51.243-106.43 120.106-138.5 196.25 54.866-38.51 111.644-60.42 169.313-70.906-3.995-12.636-7.88-26.486-11.626-40.625-8.425-31.79-15.554-64.12-19.188-84.72zm322.281 125.906c-74.123 21.218-141.43 35.68-196.25 42.813 24.018 51.794 36.448 106.688 43.688 160.936 70.634-58.76 125.36-118.495 152.563-203.75zM201.53 228.28c-56.563 9.917-111.78 30.946-165.56 68.907 89.478 61.396 189.91 97.037 279.874 119.844-7.362-55.057-20.104-109.997-44.75-161.03-18.39 1.897-35.134 2.875-49.938 2.875h-5.344l-2.718-4.625c-3.898-6.69-7.77-15.598-11.563-25.97z" fill="#000000" fillOpacity="1"></path>
  </svg>
         
          </div>
        </div>

        <div className="absolute top-0 h-full w-full md:w-[calc(33.3% - 4px)] left-0 "></div>
        <div className="absolute top-0 h-full w-full md:w-[calc(33.3% - 4px)] right-0 "></div>
      </div>
      </div>
    </div>
  );
};

export default Home;
