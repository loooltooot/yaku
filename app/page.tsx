'use client'

import CharsInputPanel from "@/components/charsInputPanel/charsInputPanel";
import WordPanel from "@/components/word-panel/wordPanel";
import { words } from "@/models/word";
import { useWordStore } from "@/stores/wordStore";

export function getRandomInt(max: number, min: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export default function Home() {
    const setChars = useWordStore((state: any) => state.setChars)
    const word = words[getRandomInt(words.length, 0)]
    setChars(word.value, word.hint)

    return (
        <>
            <WordPanel />
            <CharsInputPanel />
        </>
    )
}