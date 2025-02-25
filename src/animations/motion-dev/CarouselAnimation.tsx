"use client";

import GridComponent from "@/components/GridComponent";
import { motion, AnimatePresence, Variants } from "motion/react";

import { useState } from "react";
import { wrap } from "popmotion";
import { cn } from "@/utils/cn";

export const images = [
  "tiger/tiger-1.avif",
  "tiger/tiger-2.avif",
  "tiger/tiger-3.avif",
];

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type NextPreviousButtonProps = {
  children: React.ReactNode;
  direction: string;
  onClick: (direction: number) => void;
};

const NextPreviousButton = ({
  children,
  direction,
  onClick,
}: NextPreviousButtonProps) => {
  return (
    <div
      className={cn(
        "absolute top-[calc(50%-20px)] bg-white text-black rounded-[30px] w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-lg z-[2]",
        direction === "next" ? "right-[10px]" : "left-[10px] -scale-[1]"
      )}
      onClick={direction === "next" ? () => onClick(1) : () => onClick(-1)}
    >
      {children}
    </div>
  );
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="absolute object-cover"
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <NextPreviousButton direction="next" onClick={paginate}>
        {"‣"}
      </NextPreviousButton>
      <NextPreviousButton direction="prev" onClick={paginate}>
        {"‣"}
      </NextPreviousButton>
    </>
  );
};

export default function CarouselAnimation() {
  return (
    <GridComponent animationName="Carousel Animation">
      <Example />
    </GridComponent>
  );
}
