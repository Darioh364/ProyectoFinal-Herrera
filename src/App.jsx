import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className='app p-2'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>No hay nada por aqui</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
