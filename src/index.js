import React from 'react'
import ReactDOM from 'react-dom'

// assets
import logo from './Assets/logo.svg'
import './Assets/index.css'
import './Assets/App.css'

// Redux
import { createStore } from 'redux'

// component
import Counter from './Components/Counter'
import counter from './Reducers'

// from reducers
const store = createStore(counter)
// mount point
const rootEl = document.getElementById('root')

const rander = () => ReactDOM.render(
	<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({type: 'INCREMENT'})}
			onDecrement={() => store.dispatch({type: 'DECREMENT'})}
		/>
	</div>,
	rootEl
);

rander();

store.subscribe(rander);
