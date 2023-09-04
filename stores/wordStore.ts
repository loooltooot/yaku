import { Char } from "@/models/word"
import { create } from "zustand"

export const useWordStore = create((set) => ({
    chars: Array<Char>,
    word: '',
    hint: '',
    disabledChars: [],
    setChars: (word: string, hint: string) => set(
        {
            chars: word.split('').map(char => {
                return { value: char, isVisible: false }
            }),
            word: word,
            hint: hint,
        }
    ),
    setCharVisible: (chars: Char[]) => set({
        chars: chars
    }),
    addDisabledChar: (disabledChar: string) => set((state: any) => ({
        disabledChars: [...state.disabledChars, disabledChar]
    })),
    wipeDisabledChars: () => set({
        disabledChars: []
    })
}))