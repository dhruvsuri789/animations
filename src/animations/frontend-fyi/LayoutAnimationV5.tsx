"use client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import GridComponent from "../../components/GridComponent";

import { songs } from "@/data/songs";
import { DetailView } from "../../components/DetailView";
import { SongPreview } from "../../components/SongPreview";

type Song = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  description: string;
};

export const LayoutAnimationV5 = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  return (
    <GridComponent animationName="Layout Animation V5">
      <AnimatePresence>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[400px] rounded-3xl border border-white/10 bg-white/10 text-white p-2 sm:p-4 overflow-clip">
          <div className="mb-6 flex aspect-video flex-col items-start rounded-2xl bg-white/10 p-4 text-2xl font-bold md:p-8">
            <p>Trending music</p>
            <a className="mt-auto rounded-full bg-white/10 p-2 text-md font-normal">
              Explore now ▸
            </a>
          </div>
          <p className="mb-3 text-xl font-bold">Your favorites</p>
          <div className="grid grid-cols-1 gap-4">
            {songs.map((song) => (
              <SongPreview
                key={song.id}
                song={song}
                setSelectedSong={setSelectedSong}
              />
            ))}
          </div>
          {selectedSong && (
            <DetailView
              onClose={() => setSelectedSong(null)}
              song={selectedSong}
            />
          )}
        </div>
      </AnimatePresence>
    </GridComponent>
  );
};

export default LayoutAnimationV5;
