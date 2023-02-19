import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import image1 from "../../img/g1.png"
import image2 from "../../img/g2.png"
import image3 from "../../img/g3.png"
import image4 from "../../img/g4.png"


const images = [ image1, image2,image3, image4];

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Gif = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: "relative" }}>
    <motion.div

      className="image-slider"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 5 }}
    >
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Image ${index}`}
          initial="hidden"
          animate={index === currentImageIndex ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "353px",
            height: "477px"
          }}
        />
      ))}
    </motion.div>
    </div>
  );
};

export default Gif;


