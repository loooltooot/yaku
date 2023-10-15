'use client'

import CharsInputPanel from "@/components/charsInputPanel/charsInputPanel";
import WordPanel from "@/components/word-panel/wordPanel";
import { words } from "@/models/word";
import { getRandomInt } from "@/scripts/getRandomInt";
import { useWordStore } from "@/stores/wordStore";

export default function Home() {
    const setChars = useWordStore((state: any) => state.setChars)
    const word = words[getRandomInt(words.length, 0)]
    setChars(word.value, word.hint)

    return (
        <>
            <WordPanel />
            <CharsInputPanel />
            <span className="titles">by <a href="https://loooltooot.github.io">@loooltooot</a> (Emir Zakrewski)</span>
        </>
    )
}