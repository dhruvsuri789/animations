"use client";
import { motion } from "motion/react";
import { useState } from "react";
import GridComponent from "../components/GridComponent";

// In a real app we of course should have a url for each item too.
const menuItems = ["Home", "Invoices", "Usage", "Profile", "Settings"];

const StaggeredAnimation = () => {
  const [navigationIsVisible, setNavigationIsVisible] = useState(false);

  return (
    <GridComponent animationName="Staggered Animation">
      <motion.div
        initial="hidden"
        animate={navigationIsVisible ? "visible" : "hidden"}
        variants={{
          hidden: {
            width: 74,
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              // Use either when or delay here.
              // when: "afterChildren",
              delay: (menuItems.length - 2) * 0.1,
            },
          },
          visible: {
            width: 200,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="bg-gray-800 p-3 text-white rounded-tr-2xl rounded-br-2xl"
      >
        <button
          className="bg-white/5 border border-black rounded-md p-3 mb-4 cursor-pointer"
          onClick={() => setNavigationIsVisible((visible) => !visible)}
        >
          <span className="sr-only">Toggle navigation</span>
          <HamburgerIcon />
        </button>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="py-3 hover:bg-white/5 px-3 rounded-md transition-colors cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </GridComponent>
  );
};

const HamburgerIcon = () => (
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
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export default StaggeredAnimation;
