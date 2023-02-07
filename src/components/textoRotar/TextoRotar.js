import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../../global.css"

const TextoRotar = () => {
  const x = useMotionValue(0);
  const width = useMotionValue("3000px");
  

  return (
    <div style={{overflow: "hidden"}}>
    <motion.div
      style={{
        
        
        background:"transparent",
        width: "1900px",
        height: "70px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
      }}
    >
      <motion.p className="letrero"
        style={{ x,  width}}
        initial={{ x: "100vw" }}
      animate={{ x: "-100vw"  }}
        transition={{ duration: 9, repeat: Infinity, }}
      >
        NFT - SMART CONTRACT - W3 
      </motion.p>
     
    </motion.div>
    </div>
  );
};



export default TextoRotar