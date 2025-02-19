import { AnimatePresence, motion } from "motion/react";
import GridComponent from "../components/GridComponent";
import { useState } from "react";

function VariantAnimation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <GridComponent animationName="Variant Animation">
      <button
        className="bg-gray-800 px-4 py-2 absolute bottom-6 left-[50%] -translate-x-[50%] rounded-full cursor-pointer"
        onClick={() => setOpenModal((open) => !open)}
      >
        Toggle Dialog
      </button>

      <AnimatePresence>
        {openModal && (
          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
              },
              closed: {
                opacity: 0,
                y: 20,
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="pointer-events-none absolute inset-0 flex items-end pb-25 justify-center"
          >
            <div className="w-[300px] max-w-full bg-white text-black rounded-2xl p-2 pb-6 pointer-events-auto overflow-hidden">
              <header className="flex justify-end">
                <motion.button
                  variants={{
                    open: {
                      scale: 1,
                    },
                    closed: {
                      scale: 0,
                    },
                  }}
                  onClick={() => setOpenModal(false)}
                  aria-label="Close"
                  className="block w-8 h-8 bg-black rounded-full p-2 cursor-pointer"
                >
                  <svg viewBox="0 0 512 512" className="fill-white">
                    <path d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z" />
                  </svg>
                </motion.button>
              </header>
              <div className="mt-4">
                <motion.img
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                    },
                    closed: {
                      opacity: 0,
                      y: 20,
                    },
                  }}
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1545063914-a1a6ec821c88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFtYml8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <p className="mt-4 font-bold text-2xl px-6">Bambi</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GridComponent>
  );
}

export default VariantAnimation;
