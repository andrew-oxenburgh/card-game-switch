/* eslint-disable react/react-in-jsx-scope */

import './App.css'

import React from 'react'

import cards from './cards'
import * as PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'

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
    small: smallest,
    medium: 2 * smallest,
    large: 4 * smallest,
    lg: 4 * smallest,
    'x-large': 8 * smallest,
    '1x': smallest,
    '2x': 2 * smallest,
    '3x': 3 * smallest,
    '4x': 4 * smallest,
    '5x': 5 * smallest,
    '6x': 6 * smallest,
    '7x': 7 * smallest,
    '8x': 8 * smallest,
}

const SUITS = {
    C: 'Clubs',
    S: 'Spades',
    D: 'Diamond',
    H: 'Hearts',
}

PlayingCard.propTypes = {
    suit: PropTypes.string,
    faceValue: PropTypes.string,
    back: PropTypes.string,
    size: PropTypes.string,
    margin: PropTypes.string,
}

function PlayingCard (props) {
    console.log('props = ' + JSON.stringify(props, null, 4))

    let width = 224.22508
    let margin = 0

    if (props.size) {
        width = width * SIZING[props.size]
    }

    if (props.margin) {
        margin = (width / 10) * SIZING[props.margin]
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

function Hand (props) {
    return <div>
        {
            props.children.map((child) => {
                let size = props.size
                let margin = props.margin

                if (typeof size === 'undefined') {
                    size = 'small'
                }
                if (typeof margin === 'undefined') {
                    margin = size
                }
                return React.cloneElement(child, { size, margin })
            })
        }
    </div>
}

Hand.propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(PlayingCard)),
    size: PropTypes.string,
    margin: PropTypes.string,
    layout: PropTypes.string,
}

function App () {
    // eslint-disable-next-line no-unused-vars
    const allValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

    // eslint-disable-next-line react/display-name,no-unused-vars
    const handleSuit = (suit) => (val) => {
        const key = '' + val + 'of' + suit
        console.log('key = ' + key)

        return (
            <Col style={{ maxHeight: '200px', height: '150px' }}><PlayingCard key={key} faceValue={val + ''} suit={suit + ''} size="x-sm"/></Col>
        )
    }

    return (
        <div className="App">
            <h1>Welcome to Switch. The Card Game</h1>
            <Container fluid={true}>
                <Row lg={13}>
                    <Col>
                        <Hand size={'small'}>
                            <PlayingCard faceValue={7} suit="S"/>
                            <PlayingCard faceValue={'Q'} suit="D"/>
                            <PlayingCard faceValue={'8'} suit="C"/>
                            <PlayingCard faceValue={'t'} suit="h"/>
                        </Hand>
                    </Col>
                </Row>
                {/* <Row lg={13}> */}
                {/*    {R.map(handleSuit('H'))(allValues) } */}
                {/* </Row> */}
                {/* <Row> */}
                {/*    {R.map(handleSuit('S'))(allValues) } */}
                {/* </Row> */}
                {/* <Row> */}
                {/*    {R.map(handleSuit('D'))(allValues) } */}
                {/* </Row> */}
                {/* <Row> */}
                {/*    {R.map(handleSuit('C'))(allValues) } */}
                {/* </Row> */}
            </Container>
        </div>
    )
}

export default App
