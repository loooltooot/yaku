'use client'

import { useWordStore } from "@/stores/wordStore"
import Char from "./__char/char"
import styles from './wordPanel.module.scss'
import { Char as iChar, words } from "@/models/word"
import { getRandomInt } from "@/scripts/getRandomInt"
import Counter from "./__counter/counter"
import { usePointsStore } from "@/stores/pointsStore"

export default function WordPanel() {
    const setChars = useWordStore((state: any) => state.setChars)
    const wipeDisabledChars = useWordStore((state: any) => state.wipeDisabledChars)
    const chars: iChar[] = useWordStore((state: any) => state.chars)
    const hint: string = useWordStore((state: any) => state.hint)
    const word: string = useWordStore((state: any) => state.word)
    const wipeAllPoints = usePointsStore((state: any) => state.wipeAllPoints)

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
            <span className={styles.newWord} onClick={() => {
                let newWord = words[getRandomInt(words.length, 0)]

                while (newWord.value === word) {
                    newWord = words[getRandomInt(words.length, 0)]
                }

                setChars(newWord.value, newWord.hint)
                wipeDisabledChars()
                wipeAllPoints()
            }}>
                новое слово
            </span>
            <Counter />
        </section>
    )
}