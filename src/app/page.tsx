import AnimationStates from "@/animations/motion-dev/AnimationStates";
import AspectRatioAnimation from "@/animations/motion-dev/AspectRatioAnimation";
import CarouselAnimation from "@/animations/motion-dev/CarouselAnimation";
import ConicGradientPointer from "@/animations/motion-dev/ConicGradientPointer";
import DragAnimation from "@/animations/motion-dev/DragAnimation";
import DragLockAnimation from "@/animations/motion-dev/DragLockAnimation";
import DragTransformAnimation from "@/animations/motion-dev/DragTransformAnimation";
import ElementScrollAnimation from "@/animations/motion-dev/ElementScrollAnimation";
import EnterAnimation from "@/animations/motion-dev/EnterAnimation";
import ExitAnimation from "@/animations/motion-dev/ExitAnimation";
import KeyframeAnimation from "@/animations/motion-dev/KeyframeAnimation";
import MotionPathAnimation from "@/animations/motion-dev/MotionPathAnimation";
import NumberAnimation from "@/animations/motion-dev/NumberAnimation";
import PathDrawingAnimation from "@/animations/motion-dev/PathDrawingAnimation";
import PathMorphing from "@/animations/motion-dev/PathMorphing";
import PointerAnimation from "@/animations/motion-dev/PointerAnimation";
import PopAnimation from "@/animations/motion-dev/PopAnimation";
import ReorderAnimation from "@/animations/motion-dev/ReorderAnimation";
import ReorderAnimationOne from "@/animations/motion-dev/ReorderAnimationOne";
import ReorderAnimationTwo from "@/animations/motion-dev/ReorderAnimationTwo";
import RotateAnimation from "@/animations/motion-dev/RotateAnimation";
import ScaleAnimation from "@/animations/motion-dev/ScaleAnimation";
import ScrollLinkedAnimation from "@/animations/motion-dev/ScrollLinkedAnimation";
import ScrollTriggered from "@/animations/motion-dev/ScrollTriggeredAnimation";
import ScrollVelocity from "@/animations/motion-dev/ScrollVelocity";
import SharedLayoutAnimation from "@/animations/motion-dev/SharedLayoutAnimation";
import SidebarVariantsAnimation from "@/animations/motion-dev/SidebarVariantsAnimation";
import SpringAnimation from "@/animations/motion-dev/SpringAnimation";
import TabAnimation from "@/animations/motion-dev/TabAnimation";
import TapAnimation from "@/animations/motion-dev/TapAnimation";
import ToggleAnimation from "@/animations/motion-dev/ToggleAnimation";
import ToggleAnimationTwo from "@/animations/motion-dev/ToggleAnimationTwo";
import TrackElementAnimation from "@/animations/motion-dev/TrackElementAnimation";
import TransitionAnimation from "@/animations/motion-dev/TransitionAnimation";
import UsePresenceAnimation from "@/animations/motion-dev/UsePresenceAnimation";
import UseTimeAnimation from "@/animations/motion-dev/UseTimeAnimation";
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
        <ReorderAnimation />
        <ElementScrollAnimation />
        <ScrollLinkedAnimation />
        <TrackElementAnimation />
        <UsePresenceAnimation />
        {/* <PathMorphing /> */}
        <ConicGradientPointer />
        <ScaleAnimation />
        <ReorderAnimationOne />
        <ReorderAnimationTwo />
      </GridThree>
      <GridTwo>
        {/* <PointerAnimation /> */}
        <MotionPathAnimation />
        {/* <ParallaxAnimation /> */}
        <PathDrawingAnimation />
        <ScrollTriggered />
        <AnimationStates />
        <UseTimeAnimation />
        <SharedLayoutAnimation />
        {/* <TabAnimation /> */}
        <DragTransformAnimation />
        <SidebarVariantsAnimation />
        <CarouselAnimation />
        <PopAnimation />
        <ScrollVelocity />
      </GridTwo>
    </GridOne>
  );
}
