import { PlayIcon, PauseIcon, SnailIcon, RabbitIcon } from "./Icons";
import { useState } from "react";

type Props = {
  activeQuoteIndex: number;
  speed: number;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  faster: () => void;
  slower: () => void;
};

export const Debug = ({
  activeQuoteIndex,
  speed,
  isPaused,
  setIsPaused,
  faster,
  slower,
}: Props) => {
  return (
    <div className="bg-black border mt-4 text-white rounded-2xl p-5 w-[400px] max-w-full [font-family:'Courier_new']">
      <p className="font-bold">Debug</p>
      <p>Active quote index: {activeQuoteIndex}</p>
      <p>Speed: {speed}ms</p>
      <div className="flex flex-wrap gap-2 mt-3">
        <button
          onClick={() => setIsPaused((paused) => !paused)}
          className="bg-white p-3 rounded-full text-black"
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          onClick={slower}
          className="flex gap-2 bg-white p-3 rounded-full text-black"
        >
          Slowerrr.. <SnailIcon />
        </button>
        <button
          onClick={faster}
          className="flex gap-2 bg-white p-3 rounded-full text-black"
        >
          FASTER <RabbitIcon />
        </button>
      </div>
    </div>
  );
};

export const useSpeedControl = () => {
  const [speed, setSpeed] = useState(4000);

  const faster = () => {
    setSpeed((currentSpeed) => {
      const delta = currentSpeed > 1000 ? 1000 : 100;
      const newSpeed = currentSpeed - delta;

      return Math.max(100, newSpeed);
    });
  };

  const slower = () => {
    setSpeed((currentSpeed) => {
      const delta = currentSpeed > 1000 ? 1000 : 100;
      const newSpeed = currentSpeed + delta;

      return Math.min(10000, newSpeed);
    });
  };

  return { speed, setSpeed, faster, slower };
};
