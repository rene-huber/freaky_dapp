import React, { useRef, useEffect } from "react";

import Matter from "matter-js";
import ballImage from "../img/marmol.png";
 import crown from "../img/corona.png";
import v_1 from "../img/v-1.png";
import v_2 from "../img/v-2.png";
import v_3 from "../img/v-3.png";
import v_5 from "../img/v-5.png";
import v_6 from "../img/v-6.png";
import v_7 from "../img/v-7.png";
import v_8 from "../img/v-8.png";
import v_9 from "../img/v-9.png";
import v_10 from "../img/v-10.png";
import v_11 from "../img/v-11.png";
import v_12 from "../img/v-12.png";
import v_13 from "../img/v-13.png";
import v_14 from "../img/v-14.png";
import v_15 from "../img/v-15.png";
import v_16 from "../img/v-16.png";
import v_17 from "../img/v-17.png";
import v_18 from "../img/v-18.png";
import v_19 from "../img/v-19.png";
import cigarr from "../img/cigar.png";
import inyex from "../img/inyec.png";


const Anima = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events;
      window.addEventListener("resize", function() {
  render.options.width = window.innerWidth;
  render.options.height = window.innerHeight;
});
    const engine = Engine.create({});

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
    height: window.innerHeight/1.2,
        wireframes: false,
        hasBounds: true,
        background: "transparent",
        
        
      },
    });
    const ballA = Bodies.rectangle(window.innerWidth/2, 0, 211, 366, {
      restitution: 0.2,
      label: "ballA",
      render: {
        sprite: {
          texture: ballImage,
        },
      },
    });
    const corona = Bodies.rectangle(1270, 21, 52, 51, {
      restitution: 0.2,
      label: "corona",
      render: {
        sprite: {
          texture: crown,
        },
      },
    });
    const cigar = Bodies.rectangle(110, 21, 52, 51, {
      restitution: 0.1,
      label: "ciga",
      render: {
        sprite: {
          texture: cigarr,
        },
      },
    });
    const inye = Bodies.circle(1509, 1, 23, {
      restitution: 0.3,
      label: "balCd",render: {sprite: {texture: inyex, },},});


      const v10 = Bodies.circle(909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_10, },},});

      const v11 = Bodies.circle(909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_11, },},});

      const v12 = Bodies.circle(909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_12, },},});

      const v13 = Bodies.circle(1909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_13, },},});

      const v14 = Bodies.circle(1909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_14, },},});

      const v15 = Bodies.circle(1909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_15, },},});

      const v16 = Bodies.circle(909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_16, },},});

      const v17 = Bodies.circle(309, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_17, },},});

      const v18 = Bodies.circle(909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_18, },},});

      const v19 = Bodies.circle(909, 1, 23, {
        restitution: 0.3,
        label: "balCd",render: {sprite: {texture: v_19, },},});
   

    const v1 = Bodies.circle(79, 1, 8,  {
      restitution: 0.3,
      label: "blCffffd",render: {sprite: {texture: v_1, },},});

    const v2 = Bodies.circle(159, 1, 11,  {
      restitution: 0.3,
      label: "baldsalCd",render: {sprite: {texture: v_2, },},});

    const v3 = Bodies.circle(309, 1, 6,  {
      restitution: 0.3,
      label: "baldfslCd",render: {sprite: {texture: v_3, },},});    

    const v5 = Bodies.circle(629, 1, 4,  {
      restitution: 0.3,
      label: "ballfsdCd",render: {sprite: {texture: v_5, },},});

    const v6 = Bodies.circle(909, 1, 9,  {
      restitution: 0.3,
      label: "ba9llCd",render: {sprite: {texture: v_6, },},});

    const v7 = Bodies.circle(1009, 1, 4,  {
      restitution: 0.3,
      label: "bauzrrrrrd",render: {sprite: {texture: v_7, },},});

    const v8 = Bodies.circle(1209, 1, 23, {
      restitution: 0.3,
      label: "blCd",render: {sprite: {texture: v_8, },},});

    const v9 = Bodies.circle(909, 1, 23, {
      restitution: 0.3,
      label: "balCd",render: {sprite: {texture: v_9, },},});
      
      
      
    const v21 = Bodies.circle(1509, 1, 23, {
      restitution: 0.3,
      label: "balCd",render: {sprite: {texture: v_9, },},});
      
    
      
      

   

    World.add(engine.world, [
      // walls
      Bodies.rectangle(0,0, 3522, 1, { isStatic: true , render: {fillStyle: "transparent"}}),

      Bodies.rectangle(window.innerWidth, 0,91, 900, { isStatic: true , render: {fillStyle: "transparent"}}),
      Bodies.rectangle(window.innerWidth, 800,5, 900, { isStatic: true , render: {fillStyle: "transparent"}}),


      Bodies.rectangle(0, window.innerHeight/1.2, 1899, 25, { isStatic: true , render: {fillStyle: "transparent"}}),
      Bodies.rectangle(1880, window.innerHeight/1.2, 1899, 25, { isStatic: true , render: {fillStyle: "transparent"}}),

      Bodies.rectangle(0, window.innerHeight, 5, 1100, { isStatic: true , render: {fillStyle: "transparent"}}),
      Bodies.rectangle(0, 222, 35, 1100, { isStatic: true , render: {fillStyle: "transparent"}}),
    ]);


 

    World.add(engine.world, [ballA,  v1, v2,v3,v5,v6,v7,v8,v9,v10,v11,cigar,v12,v13,corona,v14,inye,v15,v16,v17,v18,v19,v21  ]);

    // add mouse control
  
    document.addEventListener("mousewheel", function(event) {
      window.scrollBy(0, event.deltaY);
    });

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Events.on(engine, "collisionStart", function (event) {
      var pairs = event.pairs;

      for (var i = 0, j = pairs.length; i !== j; ++i) {
        var pair = pairs[i];

       
      }
    });

    Engine.run(engine);
    Render.run(render);

    

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
    };
  }, []);

  return <div ref={sceneRef} style={{ backgroundColor: "transparent", overflow:"hidden", padding:"0",
  margin:"-5px"}} />;

};

export default Anima;
