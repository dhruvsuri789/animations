"use client";
import GridComponent from "@/components/GridComponent";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const upperMarque = [
  "/infinite-marquee/01.svg",
  "/infinite-marquee/02.svg",
  "/infinite-marquee/03.svg",
  "/infinite-marquee/04.svg",
  "/infinite-marquee/05.svg",
  "/infinite-marquee/06.svg",
  "/infinite-marquee/07.svg",
  "/infinite-marquee/08.svg",
  "/infinite-marquee/09.svg",
  "/infinite-marquee/10.svg",
  "/infinite-marquee/11.svg",
];
const lowerMarque = [
  "/infinite-marquee/12.svg",
  "/infinite-marquee/13.svg",
  "/infinite-marquee/14.svg",
  "/infinite-marquee/15.svg",
  "/infinite-marquee/16.svg",
  "/infinite-marquee/17.svg",
  "/infinite-marquee/18.svg",
  "/infinite-marquee/19.svg",
  "/infinite-marquee/20.svg",
  "/infinite-marquee/21.svg",
  "/infinite-marquee/22.svg",
];

function MarqueUpper() {
  return (
    <motion.div
      className="flex flex-shrink-0"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {upperMarque.map((image, index) => {
        return (
          <img
            className="h-40 w-56 pr-20"
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        );
      })}
    </motion.div>
  );
}

function MarqueeLower() {
  return (
    <motion.div
      className="flex flex-shrink-0"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {lowerMarque.map((image, index) => {
        return (
          <img
            className="h-40 w-56 pr-20"
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        );
      })}
    </motion.div>
  );
}

function InfiniteMarqueeAnimation() {
  return (
    <GridComponent animationName="Infinite Marquee Animation">
      <div className="w-full mx-auto">
        <div className={cn("flex", "MarqueeGradient")}>
          <MarqueUpper />
          <MarqueUpper />
        </div>
        <div className={cn("flex", "MarqueeGradient")}>
          <MarqueeLower />
          <MarqueeLower />
        </div>
      </div>
    </GridComponent>
  );
}

export default InfiniteMarqueeAnimation;
