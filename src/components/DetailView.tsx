import { motion } from "motion/react";

type Song = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  description: string;
};

interface DetailViewProps {
  song: Song;
  onClose: () => void;
}

export const DetailView = ({ song, onClose }: DetailViewProps) => {
  return (
    <motion.div
      layoutId={`song-background-${song.id}`}
      style={{ borderRadius: 12 }}
      className="absolute inset-0 z-10 grid auto-rows-min place-items-center bg-white p-4 text-center text-black"
    >
      <motion.img
        layoutId={`song-image-${song.id}`}
        src={song.cover}
        alt={song.title}
        style={{ borderRadius: 12 }}
        className="mb-4 aspect-square w-[200px]"
      />

      <motion.div
        layoutId={`song-title-${song.id}`}
        className="text-lg font-bold"
      >
        <motion.span className="block" layout>
          {song.title}
        </motion.span>
      </motion.div>
      <motion.div layoutId={`song-artist-${song.id}`} className="text-sm">
        <motion.span className="block" layout>
          {song.artist}
        </motion.span>
      </motion.div>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="max-w-[80%] text-sm"
      >
        {song.description}
      </motion.p>
      <motion.button
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { ease: "easeInOut", delay: 0.3, duration: 0.5 },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        className="mt-4 w-full rounded-full bg-black px-4 py-2 text-white cursor-pointer"
      >
        Back
      </motion.button>
    </motion.div>
  );
};
