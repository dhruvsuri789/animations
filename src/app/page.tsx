import AspectRatioAnimation from "@/animations/motion-dev/AspectRatioAnimation";
import DragAnimation from "@/animations/motion-dev/DragAnimation";
import DragLockAnimation from "@/animations/motion-dev/DragLockAnimation";
import EnterAnimation from "@/animations/motion-dev/EnterAnimation";
import ExitAnimation from "@/animations/motion-dev/ExitAnimation";
import KeyframeAnimation from "@/animations/motion-dev/KeyframeAnimation";
import NumberAnimation from "@/animations/motion-dev/NumberAnimation";
import RotateAnimation from "@/animations/motion-dev/RotateAnimation";
import SpringAnimation from "@/animations/motion-dev/SpringAnimation";
import TapAnimation from "@/animations/motion-dev/TapAnimation";
import ToggleAnimation from "@/animations/motion-dev/ToggleAnimation";
import TransitionAnimation from "@/animations/motion-dev/TransitionAnimation";
import WildcardKeyframes from "@/animations/motion-dev/WildcardKeyframes";
import GridOne from "@/components/GridOne";
import GridThree from "@/components/GridThree";

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
      </GridThree>
    </GridOne>
  );
}
