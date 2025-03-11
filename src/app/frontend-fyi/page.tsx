import HelloWorld from "@/animations/frontend-fyi/HelloWorld";
import BreakpointAnimation from "@/animations/frontend-fyi/BreakpointAnimation";
import CarousalAnimation from "@/animations/frontend-fyi/CarousalAnimation";
import CSSVarAnimation from "@/animations/frontend-fyi/CSSVarAnimation";
import DragAnimation from "@/animations/frontend-fyi/DragAnimation";
import ExitAnimation from "@/animations/frontend-fyi/ExitAnimation";
import GestureAnimation from "@/animations/frontend-fyi/GestureAnimation";
import GridAnimation from "@/animations/frontend-fyi/GridAnimation";
import LayoutAnimationV1 from "@/animations/frontend-fyi/LayoutAnimationV1";
import LayoutAnimationV2 from "@/animations/frontend-fyi/LayoutAnimationV2";
import LayoutAnimationV3 from "@/animations/frontend-fyi/LayoutAnimationV3";
import LayoutAnimationV4 from "@/animations/frontend-fyi/LayoutAnimationV4";
import LayoutAnimationV5 from "@/animations/frontend-fyi/LayoutAnimationV5";
import MotionValues from "@/animations/frontend-fyi/MotionValues";
import MultiStepAnimation from "@/animations/frontend-fyi/MultiStepAnimation";
import NotificationAnimation from "@/animations/frontend-fyi/NotificationAnimation";
import ScrollBarAnimation from "@/animations/frontend-fyi/ScrollBarAnimation";
import ScrollBentoAnimation from "@/animations/frontend-fyi/ScrollBentoAnimation";
import ScrollStickyAnimation from "@/animations/frontend-fyi/ScrollStickyAnimation";
import ScrollViewAnimation from "@/animations/frontend-fyi/ScrollViewAnimation";
import ScrollViewAnimationV2 from "@/animations/frontend-fyi/ScrollViewAnimationV2";
import SquareAnimation from "@/animations/frontend-fyi/SquareAnimation";
import StaggeredAnimation from "@/animations/frontend-fyi/StaggeredAnimation";
import VariantAnimation from "@/animations/frontend-fyi/VariantAnimation";
import GridThree from "@/components/GridThree";
import GridOne from "@/components/GridOne";
import GridTwo from "@/components/GridTwo";
import AmieAnimation from "@/animations/frontend-fyi/AmieAnimation";
import InfiniteMarqueeAnimation from "@/animations/frontend-fyi/InfiniteMarqueeAnimation";

export default function FrontendAnimationsPage() {
  return (
    <GridOne>
      <GridThree>
        <HelloWorld />
        <SquareAnimation />
        <GestureAnimation />
        <MultiStepAnimation />
        <MotionValues />
        <DragAnimation />
        <CSSVarAnimation />
        <ExitAnimation />
        <VariantAnimation />
        <StaggeredAnimation />
        <BreakpointAnimation />
        <NotificationAnimation />
        <ScrollViewAnimation />
        <ScrollViewAnimationV2 />
        <ScrollBarAnimation />
        <LayoutAnimationV1 />
        <LayoutAnimationV2 />
        <LayoutAnimationV3 />
        <LayoutAnimationV4 />
        <GridAnimation />
      </GridThree>
      <GridTwo>
        <CarousalAnimation />
        <LayoutAnimationV5 />
        <ScrollBentoAnimation />
      </GridTwo>
      <GridOne>
        <ScrollStickyAnimation />
        <AmieAnimation />
        <InfiniteMarqueeAnimation />
      </GridOne>
    </GridOne>
  );
}
