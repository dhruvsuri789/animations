"use client";
import GridComponent from "@/components/GridComponent";
import { useFeatureStore } from "@/libs/store";
import { cn } from "@/utils/cn";
import { stagger, useAnimate, useInView } from "motion/react";
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
      <img
        className="rounded-xl shadow-xl absolute top-[10%] left-[10%] w-[20%]"
        src="/amie-covers/cover-1.webp"
        alt="cover-song"
      />
      <img
        className="rounded-xl shadow-xl absolute top-[20%] left-[70%] w-[25%]"
        src="/amie-covers/cover-2.webp"
        alt="cover-song"
      />
      <img
        className="rounded-xl shadow-xl absolute top-[60%] left-[20%] w-[30%]"
        src="/amie-covers/cover-3.webp"
        alt="cover-song"
      />
      <div className="absolute left-[40%] top-20 h-32 w-16 rounded-[96px] shadow-lg bg-[#1ed660]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-33.4974 -55.829 290.3108 334.974"
        >
          <path
            d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="absolute "></div>
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
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    card: ToDo,
    visual: OtherVisual,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availablility,
    visual: OtherVisual,
  },
  {
    title: "Track-what you listened-to-when",
    id: "music",
    card: Music,
    visual: MusicVisual,
  },
  {
    title: "Send scheduling Links guests Love",
    id: "scheduling-links",
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: Team,
    visual: OtherVisual,
  },
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
        isInView ? "text-slate-800" : "text-slate-300",
        "feature-title"
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
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={cn(
        "h-full w-full rounded-2xl bg-gradient-to-br absolute inset-0 transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
      <button
        className="bg-black text-white rounded-xl absolute bottom-6 right-6 px-4 py-2 shadow-lg"
        onClick={() => setFullscreenFeature(id)}
      >
        Show me
      </button>
    </div>
  );
}

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

function Visual({ children, id }: VisualProps) {
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
}

function MusicVisual({ id }: Props) {
  return (
    <Visual id={id}>
      <img src="/amie-covers/window-spotify.png" alt="spotify-cover" />
    </Visual>
  );
}

function OtherVisual({ id }: Props) {
  return (
    <Visual id={id}>
      <img src="/amie-covers/window-spotify.png" alt="spotify-cover" />
    </Visual>
  );
}

export const AmieAnimation = () => {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${fullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
      ]);
    }
  }, [fullscreenFeature, animate, lastFullscreenFeature]);

  return (
    <GridComponent
      animationName="Amie Animation"
      className="flex-col justify-start h-screen bg-slate-50 py-20 overflow-y-scroll"
    >
      <div className="mx-auto max-w-6xl px-4 bg-slate-50">
        <Hero />
        <div ref={scope}>
          {features.map((feature) => (
            <feature.visual key={feature.id} id={feature.id} />
          ))}
          <button
            className="bg-black text-white rounded-xl fixed bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 shadow-lg"
            onClick={() => setFullscreenFeature(null)}
          >
            Back to site
          </button>
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
        </div>
        <div className="h-screen"></div>
      </div>
    </GridComponent>
  );
};

export default AmieAnimation;
