import { feedback } from "@/types/types";
import { create } from "zustand";

interface feedbackState {
  feedback: feedback[];
  addFeedback: (item: feedback) => void;
  addComment: (id: number) => void;
}

export const useFeedbackStore = create<feedbackState>((set) => ({
  feedback: [],
  addFeedback: (item) =>
    set((state) => ({ feedback: [...state.feedback, item] })),
  addComment: (id) => {
    set((state) => ({ feedback: [...state.feedback] }));
  },
}));
