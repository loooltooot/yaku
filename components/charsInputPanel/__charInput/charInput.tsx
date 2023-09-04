'use client'

import { Char } from "@/models/word"
import { useWordStore } from "@/stores/wordStore"
import { useState } from "react"
import styles from './charInput.module.scss'

interface iCharInput {
    char: string,
    isClicked?: boolean,
}

export default function CharInput({ char, isClicked }: iCharInput) {
    const setCharVisible = useWordStore((state: any) => state.setCharVisible)
    const addDisabledChar = useWordStore((state: any) => state.addDisabledChar)
    const word: string = useWordStore((state: any) => state.word)
    const chars: Char[] = [...useWordStore((state: any) => state.chars)]

    return (
        <button onClick={() => {
            if (word.includes(char)) {
                chars[word.indexOf(char)].isVisible = true
                setCharVisible(chars)
                addDisabledChar(char)
            }
        }}
            disabled={isClicked}
        >
            {char}
        </button>
    )
}