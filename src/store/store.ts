import {create} from "zustand/react";
import {combine} from "zustand/middleware";


export const useStore = create(combine(
    {squares: Array(9).fill('null'), queue: 0},
    (set) => ({
        setSquare: (i: number) => set((state) => {
            if(state.squares[i] !== 'null') return {}

            const next = state.squares.slice()
            next[i] = state.queue === 0 ? 'x' : 'o'
            return {squares: next, queue: state.queue === 0 ? 1 : 0}
        }),
        clean: () => set(() => {
            return {squares: Array(9).fill('null'), queue: 0}
        })
    })
))