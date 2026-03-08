import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const USER_STORE_NAME = 'agorapp-user-store';
const LEGACY_USER_STORE_NAME = 'ainavoice-user-store';

function migrateLegacyUserStore() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const currentStore = window.localStorage.getItem(USER_STORE_NAME);
    if (currentStore) {
      return;
    }

    const legacyStore = window.localStorage.getItem(LEGACY_USER_STORE_NAME);
    if (!legacyStore) {
      return;
    }

    // Preserve existing user progression when the persisted key changes.
    window.localStorage.setItem(USER_STORE_NAME, legacyStore);
    window.localStorage.removeItem(LEGACY_USER_STORE_NAME);
  } catch {
    // Ignore storage access errors and keep app behavior functional.
  }
}

migrateLegacyUserStore();

export const useUserStore = create(
  persist(
    (set) => ({
      xp: 0,
      unlockedModules: [1],
      completedLessons: [],
      hasSeenOnboarding: false,
      addXp: (amount) =>
        set((state) => ({
          xp: state.xp + amount
        })),
      completeOnboarding: () =>
        set({
          hasSeenOnboarding: true
        }),
      completeLesson: (moduleId, xpReward = 0) =>
        set((state) => {
          const completedLessons = state.completedLessons ?? [];

          if (completedLessons.includes(moduleId)) {
            return state;
          }

          return {
            xp: state.xp + xpReward,
            completedLessons: [...completedLessons, moduleId]
          };
        }),
      unlockModule: (id) =>
        set((state) => {
          if (state.unlockedModules.includes(id)) {
            return state;
          }

          return {
            unlockedModules: [...state.unlockedModules, id]
          };
        }),
      resetProgress: () =>
        set({
          xp: 0,
          unlockedModules: [1],
          completedLessons: []
        })
    }),
    {
      name: USER_STORE_NAME,
      partialize: (state) => ({
        xp: state.xp,
        unlockedModules: state.unlockedModules,
        completedLessons: state.completedLessons,
        hasSeenOnboarding: state.hasSeenOnboarding
      })
    }
  )
);
