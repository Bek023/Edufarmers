
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Explore from './Page/Explore'
import Header from './components/Header'
import Side_menu from './components/Side_menu'
import Explorer_one from './components/Explorer_one'
function App() {


  return (
    <>
      <Header />
      <div className='app_block'>

        <Side_menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/explore/:id' element={<Explorer_one />} />

        </Routes>
      </div>
    </>
  )
}

export default App
