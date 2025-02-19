import { motion } from "motion/react";

type Song = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  description: string;
};

interface SongPreviewProps {
  song: Song;
  setSelectedSong: (song: Song) => void;
}

export const SongPreview = ({ song, setSelectedSong }: SongPreviewProps) => {
  return (
    <motion.div
      layoutId={`song-background-${song.id}`}
      style={{ borderRadius: 12 }}
      className="grid cursor-pointer grid-cols-1 grid-rows-2 items-center gap-x-3 bg-white p-4 text-black md:grid-cols-[auto_1fr]"
      onClick={() => setSelectedSong(song)}
    >
      <motion.img
        layoutId={`song-image-${song.id}`}
        src={song.cover}
        alt={song.title}
        style={{ borderRadius: 12 }}
        className="row-span-2 h-8 w-8"
      />

      <motion.div
        layoutId={`song-title-${song.id}`}
        className="text-lg font-bold leading-snug"
      >
        <motion.span className="block" layout>
          {song.title}
        </motion.span>
      </motion.div>
      <motion.div
        layoutId={`song-artist-${song.id}`}
        className="text-sm leading-snug"
      >
        <motion.span className="block" layout>
          {song.artist}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
