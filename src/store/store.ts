import {create} from "zustand/react";


interface Store {
    count: number;
    up: () => void
}

export const useStore = create<Store>()(set => ({
    count: 0,
    up: () => (set((state) => ({ count: state.count + 1})))
}))