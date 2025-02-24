"use client";

import GridComponent from "@/components/GridComponent";
import { motion, Variants } from "motion/react";

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="overflow-hidden relative pt-5 w-[500px] flex items-center justify-center mx-auto"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        variants={cardVariants}
        className="text-[164px] w-[300px] h-[430px] flex items-center justify-center rounded-[20px] bg-[#f5f5f5]"
        style={card}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

export default function ScrollTriggered() {
  return (
    <GridComponent animationName="Scroll Triggered Animation">
      <div className="pb-[100px] h-[40rem] overflow-y-scroll w-full">
        {food.map(([emoji, hueA, hueB], i) => (
          <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </GridComponent>
  );
}

/**
 * ==============   Styles   ================
 */

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};
