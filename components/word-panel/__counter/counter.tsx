'use client'

import styles from './counter.module.scss'
import { getRandomInt } from '@/scripts/getRandomInt'
import { usePointsStore } from '@/stores/pointsStore'
import { useState } from 'react'
import ScoreTable from '../__score-table/scoreTable'
import FramerNum from '@/components/framerNum/framerNum'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
    weight: ['400', '700'],
    subsets: ['cyrillic', 'latin'],
    display: 'swap'
})

export default function Counter() {
    const points = usePointsStore((state: any) => state.points)
    const setPoints = usePointsStore((state: any) => state.setPoints)
    const names = [...usePointsStore((state: any) => state.playersNames)]
    const setPlayersNames = usePointsStore((state: any) => state.setPlayersNames)
    const currentPlayer = usePointsStore((state: any) => state.currentPlayer)

    function spinYakuban() {
        setPoints(getRandomInt(11, 1) * 100)
    }

    return (
        <div className={styles.counter}>
            <button
                onClick={() => spinYakuban()}
                className={styles.button}
                disabled={points !== 0}
            >
                <svg width="78" height="86" viewBox="0 0 78 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M37.8599 60.8C-9.2001 55.02 -11.1401 37.67 27.4699 39.31C32.7199 33.06 37.2499 22 39.8399 0L49.5099 0.209999C45.0899 36.21 54.2399 46.88 60.9499 53.47L59.8399 44.14C89.6299 52.29 81.7099 66.18 37.8599 60.8ZM34.2499 85.91C30.2499 85.43 23.4599 72.8 21.9099 63.76C29.8399 66.52 41.4999 67.82 51.2299 67.76C47.4899 76 38.2199 86.4 34.2499 85.91Z" fill="white" />
                </svg>
            </button>
            <div className={styles.pointsAndPlayers}>
                {points === 0 ? (
                    <span className={styles.points}>Вращайте якубан</span>
                ) : (
                    <span className={styles.points}><FramerNum from={0} to={points} /></span>
                )}
                <div className={styles.player + " " + (currentPlayer ? styles.secondPlayer : '')}>
                    <input className={ubuntu.className} type="text" value={names[0]} onChange={(e) => { names[0] = e.target.value; setPlayersNames(names) }} />
                    <input className={ubuntu.className} type="text" value={names[1]} onChange={(e) => { names[1] = e.target.value; setPlayersNames(names) }} />
                </div>
            </div>
            <ScoreTable />
        </div>
    )
}