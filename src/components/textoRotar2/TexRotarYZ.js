import { motion } from "framer-motion"

function TexRotarYZ() {
  return (
    <motion.h1 
     
    animate={{ x: 0, rotateX: 360 }}
  transition={{ duration: 2 , repeat: Infinity}}
  style={{ transformStyle: "flat", color:"#FFF" }}
>
  Tu texto aquí
</motion.h1>
  )
}

export default TexRotarYZ