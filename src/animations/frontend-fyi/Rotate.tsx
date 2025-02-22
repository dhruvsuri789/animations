"use client";
import * as motion from "motion/react-client";

export default function Rotate() {
  return (
    <motion.div
      className="w-100 h-100 bg-[#ff0088] rounded-3xl"
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    />
  );
}
