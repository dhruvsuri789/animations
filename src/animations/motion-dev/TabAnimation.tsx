"use client";

import GridComponent from "@/components/GridComponent";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion, Reorder } from "motion/react";
import { useState } from "react";

export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}

interface TabProps {
  item: Ingredient;
  isSelected: boolean;
  onClick: () => void;
  onRemove: () => void;
}

export const Tab = ({ item, onClick, onRemove, isSelected }: TabProps) => {
  return (
    <Reorder.Item
      value={item}
      id={item.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        backgroundColor: isSelected ? "#f3f3f3" : "#fff",
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: "#e3e3e3" }}
      className={isSelected ? "selected" : ""}
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.icon} ${item.label}`}</motion.span>
      <motion.div
        layout
        className="absolute top-0 bottom-0 right-[10px] flex items-center justify-end flex-shrink-0"
      >
        <motion.button
          onPointerDown={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          initial={false}
          animate={{ backgroundColor: isSelected ? "#e3e3e3" : "#fff" }}
        >
          <CloseIcon />
        </motion.button>
      </motion.div>
    </Reorder.Item>
  );
};

function removeItem<T>([...arr]: T[], item: T) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
  return arr;
}

function closestItem<T>(arr: T[], item: T) {
  const index = arr.indexOf(item);
  if (index === -1) {
    return arr[0];
  } else if (index === arr.length - 1) {
    return arr[arr.length - 2];
  } else {
    return arr[index + 1];
  }
}

export default function TabAnimation() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item: Ingredient) => {
    if (item === selectedTab) {
      setSelectedTab(closestItem(tabs, item));
    }

    setTabs(removeItem(tabs, item));
  };

  const add = () => {
    const nextItem = getNextIngredient(tabs);

    if (nextItem) {
      setTabs([...tabs, nextItem]);
      setSelectedTab(nextItem);
    }
  };

  return (
    <GridComponent animationName="Tab Animation (Shared Layout)">
      <div
        style={window}
        className="w-[480px] h-[360px] rounded-[10px] bg-white overflow-hidden flex flex-col"
      >
        <nav className="bg-[#fdfdfd] pt-[5px] px-[5px] pb-0 rounded-[10px] rounded-bl-none rounded-br-none border border-solid border-[#eeeeee] h-[44px] grid grid-cols-[1fr_35px] max-w-[480px] overflow-hidden">
          <Reorder.Group
            as="ul"
            axis="x"
            onReorder={setTabs}
            className="flex-1 flex justify-start items-end flex-nowrap w-[420px] pr-[10px]"
            values={tabs}
          >
            <AnimatePresence initial={false}>
              {tabs.map((item) => (
                <Tab
                  key={item.label}
                  item={item}
                  isSelected={selectedTab === item}
                  onClick={() => setSelectedTab(item)}
                  onRemove={() => remove(item)}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
          <motion.button
            className={cn(
              "w-[30px] h-[30px] bg-[#eee] rounded-full border-0 cursor-pointer self-center",
              tabs.length === allIngredients.length &&
                "opacity-[0.4] cursor-default pointer-events-none"
            )}
            onClick={add}
            disabled={tabs.length === allIngredients.length}
            whileTap={{ scale: 0.9 }}
          >
            <AddIcon />
          </motion.button>
        </nav>
        <div className="flex items-center justify-center flex-1 text-[128px] select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <StyleSheet />
    </GridComponent>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 20 20"
    >
      <path
        d="M 3 3 L 17 17"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      ></path>
      <path
        d="M 17 3 L 3 17"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}

function AddIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 20 20"
      style={{ transform: "rotate(45deg)", stroke: "black" }}
    >
      <path
        d="M 3 3 L 17 17"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      ></path>
      <path
        d="M 17 3 L 3 17"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}

/**
 * ==============   Styles   ================
 */

const window: React.CSSProperties = {
  boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)`,
};

function StyleSheet() {
  return (
    <style>
      {`
        ul,
        li {
          list-style: none;
          padding: 0;
          margin: 0;
          font-weight: 500;
          font-size: 14px;
        }

        li {
          border-radius: 5px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          width: 100%;
          padding: 10px 15px;
          position: relative;
          background: white;
          cursor: pointer;
          height: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          user-select: none;
        }

        li span {
          flex-shrink: 1;
          flex-grow: 1;
          line-height: 18px;
          white-space: nowrap;
          display: block;
          min-width: 0;
          padding-right: 30px;
          mask-image: linear-gradient(to left, transparent 20px, #fff 40px);
          -webkit-mask-image: linear-gradient(to left, transparent 20px, #fff 40px);
        }

        li button {
            width: 20px;
            height: 20px;
            border: 0;
            background: #fff;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            stroke: #000;
            margin-left: 10px;
            cursor: pointer;
            flex-shrink: 0;
          }
      `}
    </style>
  );
}
