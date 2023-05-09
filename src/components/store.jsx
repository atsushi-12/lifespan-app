import create from "zustand";


export const useStore = create((set) => ({
  visibility: false,
  setVisibility: () =>
    set((state)=>({visibility: !state.visibility})),//!はtrueだったらfalse,falseだったらtrue
}));
