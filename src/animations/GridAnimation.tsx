import { motion } from "motion/react";
import { useState } from "react";
import GridComponent from "../components/GridComponent";
import "../styles/GridAnimationStyles.css";

export const GridAnimation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <GridComponent animationName="Grid Animation">
      <div className="container">
        <div className="form-wrapper">
          <motion.form layout className="form">
            <input className="input" placeholder="Email" />
            <motion.button
              layout
              style={{
                gridColumn: isSubmitted ? "1 / span 2" : "2",
                borderRadius: 9999,
              }}
              type="button"
              className="button"
              onClick={() => setIsSubmitted((submitted) => !submitted)}
            >
              <motion.span layout className="flex justify-center">
                <motion.span layout className="block">
                  {isSubmitted ? "Sent" : "Submit"}
                </motion.span>
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </GridComponent>
  );
};

export default GridAnimation;
