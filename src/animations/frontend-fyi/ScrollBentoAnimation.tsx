/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

"use client";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import GridComponent from "../../components/GridComponent";

const cardInViewVariants = {
  inView: {
    scale: 1,
    opacity: 1,
  },
  outOfView: {
    scale: 0.8,
    opacity: 0,
  },
};

const GridOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  return (
    <motion.div
      ref={containerRef}
      className="relative grid w-full max-w-[800px] sm:h-[500px] grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4"
      variants={{
        inView: { transition: { staggerChildren: 0.1 } },
        outOfView: {
          transition: { staggerChildren: 0.1, staggerDirection: -1 },
        },
      }}
      initial="outOfView"
      animate={isInView ? "inView" : "outOfView"}
    >
      <motion.div className="row-span-2" variants={cardInViewVariants}>
        <Card
          title="TryPhone 29"
          subtitle="Call me maybe"
          imageUrl="/iphone.jpeg"
        />
      </motion.div>

      <motion.div variants={cardInViewVariants}>
        <Card
          title="BearShots Pro"
          subtitle="Ever heard better?"
          imageUrl="/airpods.jpeg"
        />
      </motion.div>

      <motion.div variants={cardInViewVariants}>
        <Card
          title="Trample Watch"
          subtitle="Right on time"
          imageUrl="/watch.jpeg"
        />
      </motion.div>
    </motion.div>
  );
};

type GridProps = {
  children: React.ReactNode;
  className?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isContainerReady: boolean;
};

const FadeIn = ({
  children,
  className,
  containerRef,
  isContainerReady,
}: GridProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: isContainerReady ? containerRef : undefined,
    target: childRef,
    offset: ["start end", "end start"],
  });

  /* console.log(
    "isContainerReady + containerRef",
    isContainerReady,
    containerRef
  ); */

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div style={{ opacity }} ref={childRef} className={className}>
      {children}
    </motion.div>
  );
};

const GridTwo = ({
  containerRef,
  isContainerReady,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isContainerReady: boolean;
}) => {
  return (
    <div className="relative grid w-full max-w-[800px] sm:h-[500px] grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
      <FadeIn
        className="row-span-2"
        containerRef={containerRef}
        isContainerReady={isContainerReady}
      >
        <Card
          title="TryPhone 29"
          subtitle="Call me maybe"
          imageUrl="/iphone.jpeg"
        />
      </FadeIn>

      <FadeIn containerRef={containerRef} isContainerReady={isContainerReady}>
        <Card
          title="BearShots Pro"
          subtitle="Ever heard better?"
          imageUrl="/airpods.jpeg"
        />
      </FadeIn>

      <FadeIn containerRef={containerRef} isContainerReady={isContainerReady}>
        <Card
          title="Trample Watch"
          subtitle="Right on time"
          imageUrl="/watch.jpeg"
        />
      </FadeIn>
    </div>
  );
};

export const ScrollBentoAnimation = () => {
  const [isContainerReady, setContainerReady] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      setContainerReady(true);
    }
  }, [container]);

  return (
    <GridComponent animationName="Scroll Bento Animation">
      <div
        ref={container}
        className="grid grid-template-rows-[auto,1fr] justify-items-center self-start h-[30rem] overflow-y-scroll relative"
      >
        <div className="h-[30rem] text-white grid place-items-start">
          Gotta scroll down 👇
        </div>
        <div className="flex w-full flex-col items-center px-2">
          {/* Animate using useInView */}
          <GridOne />

          <div className="text-white py-8 h-[30rem]">some space..</div>

          {/* Animate using useScroll */}
          <GridTwo
            containerRef={container}
            isContainerReady={isContainerReady}
          />

          <div className="text-white py-24 h-[30rem]">some 👾👾👾👾</div>
        </div>
      </div>
    </GridComponent>
  );
};

type CardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const Card = ({ title, subtitle, imageUrl }: CardProps) => (
  <div className="h-full text-black bg-white rounded-2xl overflow-clip">
    <div className="p-4 mb-5 text-center">
      <h2 className="text-3xl">{title}</h2>
      <p>{subtitle}</p>
    </div>
    <img className="object-cover w-full h-full" src={imageUrl} alt="" />
  </div>
);

export default ScrollBentoAnimation;
