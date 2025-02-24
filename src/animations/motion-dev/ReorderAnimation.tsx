"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = { type: "spring", damping: 20, stiffness: 300 };

export default function ReorderAnimation() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <GridComponent animationName="Reorder Animation">
      <ul className="list-none p-0 m-0 relative flex flex-wrap gap-3 w-[300px] flex-row justify-center items-center">
        {order.map((backgroundColor) => (
          <motion.li
            key={backgroundColor}
            layout
            transition={spring}
            style={{ backgroundColor }}
            className="w-[100px] h-[100px] rounded-lg"
          />
        ))}
      </ul>
    </GridComponent>
  );
}
