import { createSlice } from '@reduxjs/toolkit'
import { calculateWinner } from 'utils/calculateWinner'

const newGame = {
  squares: [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  winner: null,
  player: 'x'
}

export const game = createSlice({
  name: 'game',
  initialState: newGame,
  reducers: {
    captureSquare: (state, action) => {
      const { index } = action.payload

      if (state.squares[index] === null) {
        state.squares[index] = state.player
      }

      if (state.player === 'x') {
        state.player = 'o'
      } else {
        state.player = 'x'
      }

      if (!state.winner) {
        state.winner = calculateWinner(state.squares)
      }
    },
    restart: () => {
      return newGame
    }
  }
})
