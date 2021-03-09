/* eslint-disable react/react-in-jsx-scope */

import './App.css'

import React from 'react'

import PlayingCard from './components/PlayingCard'

import { Col, Container, Row } from 'react-bootstrap'
import Hand from './components/Hand'

function App () {
    return (
        <div className="App">
            <h1>Welcome to Switch. The Card Game</h1>
            <Container fluid={true}>
                <Row lg={13}>
                    <Col>
                        <Hand size={'sm'}>
                            <PlayingCard key={1} faceValue={7} suit="S"/>
                            <PlayingCard key={2} faceValue={7} suit="S"/>
                        </Hand>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Hand size={'md'}>
                            <PlayingCard key={3} faceValue={7} suit="S"/>
                        </Hand>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App
