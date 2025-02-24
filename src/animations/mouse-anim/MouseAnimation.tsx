"use client";

import GridComponent from "@/components/GridComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// register the hook to avoid React version discrepancies
gsap.registerPlugin(useGSAP);

const Cursor = () => {
  /* useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); */

  /* 
  * Taking into account the width of the cursor, the width of the SideNav and the padding of the main element
  x: clientX - (20 / 2 + 270 + 32),
  
  * Taking onto account the padding of the main element
  y: clientY - (20 / 2 + 32),
  
  */

  // we only need one ref, the container. Use selector text for the rest (scoped to only find descendants of container).
  const container = useRef(null);

  // we can pass in a config object as the 1st parameter to make scoping simple
  const { contextSafe } = useGSAP({ scope: container });

  // Special hook for react so that we dont have to use useEffect
  // ✅ safe, created during execution, selector text scoped properly to the container.
  useGSAP(
    () => {
      const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        gsap.to("#cursor", {
          x: clientX - 20 / 2,
          y: clientY - 20 / 2,
          duration: 1,
          delay: 0,
          ease: "power4.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: container }
  );

  // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
  // selector text is scoped properly to the container.
  const mouseEnter = contextSafe(() => {
    gsap.to("#cursor", { scale: 8, duration: 0.3 });
  });

  const mouseLeave = contextSafe(() => {
    gsap.to("#cursor", { scale: 1, duration: 0.3 });
  });

  return (
    <div ref={container}>
      <div
        id="cursor"
        className="h-[20px] w-[20px] bg-white rounded-full fixed top-0 left-0 z-10 pointer-events-none mix-blend-difference"
      ></div>
      <div className="w-full h-full flex items-center justify-center">
        <h1
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="text-9xl"
        >
          Hover Me!
        </h1>
      </div>
    </div>
  );
};

export default function MouseAnimation() {
  return (
    <GridComponent animationName="Mouse Animation">
      <Cursor />
    </GridComponent>
  );
}
