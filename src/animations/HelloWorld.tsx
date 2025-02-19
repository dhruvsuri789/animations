import { motion } from "motion/react";
import GridComponent from "../components/GridComponent";

/* const Button = forwardRef((props, ref: ForwardedRef<HTMLButtonElement>) => {
  return <button ref={ref}>...</button>;
});

const MotionButton = motion(Button); */

function HelloWorld() {
  return (
    <GridComponent animationName="Hello World">
      <div className="text-3xl">
        <motion.button
          className="bg-red-500 text-slate-200 p-5 rounded-lg cursor-pointer"
          animate={{
            // backgroundColor: "#3b82f6",
            // color: "white",
            // scale: 2,
            // y: -20,
            scaleX: 2,
            scaleY: 2,
            y: "50%",
          }}
          initial={{
            backgroundColor: "#fb2c36",
            color: "#e2e8f0",
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.3,
            repeatType: "reverse",
            // scaleX: {
            //   delay: 2,
            //   repeatDelay: 2,
            //   repeat: Infinity,
            //   ease: "easeIn",
            // },
            type: "spring",
            // bounce: 40,
            // damping: 10,
            // mass: 3,
            // stiffness: 30,
            // velocity: 100,
          }}
        >
          Hello World
        </motion.button>
      </div>
    </GridComponent>
  );
}

export default HelloWorld;
