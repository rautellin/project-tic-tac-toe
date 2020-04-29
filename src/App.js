import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { game } from './reducers/game'
import { Board } from './components/Board'
import { Stats } from './components/Stats'

library.add(faCircle, faTimes)

const reducer = combineReducers({
  game: game.reduer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Board />
        <Stats />
      </main>
    </Provider>
  )
}
