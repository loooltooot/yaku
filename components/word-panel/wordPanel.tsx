'use client'

import { useWordStore } from "@/stores/wordStore"
import Char from "./__char/char"
import styles from './wordPanel.module.scss'
import { Char as iChar, words } from "@/models/word"
import { getRandomInt } from "@/app/page"

export default function WordPanel() {
    const setChars = useWordStore((state: any) => state.setChars)
    const wipeDisabledChars = useWordStore((state: any) => state.wipeDisabledChars)
    const chars: iChar[] = useWordStore((state: any) => state.chars)
    const hint: string = useWordStore((state: any) => state.hint)

    return (
        <section className={styles.panel}>
            <ul>
                {chars.map((char, index) => (
                    <li key={index}>
                        <Char char={char.value} isVisible={char.isVisible} />
                    </li>
                ))}
            </ul>
            <span>
                {hint}
            </span>
            <button onClick={() => {
                const word = words[getRandomInt(words.length, 0)]
                setChars(word.value, word.hint)
                wipeDisabledChars()
            }}>
                загадать другое слово
            </button>
        </section>
    )
}