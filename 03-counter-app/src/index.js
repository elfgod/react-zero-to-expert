import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CounterApp from './CounterApp'

import './index.css'

const divRoot = document.querySelector('#root')

// ReactDOM.render(<App saludo='Hola, soy goku' />, divRoot)

ReactDOM.render(<CounterApp value={0} />, divRoot)
