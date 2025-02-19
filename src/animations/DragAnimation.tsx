import { motion, useMotionValue, useTransform } from "motion/react";
import GridComponent from "../components/GridComponent";

function DragAnimation() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#fb2c36", "#193cb8", "#fb2c36"]
  );
  return (
    <GridComponent animationName="Drag Animation">
      <motion.div
        className="bg-blue-800 w-32 h-32 rounded-md cursor-pointer"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{ x, scale, borderRadius, backgroundColor }}
      />
    </GridComponent>
  );
}

export default DragAnimation;
