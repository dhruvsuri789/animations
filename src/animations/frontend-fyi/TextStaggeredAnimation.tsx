"use client";

import GridComponent from "@/components/GridComponent";
import { motion, useAnimation, useInView, Variant } from "motion/react";
import type { JSX } from "react";
import { useEffect, useRef } from "react";

function TextStaggeredAnimation() {
  return (
    <GridComponent animationName="Text Staggered Animation">
      <div className="mx-auto max-w-6xl pt-14 text-white h-[40rem] overflow-y-scroll">
        <section className="h-screen">
          <p className="text-4xl md:text-[200px] md:leading-relaxed">
            Scroll down...
          </p>
        </section>
        <section className="flex h-[150vh] flex-col items-center justify-center">
          <AnimatedText
            once
            text="Hello you"
            el="h1"
            className="text-[200px]"
          />
          Scroll down more...
        </section>

        <section className="flex min-h-[150vh] flex-col items-center justify-center">
          <AnimatedText
            el="h2"
            text={[
              "This is written on",
              "a typing machine. Tick tick",
              "tick tack tack...",
            ]}
            className="text-4xl"
            repeatDelay={10000}
          />
        </section>
      </div>
    </GridComponent>
  );
}

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      {/* Only for screen readers. Its the same text */}
      <span className="sr-only">{textArray.join(" ")}</span>
      {/*
       *We are going to get every character in an array to animate one by one
       *This is not read by the screen reader as it has aria-hidden property set
       */}
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default TextStaggeredAnimation;
