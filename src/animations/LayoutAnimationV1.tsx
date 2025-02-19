import { motion } from "motion/react";
import { useState } from "react";
import GridComponent from "../components/GridComponent";

export const LayoutAnimationV1 = () => {
  const [sent, setSent] = useState(false);

  return (
    <GridComponent animationName="Layout Animation V1">
      <div className="grid place-items-center w-[95%] mx-auto">
        <div className="bg-black rounded-2xl p-3 w-full max-w-[600px]">
          <form className="relative pr-20">
            <input
              className="rounded-full bg-gray-800 px-5 py-3 w-full"
              placeholder="Email"
            />
            <motion.button
              layout
              type="button"
              style={{
                borderRadius: 999,
                backgroundColor: sent ? "#8aca65" : "#ffffff",
                color: sent ? "#fff" : "#000",
                width: sent ? "100%" : "5rem",
              }}
              onClick={() => setSent((s) => !s)}
              className="flex items-center justify-center bg-white absolute right-0 top-0 bottom-0 h-12 w-20"
            >
              <motion.span layout className="block">
                <SendHorizontal />
              </motion.span>
              {sent && (
                <motion.span
                  initial={{ opacity: 0, x: "50%" }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3 },
                  }}
                  className="ml-2"
                >
                  Sent!
                </motion.span>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </GridComponent>
  );
};

const SendHorizontal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 3 3 9-3 9 19-9Z" />
    <path d="M6 12h16" />
  </svg>
);

export default LayoutAnimationV1;
