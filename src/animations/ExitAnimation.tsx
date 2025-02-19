import { AnimatePresence, motion } from "motion/react";
import GridComponent from "../components/GridComponent";
import { useState } from "react";

function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <GridComponent animationName="Exit Animation">
      <div className="grid w-full gap-10 min-h-[400px] items-start rounded-3xl p-5 shadow-2xl">
        <button
          className="mx-auto rounded-full bg-gray-800 px-5 py-3 text-white"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          Toggle visibility
        </button>
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mx-auto w-full max-w-[300px] rounded-2xl bg-white p-4 text-black"
            >
              <div className="mb-3 aspect-video w-full rounded-xl bg-gray-300" />
              Random card
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GridComponent>
  );
}

export default ExitAnimation;
