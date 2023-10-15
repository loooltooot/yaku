'use client'

import { Char, words } from "@/models/word"
import { useWordStore } from "@/stores/wordStore"
import styles from './charInput.module.scss'
import { usePointsStore } from "@/stores/pointsStore"
import { getRandomInt } from "@/scripts/getRandomInt"

interface iCharInput {
    char: string,
    isClicked?: boolean,
}

export default function CharInput({ char, isClicked }: iCharInput) {
    const setCharVisible = useWordStore((state: any) => state.setCharVisible)
    const addDisabledChar = useWordStore((state: any) => state.addDisabledChar)
    const word: string = useWordStore((state: any) => state.word)
    const chars: Char[] = [...useWordStore((state: any) => state.chars)]
    const wipePoints = usePointsStore((state: any) => state.wipePoints)
    const wipeAllPoints = usePointsStore((state: any) => state.wipeAllPoints)
    const points = usePointsStore((state: any) => state.points)
    const currentPlayer = usePointsStore((state: any) => state.currentPlayer)
    const setPlayersPoints = usePointsStore((state: any) => state.setPlayersPoints)
    const swapPlayer = usePointsStore((state: any) => state.swapPlayer)
    const playersPoints = { ...usePointsStore((state: any) => state.playersPoints) }
    const setChars = useWordStore((state: any) => state.setChars)
    const wipeDisabledChars = useWordStore((state: any) => state.wipeDisabledChars)

    return (
        <button className={styles.charInput + (isClicked ? " " + styles.clicked : "")} onClick={() => {
            if (word.includes(char)) {
                chars.forEach(c => {
                    if (c.value === char) {
                        c.isVisible = true
                        playersPoints[currentPlayer] += points
                    }
                })

                setCharVisible(chars)
                setPlayersPoints(playersPoints)

                if (chars.every((c) => c.isVisible)) {
                    let winner

                    switch (true) {
                        case playersPoints[0] > playersPoints[1]:
                            winner = { name: "Игрок 1", points: playersPoints[0] }
                            break
                        case playersPoints[0] === playersPoints[1]:
                            winner = { name: "Ничья", points: playersPoints[0] }
                            break
                        default:
                            winner = { name: "Игрок 2", points: playersPoints[1] }
                            break
                    }

                    const winMessage = `ПОБЕДА! Якубан одолел ${winner.name} с количеством очков ${winner.points}`

                    alert(winMessage)
                    let newWord = words[getRandomInt(words.length, 0)]

                    while (newWord.value === word) {
                        newWord = words[getRandomInt(words.length, 0)]
                    }

                    setChars(newWord.value, newWord.hint)
                    wipeDisabledChars()
                    wipeAllPoints()

                    return
                }
            }
            addDisabledChar(char)
            swapPlayer()
            wipePoints()
        }}
            disabled={isClicked || points === 0}
        >
            {char}
        </button>
    )
}