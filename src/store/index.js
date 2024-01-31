import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../reducers/contadorReducer'

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },
})