import React from "react";
import {BsChevronRight} from "react-icons/bs";

export const NextArrow = (props) => {
    return(
        <div>
         <div
   className={props.className}
   style={{ ...props.style, display: "block", background: "rgb(102,102,102)", right: "0.5px", height: "20px", width: "20px", alignItems:"center", objectPosition:"center", justifyContent:"center", borderRadius:"20px", top: "calc(158.33px)"}}
   onClick={props.onClick}
    />
    </div>
  );
};

export const PrevArrow = (props) => {
  return (
    <div>
   <div
   className={props.className}
   style={{ ...props.style, display: "block", background: "rgb(102,102,102)", left: "0.5px", height: "20px", width: "20px", alignItems:"center", objectPosition:"center", justifyContent:"center", borderRadius:"20px", top: "calc(158.33px)",position:"relative", zIndex:"1"}}
   onClick={props.onClick}
    />
    </div>
  );
};