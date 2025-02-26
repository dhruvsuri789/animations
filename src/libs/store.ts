import { create } from "zustand";

type FeatureStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
}));
