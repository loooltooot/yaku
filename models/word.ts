export interface Word {
    value: string,
    hint: string,
}

export interface Char {
    value: string,
    isVisible: boolean,
}

export const words: Word[] = [
    {
        value: 'ДОМ',
        hint: 'тут живут люди',
    },
    {
        value: 'ЯЩЕРЫ',
        hint: 'воевали с русами',
    },
]