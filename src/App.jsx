import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className='app p-2'>
      <NavBar />
      <ItemListContainer mensaje=' soy un mensaje por prop' />
    </div>
  )
}

export default App
