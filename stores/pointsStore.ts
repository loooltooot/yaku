import { create } from "zustand"

export const usePointsStore = create((set) => ({
    points: 0,
    playersPoints: { 0: 0, 1: 0 },
    currentPlayer: 0,
    setPoints: (newPoints: Number) => set({
        points: newPoints
    }),
    setPlayersPoints: (newPlayerPoints: any) => set({
        playersPoints: newPlayerPoints
    }),
    setCurrentPlayer: (newCurrentPlayer: Number) => set({
        currentPlayer: newCurrentPlayer
    }),
    wipePoints: () => set({
        points: 0,
    }),
    wipeAllPoints: () => set({
        points: 0,
        playersPoints: { "0": 0, "1": 0 },
        currentPlayer: 0,
    }),
    swapPlayer: () => set((state: any) => ({
        currentPlayer: Number(!state.currentPlayer)
    }))
}))