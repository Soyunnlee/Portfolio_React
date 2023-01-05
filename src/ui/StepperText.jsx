import React from "react";
import { Fade } from "react-reveal";

import "../Css/About.css"

export default function StepperText(props) {
  const { activeNum, StepperTxt, direction } = props;
  console.log(`${activeNum} 활성번호`);
  return (
    <div className="StepperContentWrap">
      {StepperTxt.map((text, idx) => (
        <>
          {activeNum === text.id && (
            <Fade
              right={direction === "right"}
              left={direction === "left"}
              dration={1800}
            >

              <div key={text.id} 
                className="">
                {/* stepper title */}
              
                <div class="sm:w-full rounded-lg shadow-lg bg-white my-3 border">
                  <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                      <div>
                          <i class="fas fa-exclamation-circle text-blue-500"></i>
                          <span class="font-bold text-gray-700 text-lg ">
                            {text.title}
                          </span>
                        </div>
                    </div>
      
                    <div class="StepperContent">
                      {text.description}
                    </div>
                  
                </div>

              </div>




            </Fade>
          )}
        </>
      ))}
    </div>
  );
}

StepperText.defaultProps = {
  activeNum: 0,
};
