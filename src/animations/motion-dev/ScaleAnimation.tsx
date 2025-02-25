"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";
import { useState } from "react";

export default function ScaleAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GridComponent animationName="Scale Animation">
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        animate={{ width: isOpen ? 400 : 100, height: isOpen ? 200 : 100 }}
        className="bg-white w-[100px] h-[100px] flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          transition={{ duration: 1 }}
          className="w-[40px] h-[40px] bg-[#f107a3] rounded-full"
        />
      </motion.div>
    </GridComponent>
  );
}
