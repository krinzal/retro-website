import React from "react";
import Draggable from "react-draggable";
import "./popups.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const About = ({ closeModal }) => {
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
              <FontAwesomeIcon icon={faTimes} onClick={() => closeModal(false)} className="close text-main" />
            </div>
            <div className="modal-content bg-bg1 text-black">
              <p>

<b>NoPixel is a hypothetical only company made for content of this website</b>
<br />
                NoPixel is a leading coding and technology company dedicated to driving innovation and delivering cutting-edge solutions. We specialize in developing high-quality software, building scalable web applications, and providing comprehensive tech consultancy services. At NoPixel, we believe in the power of technology to transform businesses and enhance user experiences. Our team of skilled developers, designers, and engineers are committed to creating exceptional digital products that meet the unique needs of our clients.
              </p>
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
            <FontAwesomeIcon icon={faTimes} onClick={() => closeModal(false)} className="close text-main" />
          </div>
          <div className="modal-content bg-bg1 text-black">
            <p>

<b>NoPixel is a hypothetical only company made for content of this website</b>
<br />
              NoPixel is a leading coding and technology company dedicated to driving innovation and delivering cutting-edge solutions. We specialize in developing high-quality software, building scalable web applications, and providing comprehensive tech consultancy services. At NoPixel, we believe in the power of technology to transform businesses and enhance user experiences. Our team of skilled developers, designers, and engineers are committed to creating exceptional digital products that meet the unique needs of our clients.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
