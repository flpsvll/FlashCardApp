import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'flashcards decks'


const initialData = {
    Webpack: {
        title: 'Webpack',
        questions: [
            {
                question: 'is webpack open-source?',
                answer: 'yes, webpack is open-source',
                correctAnswer: 'true'
            },
            {
                question: 'ES6 original name was Latte?',
                answer: 'no, ES6 original name was Mocha',
                correctAnswer: 'false'
            } 
        ]
    }
},

export const getData = () => {
    return initialData
}

export function getDecks (deck) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
        if(results === null) {
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
            return initialData
        }else {
            return JSON.parse(results)
        }
    })
}

export function saveDeckTitle(title){
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))

}