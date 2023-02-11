import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Polygon from "./pol2.png"
import Opensea from "./pol_white.png"
import "../../global.css";

const TextoRotar = () => {
  const x = useMotionValue(0);
  const width = useMotionValue("3000px");

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="tresLogosBar">

      <a
        href="#"
        target="_blank"
      >
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
          alt="discord"
          height={"13px"}
          style={{
            color: "#FFF",
            position: "absolute",
            cursor: "pointer",
            zIndex: "99",
            paddingTop: "4px",
          }}
        />
      </a>
      <a
        href="https://opensea.io/collection/freakynft"
        target="_blank"
        
      >
        <img
          src={Opensea}
          alt="Opensea"
          height={"19px"}
          style={{
            color: "#FFF",
            position: "absolute",
            cursor: "pointer",
            zIndex: "99",
            right:"0", marginRight:"51px"
          }}
        />
      </a>
      <a
        href="https://polygonscan.com/address/0x893bc437490010efd91ea875ec48038d8f88faf5"
        target="_blank"
        
      >
        <img
          src={Polygon}
          alt="PolygonScan"
          height={"19px"}
          style={{
            color: "#FFF",
            position: "absolute",
            cursor: "pointer",
            zIndex: "99",
             right:"0",
            marginRight:"21px"
          }}
        />
      </a>
      

      <motion.lo
        style={{
          background: "transparent",
          width: "1900px",
          height: "19px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.li
          className="letrero"
          style={{ x, width }}
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
        >
          &darr; WELCOME TO THE Freaky MARKETPLACE &darr;
        </motion.li>
      </motion.lo>
    </div>
  );
};

export default TextoRotar;
