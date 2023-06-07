import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';



const Navbar = () => {
  return (
    <nav className=" z-2 w-screen mx-0 max-h-[47px lg:w-[98%] lg:mt-[15px] lg:mx-auto self-center shadow-retronav bg-bg1 flex justify-start items-center drop-shadow-lg filter retro border-[#4E5252]">
      <span className="max-[285px]:p-3 max-[285px]:text-xs p-5 max-h-[47px] min-h-[47px] items-center flex shadow-retro2 font-logo hover:shadow-activenav active:shadow-activenav cursor-pointer ">
        <h1 className="font-logo text-main cursor-pointer ">NoPixel</h1>
        
      </span>

      <ul className="flex justify-end items-center ml-auto cursor-pointer mr-4 lg:mr-0">
        <a href="https://youtu.be/dQw4w9WgXcQ" rel="noopener" target="_blank">
      <li className="p-5 max-h-[47px] items-center flex shadow-retro2 md:px-8 bg-bg1 hover:shadow-activenav active:shadow-activenav ">
          <button className="icon-button" role="button" aria-label="Music Player">
            <span className="icon-span">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="info"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 0H14V1H10V2H7V3H6V11H1V12H0V18H1V20H6H7V6H10V5H14V4H17V8V9H12V10H11V16H12V18H17H18V8V1H17V0ZM17 1V3H14V4H10V5H7V3H10V2H14V1H17ZM17 16V10H12V16H17ZM1 18V12H6V18H1Z"
                  fill="#142C69"
                />
              </svg>
            </span>
          </button>
        </li>
          </a>
          <a href="https://discord.gg/noerror-studios-tm-876113814314164256" target="_blank">
        <li className="p-5 max-h-[47px] items-center flex shadow-retro2 md:px-8 hover:shadow-activenav active:shadow-activenav ">
          <button className="icon-button" role="button" aria-label="Discord">
            <span className="icon-span">
            <FontAwesomeIcon icon={faDiscord} className=" discord-logo" />

            </span>
          </button>
        </li>
          </a>
      </ul>
    </nav>
  );
};

export default Navbar;
