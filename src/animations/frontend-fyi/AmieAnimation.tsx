"use client";
import GridComponent from "@/components/GridComponent";
import { useFeatureStore } from "@/libs/store";
import { cn } from "@/utils/cn";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

type CardProps = {
  id: string;
};

const ToDo = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient={gradients[0]}>
      <span />
    </FeatureCard>
  );
};

const Colors = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient={gradients[1]}>
      <span />
    </FeatureCard>
  );
};

const Availablility = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient={gradients[2]}>
      <span />
    </FeatureCard>
  );
};

const Music = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient={gradients[3]}>
      <span />
    </FeatureCard>
  );
};

const SchedulingLinks = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient={gradients[4]}>
      <span />
    </FeatureCard>
  );
};

const Team = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient={gradients[5]}>
      <span />
    </FeatureCard>
  );
};

const features = [
  { title: "Use your calendar as a todo list", id: "todo-list", card: ToDo },
  { title: "Color your calendar to organize", id: "colors", card: Colors },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availablility,
  },
  { title: "Track-what you listened-to-when", id: "music", card: Music },
  {
    title: "Send scheduling Links guests Love",
    id: "scheduling-links",
    card: SchedulingLinks,
  },
  { title: "Always know what your team is up to", id: "team", card: Team },
];

function Hero() {
  return (
    <div className="flex flex-col gap-8 mb-20">
      <h1 className="text-7xl text-black font-bold">
        The joyful productivity app.{" "}
        <span className="text-slate-300">
          Schedule time for todos, events, and contacts
        </span>
      </h1>
      <div className="aspect-video w-[500px] rounded-xl bg-slate-950"></div>
    </div>
  );
}

type FeatureTitleProps = {
  children: React.ReactNode;
  id: string;
};

function FeatureTitle({ children, id }: FeatureTitleProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const isInViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id);
    }

    if (!isInView && isInViewFeature === id) {
      setInViewFeature(null);
    }
  }, [isInView, id, setInViewFeature, isInViewFeature]);

  return (
    <p
      ref={ref}
      className={cn(
        "text-3xl font-bold py-16 transition-colors",
        isInView ? "text-slate-800" : "text-slate-300"
      )}
    >
      {children}
    </p>
  );
}

const gradients = [
  "from-[#f7f0ff] to-[#a78afe]",
  "from-[#f5fbff] to-[#addeff]",
  "from-[#f5fff7] to-[#adf8ff]",
  "from-[#f5fff5] to-[#adffd8]",
  "from-[#fff7f5] to-[#ffd8ad]",
  "from-[#fef5ff] to-[#ffade1]",
];

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

function FeatureCard({ gradient, children, id }: FeatureCardProps) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={cn(
        "h-full w-full rounded-2xl bg-gradient-to-br absolute inset-0 transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
}

export const AmieAnimation = () => {
  return (
    <GridComponent
      animationName="Amie Animation"
      className="flex-col justify-start h-screen bg-slate-50 py-20 overflow-y-scroll"
    >
      <div className="mx-auto max-w-6xl px-4 bg-slate-50">
        <Hero />
        <div className="flex w-full gap-20 relative items-start">
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sticky top-0 h-screen flex items-center">
            <div className="relative w-full aspect-square rounded-2xl bg-slate-100">
              {features.map((feature) => (
                <feature.card key={feature.id} id={feature.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </GridComponent>
  );
};

export default AmieAnimation;
