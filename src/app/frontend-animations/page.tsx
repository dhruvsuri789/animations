import HelloWorld from "@/animations/HelloWorld";
import BreakpointAnimation from "@/animations/BreakpointAnimation";
import CarousalAnimation from "@/animations/CarousalAnimation";
import CSSVarAnimation from "@/animations/CSSVarAnimation";
import DragAnimation from "@/animations/DragAnimation";
import ExitAnimation from "@/animations/ExitAnimation";
import GestureAnimation from "@/animations/GestureAnimation";
import GridAnimation from "@/animations/GridAnimation";
import LayoutAnimationV1 from "@/animations/LayoutAnimationV1";
import LayoutAnimationV2 from "@/animations/LayoutAnimationV2";
import LayoutAnimationV3 from "@/animations/LayoutAnimationV3";
import LayoutAnimationV4 from "@/animations/LayoutAnimationV4";
import LayoutAnimationV5 from "@/animations/LayoutAnimationV5";
import MotionValues from "@/animations/MotionValues";
import MultiStepAnimation from "@/animations/MultiStepAnimation";
import NotificationAnimation from "@/animations/NotificationAnimation";
import ScrollBarAnimation from "@/animations/ScrollBarAnimation";
import ScrollBentoAnimation from "@/animations/ScrollBentoAnimation";
import ScrollStickyAnimation from "@/animations/ScrollStickyAnimation";
import ScrollViewAnimation from "@/animations/ScrollViewAnimation";
import ScrollViewAnimationV2 from "@/animations/ScrollViewAnimationV2";
import SquareAnimation from "@/animations/SquareAnimation";
import StaggeredAnimation from "@/animations/StaggeredAnimation";
import VariantAnimation from "@/animations/VariantAnimation";

export default function FrontendAnimationsPage() {
  return (
    <>
      <HelloWorld />
      <SquareAnimation />
      <GestureAnimation />
      <MultiStepAnimation />
      <MotionValues />
      <DragAnimation />
      <CSSVarAnimation />
      <ExitAnimation />
      <VariantAnimation />
      <CarousalAnimation />
      <StaggeredAnimation />
      <BreakpointAnimation />
      <NotificationAnimation />
      <ScrollViewAnimation />
      <ScrollViewAnimationV2 />
      <ScrollBarAnimation />
      <ScrollBentoAnimation />
      <ScrollStickyAnimation />
      <LayoutAnimationV1 />
      <LayoutAnimationV2 />
      <LayoutAnimationV3 />
      <LayoutAnimationV4 />
      <LayoutAnimationV5 />
      <GridAnimation />
    </>
  );
}
