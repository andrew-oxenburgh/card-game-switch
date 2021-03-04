/* eslint-disable react/react-in-jsx-scope */

import './App.css'
import { Badge } from 'react-bootstrap'

function App () {
  return (
    <div className="App">
        <h1>hello
            <Badge variant="primary">hello, react bootstrap</Badge>
        </h1>
    </div>
  )
}

export default App
