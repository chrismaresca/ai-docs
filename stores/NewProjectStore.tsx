import { create } from "zustand";

interface NewProject {
  newProjectInProgress: boolean;
  startNewProject: () => void;
  resetNewProject: () => void;
}

export const useNewProjectStore = create<NewProject>((set) => ({
  newProjectInProgress: false,
  startNewProject: () => set({ newProjectInProgress: true }),
  resetNewProject: () => set({ newProjectInProgress: false }),
}));
