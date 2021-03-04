/* eslint-disable react/react-in-jsx-scope */

import './App.css'

import cards from './cards'
import * as PropTypes from 'prop-types'

const VALUES = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    j: 'jack',
    J: 'jack',
    q: 'queen',
    Q: 'queen',
    k: 'king',
    K: 'king',
    a: 'ace',
    A: 'ace'
}

PlayingCard.propTypes = {
    suit: PropTypes.string,
    value: PropTypes.number | PropTypes.string,
    back: PropTypes.string
}

function PlayingCard (props) {
    const width = 224.22508
    const height = 312.80777
    let card

    if (props.back) {
        if (props.back.toLowerCase().charAt(0) === 'r') {
            card = 'url("' + cards.redBack + '")'
        } else {
            card = 'url("' + cards.blueBack + '")'
        }
    } else {
        let cardValue = props.value
        const cardSuit = props.suit.charAt(0)

        if (Number.isInteger(cardValue) || cardValue.length === 1) {
            cardValue = VALUES[cardValue]
        }

        const cardName = cardValue + cardSuit
        card = 'url("' + cards[cardName] + '")'
    }
    return (
        <div style={{ width: width, height: height, background: card }}/>
    )
}

function App () {
    return (
        <div className="App">
            <h1>Welcome to Switch. The Card Game
                <PlayingCard back="red"/>
                <PlayingCard back="blue"/>
                <PlayingCard suit="C" value="ten"/>
                <PlayingCard suit="D" value={6}/>
            </h1>
        </div>
    )
}

export default App
