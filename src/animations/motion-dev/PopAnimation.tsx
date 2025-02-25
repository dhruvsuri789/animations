"use client";

import GridComponent from "@/components/GridComponent";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

export function removeItem<T>(arr: T[], item: T) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}

export default function PopAnimation() {
  const count = useRef(0);
  const [items, setItems] = useState([0]);
  const [popLayout, setPopLayout] = useState(false);

  return (
    <GridComponent animationName="Pop Animation">
      <div className="flex flex-col items-center">
        <div className="flex flex-col p-0 pb-[50px] items-center">
          <label className="flex items-center my-[20px] mx-0 gap-2">
            <code>popLayout</code>
            <input
              type="checkbox"
              checked={popLayout}
              onChange={(e) => setPopLayout(e.currentTarget.checked)}
              className="accent-[#ff0066]"
            />
          </label>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              count.current++;
              setItems([...items, count.current]);
            }}
            className="bg-[#ff0066] text-white border-none py-[15px] px-[25px] rounded-[50px] text-lg font-bold cursor-pointer w-[150px]"
          >
            Add item
          </motion.button>
        </div>
        <ul className="flex w-[300px] h-[300px] flex-col gap-[20px] list-none m-0 p-0">
          <AnimatePresence mode={popLayout ? "popLayout" : "sync"}>
            {items.map((id) => (
              <motion.li
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring" }}
                key={id}
                onClick={() => {
                  const newItems = [...items];
                  removeItem(newItems, id);
                  setItems(newItems);
                }}
                className="block bg-[#ff0066] h-[80px] w-full flex-[0_0_80px] rounded-[20px] list-none m-0 p-0"
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </GridComponent>
  );
}
