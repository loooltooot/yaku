import { useWordStore } from '@/stores/wordStore'
import CharInput from './__charInput/charInput'
import styles from './charsInputPanel.module.scss'

const chars = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',
    'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю',
    'Я'
]

export default function CharsInputPanel() {
    const disabledChars: string[] = useWordStore((state: any) => state.disabledChars)

    return (
        <section className={styles.panel}>
            <ul>
                {chars.map((char, index) => (
                    <li key={index}>
                        <CharInput char={char} isClicked={disabledChars.includes(char)} />
                    </li>
                ))}
            </ul>
        </section>
    )
}