import React from "react";
import Draggable from "react-draggable";
import "./popups.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Work = ({ closeWork }) => {
  const handleDrag = (e, ui) => {
    // handle drag event if needed
  };

  // Get the current screen width
  const screenWidth = window.innerWidth;

  return (
    <div className="main shadow-retro font-cool bg-[#9BA7A8]">
      {screenWidth > 1024 ? (
        <Draggable handle=".modal-header" onDrag={handleDrag} bounds="parent">
          <div className="modal about bg-bgdark">
            <div className="modal-header bg-bg1 px-4 lg:px-2 py-1">
              <div className="flex justify-between items-center">
                <div className="title font-sans uppercase tracking-[4px] px-2 text-main">
                  <b>About </b>
                </div>
              </div>
              <div className="barsmodal flex block flex-col items-center text-main">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <FontAwesomeIcon icon={faTimes} onClick={() => closeWork(false)} className="close" />
            </div>
            <div className="modal-content bg-bg1 text-black">
            <p>
              <b>Fill out your content i am lazy to do it 💀</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              dolorum sunt modi ratione tenetur omnis exercitationem itaque
              autem vitae non! Iure rem omnis necessitatibus explicabo pariatur
              vel dolore provident ?{" "}
            </p>{" "}
            </div>
          </div>
        </Draggable>
      ) : (
        <div className="modal about bg-bgdark">
          <div className="modal-header bg-bg1 px-4 lg:px-2 py-1">
            <div className="flex justify-between items-center">
              <div className="title font-sans uppercase tracking-[4px] px-2 text-main">
                <b>About </b>
              </div>
            </div>
            <div className="barsmodal flex block flex-col items-center text-main">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <FontAwesomeIcon icon={faTimes} onClick={() => closeWork(false)} className="close" />
          </div>
          <div className="modal-content bg-bg1 text-black">
          <p>
            <b>Fill out your content i am lazy to do it 💀</b>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            dolorum sunt modi ratione tenetur omnis exercitationem itaque
            autem vitae non! Iure rem omnis necessitatibus explicabo pariatur
            vel dolore provident ?{" "}
          </p>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
