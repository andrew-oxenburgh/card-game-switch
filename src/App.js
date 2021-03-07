/* eslint-disable react/react-in-jsx-scope */

import './App.css'

import cards from './cards'
import * as PropTypes from 'prop-types'
import * as R from 'ramda'

const VALUES = {
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    T: 'ten',
    j: 'jack',
    J: 'jack',
    q: 'queen',
    Q: 'queen',
    k: 'king',
    K: 'king',
    a: 'ace',
    A: 'ace'
}

const smallest = (1 / 2)

const SIZING = {
    'x-sm': 0.5 * smallest,
    sm: smallest,
    small: smallest,
    medium: 2 * smallest,
    large: 4 * smallest,
    'x-large': 8 * smallest,
    '1x': smallest,
    '2x': 2 * smallest,
    '3x': 3 * smallest,
    '4x': 4 * smallest,
    '5x': 5 * smallest,
    '6x': 6 * smallest,
    '7x': 7 * smallest,
    '8x': 8 * smallest
}

const SUITS = {
    C: 'Clubs',
    S: 'Spades',
    D: 'Diamond',
    H: 'Hearts'
}

PlayingCard.propTypes = {
    suit: PropTypes.string,
    faceValue: PropTypes.string,
    back: PropTypes.string,
    size: PropTypes.string
}

function PlayingCard (props) {
    let width = 224.22508
    if (props.size) {
        width = width * SIZING[props.size]
    }

    let card, alt

    if (props.back) {
        if (props.back.toLowerCase().charAt(0) === 'r') {
            card = cards.redBack
            alt = 'red card'
        } else {
            card = cards.blueBack
            alt = 'blue card'
        }
    } else {
        let cardValue = props.faceValue
        const cardSuit = props.suit.charAt(0)

        cardValue = VALUES[cardValue + '']

        const cardName = cardValue + cardSuit
        card = cards[cardName]

        alt = `${cardValue} of ${SUITS[cardSuit].toLowerCase()}`
    }
    return (
        <img alt={alt} src={card} style={{ width: width, height: 'auto' }}/>
    )
}

function App () {
    const allValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

    // eslint-disable-next-line react/display-name
    const handleSuit = (suit) => (val) => {
        const key = '' + val + 'of' + suit
        console.log('key = ' + key)

        return (
            <PlayingCard key={key} faceValue={val + ''} suit={suit + ''} size="x-sm"/>
        )
    }

    // const cards = []
    const cards = R.map(handleSuit('H'))(allValues)
    cards.push(<br style={{ height: '1em' }}/>)
    cards.push(R.map(handleSuit('S'))(allValues))
    cards.push(<br style={{ height: '1em' }}/>)
    cards.push(R.map(handleSuit('D'))(allValues))
    cards.push(<br style={{ height: '1em' }}/>)
    cards.push(R.map(handleSuit('C'))(allValues))

    return (
        <div className="App">
            <h1>Welcome to Switch. The Card Game
            </h1>
            {cards}
        </div>
    )
}

export default App
