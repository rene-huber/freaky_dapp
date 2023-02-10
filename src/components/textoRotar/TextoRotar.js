import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../../global.css"

const TextoRotar = () => {
  const x = useMotionValue(0);
  const width = useMotionValue("3000px");
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <div style={{overflow: "hidden", padding:"3px", display:"flex"}}>
  <a href="https://www.youtube.com/watch?v=_Ln0xLQiKKc&ab_channel=efwewefg" target="_blank" rel="noopener noreferrer">
    <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
     alt="discord" height={"13px"} style={{color: "#FFF", position:"absolute", cursor:"pointer",
     paddingTop:"4px"}} />
     </a>
    <motion.div
      style={{
        
        
        background:"transparent",
        width: "1900px",
        height: "19px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
      }}
    >
      <motion.p className="letrero"
        style={{ x,  width}}
        initial={{ x: "50vw" }}
      animate={{ x: "-100vw"  }}
        transition={{ duration: 7, repeat: Infinity, default: { ease: "linear" }}}
      >
       &darr; WELCOME MEMARKET PLACE &darr;
      </motion.p>
    
     

     
    </motion.div>
    </div>
  );
};



export default TextoRotar