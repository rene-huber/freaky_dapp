import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import juice from "./img/juice.jpg";
import naranja from "./img/naranja.jpg";
import muscle from "./img/muscle.jpg";
import "./slide_2.css";

export default function Slide2() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ repeat: -1 })

        .from("#juice", { opacity: 0, duration: 1.5 })
        .from("#muscle", { opacity: 0, duration: 1.5 })
        .from("#naranja", { opacity: 0, duration: 1.5 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className="slide2" ref={el}>
      <img id="juice" className="imagen" src={juice} alt="Imagewq2" />
      <img id="muscle" className="imagen" src={muscle} alt="Imawq2" />
      <img id="naranja" className="imagen" src={naranja} alt="Imadwq2" />
    </div>
  );
}
