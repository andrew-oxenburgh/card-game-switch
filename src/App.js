/* eslint-disable react/react-in-jsx-scope */

import './App.css'

import cards from './cards'

function App () {
    return (
        <div className="App">
            <h1>Welcome to Switch. The Card Game
                <div style={{ background: 'url(' + cards.twoC + ')', width: '10em', height: '10em' }}/>
                <div style={{ background: 'url(' + cards.threeC + ')', width: '10em', height: '10em' }}/>
            </h1>
        </div>
    )
}

export default App
