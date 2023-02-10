import Anima from "./components/Anima";
import Astronauta from "./components/astronauta/Astronauta";
import BarraNegra from "./components/barraNegra/BarraNegra";
import Mint from "./components/Mint"    
import Navbar from "./components/Navbar/Navbar";
import Statue from "./components/Statue/Statue";
import TextoRotar from "./components/textoRotar/TextoRotar";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./global.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 238,
      width: 199,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundImage: `url(https://w1.rene-huber.eu/astro-low.png)`,
      backgroundSize: "cover",
      backgroundColor:"transparent",      
      cursor: "none"
      
    },
    text2: {
      height: 238,
      width: 195,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundImage: `url(https://w1.rene-huber.eu/wp-content/uploads/2020/12/logo-huber-1.png)`,
      backgroundSize: "cover",
      backgroundColor:"transparent",      
      cursor: "none"
      
    }
  }



  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  
  const textEnter2 = () => setCursorVariant("text2");
  const textLeave2 = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <Navbar />

      <div className="scenario">
        <Anima />
      </div>
      <BarraNegra />
      
   <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
      <Astronauta />
   </div>
      
      <TextoRotar />
      
      <h1 onMouseEnter={textEnter2} onMouseLeave={textLeave2} className='title'>Hello World</h1>
    

      <Mint/>
      <Statue />
    </>
  );
};

export default App;
