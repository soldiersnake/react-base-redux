import { Provider } from 'react-redux'
import './App.css'
import Contador from './components/Contador'
import store from './store'
import { Pokemon } from './components/Pokemon'

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Redux Tooltik</h1>
        {/* <Contador/> */}
        <Pokemon/>

      </div>
    </Provider>
  )
}

export default App
