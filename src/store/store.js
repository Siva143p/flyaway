import { addDays } from "date-fns";
import { create } from "zustand";

const today = new Date();

const useStore = create((set) => ({
  airport: {},
  setAirport: (airport) => set({ airport }),

  searchResults: [],
  setSearchResults: (searchResults) => set({ searchResults }),

  airports: [],
  setAirports: (airports) => set({ airports }),

  dropTime: "00:00",
  pickUPTime: "00:00",
  dropDate: today,
  pickUPDate: addDays(today, 7),

  setDropTime: (dropTime) => set({ dropTime }),
  setPickUPTime: (pickUPTime) => set({ pickUPTime }),
  setDropDate: (dropDate) => set({ dropDate }),
  setPickUpDate: (pickUPDate) => set({ pickUPDate }),
}));

export default useStore;
