import { addDays } from "date-fns";
import { create } from "zustand";

const today = new Date();

const useStore = create((set, get) => ({
  airport: {},
  setAirport: (airport) => set({ airport }),

  searchResults: [],
  setSearchResults: (searchResults) => set({ searchResults }),

  airports: [],
  setAirports: (airports) => set({ airports }),

  dropTime: "00:00",
  pickUPTime: "00:00",
  dropDate: today,
  pickUPDate: addDays(today, 7), // Default: 7 days from today

  setDropTime: (dropTime) => set({ dropTime }),
  setPickUPTime: (pickUPTime) => set({ pickUPTime }),

  setDropDate: (dropDate) =>
    set(() => ({
      dropDate,
      pickUPDate: addDays(dropDate, 7), // Update pickUPDate when dropDate changes
    })),

  setPickUpDate: (pickUPDate) => set({ pickUPDate }),
}));

export default useStore;
