import { create } from 'zustand';


// movie store
export const movieStore = create((set) => ({
    query: 'random',
    page: 1,
    setQuery: (newQuery) => set({ query: newQuery }),
    setPage: (newPage) => set({ page: newPage }),
}));
