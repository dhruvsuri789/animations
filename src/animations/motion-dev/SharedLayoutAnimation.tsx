"use client";

import GridComponent from "@/components/GridComponent";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  boxShadow:
    "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
};

/**
 * ==============   Data   ================
 */

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <GridComponent animationName="Shared Layout Animation">
      <div
        style={container}
        className="w-[480px] h-[60vh] max-h-[360px] rounded-xl bg-white overflow-hidden flex flex-col"
      >
        <nav className="bg-[#fdfdfd] pt-[5px] px-[5px] pb-0 rounded-[10px] rounded-bl-none rounded-br-none border border-solid border-[#eeeeee] h-[44px]">
          <ul className="list-none p-0 m-0 font-medium text-sm flex w-full">
            {tabs.map((item) => (
              <motion.li
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor: item === selectedTab ? "#eee" : "#eeeeee23",
                }}
                className="list-none p-0 m-0 font-medium text-sm rounded-[5px] rounded-bl-none rounded-br-none w-full py-[10px] px-[15px] relative bg-white cursor-pointer h-9 flex justify-between items-center flex-1 min-w-0 text-[#0f1115] select-none"
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#83e6f7]"
                    layoutId="underline"
                  />
                ) : null}
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[128px]"
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </GridComponent>
  );
}
