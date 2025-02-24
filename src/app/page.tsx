import AspectRatioAnimation from "@/animations/motion-dev/AspectRatioAnimation";
import DragAnimation from "@/animations/motion-dev/DragAnimation";
import DragLockAnimation from "@/animations/motion-dev/DragLockAnimation";
import EnterAnimation from "@/animations/motion-dev/EnterAnimation";
import ExitAnimation from "@/animations/motion-dev/ExitAnimation";
import KeyframeAnimation from "@/animations/motion-dev/KeyframeAnimation";
import MotionPathAnimation from "@/animations/motion-dev/MotionPathAnimation";
import NumberAnimation from "@/animations/motion-dev/NumberAnimation";
import PathDrawingAnimation from "@/animations/motion-dev/PathDrawingAnimation";
import PointerAnimation from "@/animations/motion-dev/PointerAnimation";
import RotateAnimation from "@/animations/motion-dev/RotateAnimation";
import SpringAnimation from "@/animations/motion-dev/SpringAnimation";
import TapAnimation from "@/animations/motion-dev/TapAnimation";
import ToggleAnimation from "@/animations/motion-dev/ToggleAnimation";
import ToggleAnimationTwo from "@/animations/motion-dev/ToggleAnimationTwo";
import TransitionAnimation from "@/animations/motion-dev/TransitionAnimation";
import WildcardKeyframes from "@/animations/motion-dev/WildcardKeyframes";
import GridOne from "@/components/GridOne";
import GridThree from "@/components/GridThree";
import GridTwo from "@/components/GridTwo";

export default function HomePage() {
  return (
    <GridOne>
      <GridThree>
        <SpringAnimation />
        <DragAnimation />
        <EnterAnimation />
        <ExitAnimation />
        <TapAnimation />
        <NumberAnimation />
        <KeyframeAnimation />
        <WildcardKeyframes />
        <RotateAnimation />
        <TransitionAnimation />
        <AspectRatioAnimation />
        <ToggleAnimation />
        <DragLockAnimation />
        <ToggleAnimationTwo />
      </GridThree>
      <GridTwo>
        {/* <PointerAnimation /> */}
        <MotionPathAnimation />
        {/* <ParallaxAnimation /> */}
        <PathDrawingAnimation />
      </GridTwo>
    </GridOne>
  );
}
