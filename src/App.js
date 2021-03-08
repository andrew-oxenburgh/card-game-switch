/* eslint-disable react/react-in-jsx-scope */

import './App.css'

import React from 'react'

import PlayingCard from './components/PlayingCard'

import { Col, Container, Row } from 'react-bootstrap'
import Hand from './components/Hand'

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
