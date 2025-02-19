/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { useInterval } from "react-use";
import { quotes } from "@/data/quotes";
import { Debug, useSpeedControl } from "../components/Debugtools";
import { ChevronLeft, ChevronRight } from "../components/Icons";
import GridComponent from "../components/GridComponent";

const getQuoteVariant = (index: number, suffix?: string) =>
  `quote_${index}` + (suffix ? `_${suffix}` : "");

const CarousalAnimation = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const lastQuoteIndex = quotes.length - 1;
  const [isPaused, setIsPaused] = useState(false);
  const { speed, setSpeed, faster, slower } = useSpeedControl();

  const next = () => {
    setActiveQuoteIndex((currentQuote) =>
      currentQuote >= lastQuoteIndex ? 0 : currentQuote + 1
    );
  };

  const previous = () => {
    setActiveQuoteIndex((currentQuote) =>
      currentQuote === 0 ? lastQuoteIndex : currentQuote - 1
    );
  };

  useInterval(
    () => {
      // See note in the lesson on why we use requestAnimationFrame here.
      window.requestAnimationFrame(next);
    },
    isPaused ? null : speed
  );

  return (
    <GridComponent animationName="Carousal Animation">
      <div>
        <motion.div
          //Place where we control which variants are active at the top most element. So there is only one place to look if you ever want to change the behaviour
          //These are the variants which are then used below to animate in the variants prop
          //whileHover has precedence over animate
          // animate={`quote_${activeQuoteIndex}`}
          animate={getQuoteVariant(activeQuoteIndex)}
          initial="inactive"
          //If we hover it will apply two variants at the same time.
          //Framer motion will apply the variants in order. It will decide which variants to apply if you have multiple variants, is simply by looking at the order of the variants in the array
          // whileHover={["paused", `quote_${activeQuoteIndex}_highlighted`]}
          whileHover={[
            "paused",
            getQuoteVariant(activeQuoteIndex, "highlighted"),
          ]}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          className="bg-white text-black relative rounded-2xl py-5 px-12 w-[400px] max-w-full"
        >
          <div className="flex justify-center">
            {quotes.map((quote, index) => (
              <motion.img
                key={index}
                /* animate={{
                  filter:
                    isPaused && index !== activeQuoteIndex
                      ? "grayscale(1)"
                      : "grayscale(0)",
                  scale: activeQuoteIndex === index ? 1.2 : isPaused ? 0.9 : 1,
                  zIndex: activeQuoteIndex === index ? 10 : 0,
                }} */
                variants={{
                  // [`quote_${index}`]: {
                  [getQuoteVariant(index)]: {
                    scale: 1.2,
                    zIndex: 10,
                  },
                  paused: {
                    scale: 0.9,
                    filter: "grayscale(1)",
                  },
                  //What we are doing is polling
                  // [`quote_${index}_highlighted`]: {
                  [getQuoteVariant(index, "highlighted")]: {
                    scale: 1.2,
                    zIndex: 10,
                    filter: "grayscale(0)",
                  },
                }}
                className="rounded-full -mx-2 relative border border-black w-12 h-12"
                src={quote.image}
              />
            ))}
          </div>
          <div className="grid mt-3 text-center">
            {quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                /* initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: activeQuoteIndex === index ? 0 : 20,
                  opacity: activeQuoteIndex === index ? 1 : 0,
                }} */
                variants={{
                  inactive: { y: 20, opacity: 0 },
                  // [`quote_${index}`]: { y: 0, opacity: 1 },
                  [getQuoteVariant(index)]: { y: 0, opacity: 1 },
                }}
                className="[grid-area:1/1] relative"
              >
                <p>{quote.text}</p>
                <p className="font-bold mt-3 text-sm">
                  {quote.name} - {quote.roleCompany}
                </p>
              </motion.blockquote>
            ))}
          </div>
          <motion.button
            onClick={previous}
            // animate={{ x: isPaused ? 0 : -20, opacity: isPaused ? 1 : 0 }}
            variants={{
              inactive: { x: -20, opacity: 0 },
              paused: { x: 0, opacity: 1 },
            }}
            className="absolute top-1/2 left-0 block px-3"
          >
            <ChevronLeft /> <span className="sr-only">Previous</span>
          </motion.button>
          <motion.button
            onClick={next}
            // animate={{ x: isPaused ? 0 : 20, opacity: isPaused ? 1 : 0 }}
            variants={{
              inactive: { x: 20, opacity: 0 },
              paused: { x: 0, opacity: 1 },
            }}
            className="absolute top-1/2 right-0 block px-3"
          >
            <ChevronRight /> <span className="sr-only">Next</span>
          </motion.button>
        </motion.div>

        <Debug
          activeQuoteIndex={activeQuoteIndex}
          speed={speed}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          faster={faster}
          slower={slower}
        />
      </div>
    </GridComponent>
  );
};

export default CarousalAnimation;
