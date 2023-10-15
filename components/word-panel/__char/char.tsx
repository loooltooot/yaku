import styles from './char.module.scss'

interface iChar {
    char: string
    isVisible?: boolean
}

export default function Char({ char, isVisible }: iChar) {
    isVisible = isVisible ?? false

    return (
        <div className={styles.char + " " + (isVisible ? styles.visible : "")}>
            <span>{isVisible && char}</span>
        </div>
    )
}