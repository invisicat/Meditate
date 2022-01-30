import create from "zustand";

import { Ambience } from "@/components/forms/start/ChooseAmbience";


export type MeditationContext = {
    ambience: Ambience[];
    setAmbience: (ambience: Ambience[]) => void;
}

const useMeditationStore = create<MeditationContext>(set => ({
    ambience: [],
    setAmbience: (ambience: Ambience[]) => set(state => ({ ...state, ambience })),
}));





export default useMeditationStore;