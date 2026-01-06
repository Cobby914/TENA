import { create } from "zustand";

export default create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 }))
}));