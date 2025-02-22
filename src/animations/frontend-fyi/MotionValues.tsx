"use client";
import { motion, useMotionValue, useTransform } from "motion/react";
import GridComponent from "../../components/GridComponent";

function MotionValues() {
  /* const scale = useSpring(1, {
    stiffness: 50,
    damping: 300,
    mass: 5,
    velocity: 0,
  }); */

  /* const scale = useMotionValue(1);
  const spring = useSpring(1); */

  //You can use the one value into another
  /* const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale); */

  const sliderValue = useMotionValue(1);
  // second array = Range of numbers you want to listen to
  // third array = From and To values
  const opacity = useTransform(sliderValue, [1, 5], [0, 1]);

  const onRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //By default you get a string but we want a number here
    sliderValue.set(parseFloat(event.target.value));
  };

  return (
    <GridComponent animationName="useMotionValue, useSpring, useTransform">
      <motion.button
        className="bg-slate-200 text-black px-3 py-2 rounded-md"
        // style={{ scale: scaleSpring }}
        style={{ scale: sliderValue, opacity }}
        transition={{ type: "spring", damping: 300 }}
      >
        Scale ⚖️
      </motion.button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 p-3 bg-white/10 rounded-xl flex items-center justify-center">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={onRangeChange}
        />
      </div>
    </GridComponent>
  );
}

export default MotionValues;
