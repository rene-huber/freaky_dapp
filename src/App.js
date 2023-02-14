import Anima from "./components/Anima";
import Astronauta from "./components/astronauta/Astronauta";
import BarraNegra from "./components/barraNegra/BarraNegra";
import Mint from "./components/Mint";
import Navbar from "./components/Navbar/Navbar";
import Statue from "./components/Statue/Statue";
import TextoRotar from "./components/textoRotar/TextoRotar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Astro from "./img/astro-low.png";
import Puntero from "./img/puntero.png";
import gif from "./img/alt-f4_green.gif";
import "./global.css";
import Gif from "./components/alt_f4/Gif";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 9,
      y: mousePosition.y - 7,
    },
    text: {
      height: 50,
      width: 29,
      x: mousePosition.x - 25,
      y: mousePosition.y - 15,
      backgroundImage: `url(${Puntero})`,
      backgroundSize: "cover",
      backgroundColor: "transparent",
      cursor: "none",
    },
    text2: {
      height: 238,
      width: 195,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundImage: `url(${gif})`,
      backgroundSize: "cover",
      backgroundColor: "transparent",
      cursor: "none",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const textEnter2 = () => setCursorVariant("text2");
  const textLeave2 = () => setCursorVariant("default");

  return (
    <>
      <TextoRotar />
      <Navbar />
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      <div className="scenario">
        <Anima />
      </div>
      <BarraNegra />

      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <Astronauta />
      </div>

      <div className="wrapMint">
        <div
          className="gif"
          onMouseEnter={textEnter2}
          onMouseLeave={textLeave2}
        >
          <Gif />
        </div>
        <Mint />
      </div>
    </>
  );
};

export default App;
