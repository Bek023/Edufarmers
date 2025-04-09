
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Explore from './Page/Explore'
import Header from './components/Header'
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Explore' element={<Explore />} />
      </Routes>
    </>
  )
}

export default App
