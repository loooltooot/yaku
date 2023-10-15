import { usePointsStore } from '@/stores/pointsStore'
import styles from './scoreTable.module.scss'

export default function ScoreTable() {
    const playersPoints = usePointsStore((state: any) => state.playersPoints)

    function getConditionClassName(playerId: number) {
        const anotherPlayerId = playerId === 0 ? 1 : 0

        switch (true) {
            case playersPoints[playerId] > playersPoints[anotherPlayerId]:
                return styles.win
            case playersPoints[playerId] < playersPoints[anotherPlayerId]:
                return styles.loose
            default:
                return
        }
    }

    return (
        <div className={styles.table}>
            <span className={styles.score + " " + getConditionClassName(0)}>{playersPoints[0]}</span>
            <span>✖️</span>
            <span className={styles.score + " " + getConditionClassName(1)}>{playersPoints[1]}</span>
        </div>
    )
}