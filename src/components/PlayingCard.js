import * as PropTypes from 'prop-types'
import cards from '../cards'
import React from 'react'

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
    t: 'ten',
    j: 'jack',
    J: 'jack',
    q: 'queen',
    Q: 'queen',
    k: 'king',
    K: 'king',
    a: 'ace',
    A: 'ace',
}

const smallest = (1 / 2)

const SIZING = {
    'x-sm': 0.5 * smallest,
    sm: smallest,
    md: 2 * smallest,
    lg: 4 * smallest,
    'x-lg': 8 * smallest,
    '1x': smallest,
    '2x': 2 * smallest,
    '3x': 3 * smallest,
    '4x': 4 * smallest,
    '5x': 5 * smallest,
    '6x': 6 * smallest,
    '7x': 7 * smallest,
    '8x': 8 * smallest,
}

/**
 * avaiable suits, as default
 */
const SUITS = {
    C: 'Clubs',
    S: 'Spades',
    D: 'Diamond',
    H: 'Hearts',
}

PlayingCard.propTypes = {
    suit: PropTypes.oneOf([
        'h', 's', 'd', 'c',
        'H', 'S', 'D', 'C',
        'hearts', 'spades', 'diamonds', 'clubs']),
    faceValue: PropTypes.oneOf([
        1,
        2, 3, 4, 5, 6, 7, 8, 9, 10,
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        't',
        'j',
        'q',
        'k',
        'a',
        'T',
        'J',
        'Q',
        'K',
        'A',
    ]),
    back: PropTypes.oneOf(['r', 'b', 0]),
    size: PropTypes.oneOf([
        'x-sm',
        'sm',
        'md',
        'lg',
        'x-lg',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
    ]),
    margin: PropTypes.oneOf([
        'x-sm',
        'sm',
        'md',
        'lg',
        'x-lg',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
    ]),
}

// Specifies the default values for props:
PlayingCard.defaultProps = {
    suit: 'H',
    faceValue: 'a',
    size: 'md',
    margin: 'md',
    back: 0,
}

/**
 * A single PlayingCard
 * @param {string} suit - H, S, D, C. Case insensitive. May use full name
 * @param {string} faceValue - 2-10, t, j, q, k, a. Case insensitive.
 * @param {string} back - 2-10, t, j, q, k, a. Case insensitive.
 * @param {string} size - 1x - 8x
 * @param {string} margin - 1x - 8x
 */
export default function PlayingCard (props) {
    let width = 224.22508
    let margin = 0

    if (props.size && SIZING[props.size]) {
        width = width * SIZING[props.size]
        if (width === 'NaN') {
            width = 0
        }
    }

    if (props.margin && SIZING[props.margin]) {
        margin = (width / 10) * SIZING[props.margin]
    }

    let card, alt

    const validBack = (b) => {
        let s = ''
        try {
            s = b.toUpperCase()
        } catch (e) {
            return false
        }
        switch (s) {
        case 'R':
        case 'RED':
        case 'B':
        case 'BLUE':
            return true
        default:
            return false
        }
    }

    if (validBack(props.back)) {
        if (props.back.toLowerCase().charAt(0) === 'r') {
            card = cards.redBack
            alt = 'red card'
        } else {
            card = cards.blueBack
            alt = 'blue card'
        }
    } else {
        let cardValue = props.faceValue
        const cardSuit = props.suit.toUpperCase().charAt(0)

        cardValue = VALUES[cardValue + '']

        const cardName = cardValue + cardSuit
        card = cards[cardName]

        alt = `${cardValue} of ${SUITS[cardSuit].toLowerCase()}`
    }
    return (
        <img alt={alt} src={card} style={{ width, height: 'auto', margin }}/>
    )
}
