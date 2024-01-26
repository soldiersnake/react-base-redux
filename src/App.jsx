import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Redux Tooltik</h1>
      </div>
    </Provider>
  )
}

export default App
