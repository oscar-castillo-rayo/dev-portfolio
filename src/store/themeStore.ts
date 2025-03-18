import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  darkMode: boolean;
  toogleDarkMode: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      darkMode: true,
      toogleDarkMode: () =>
        set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "theme-storage",
    }
  )
);
