
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Explore from './Page/Explore'
import Header from './components/Header'
import Side_menu from './components/Side_menu'
import Explorer_one from './components/Explorer_one'
import { ConfigProvider } from 'antd'
function App() {


  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#52c41a",
            colorInfo: "#52c41a",
          },
        }}
      >
        <Header />
        <div className='app_block'>
          <Side_menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Explore' element={<Explore />} />
            <Route path='/explore/:id' element={<Explorer_one />} />
          </Routes>
        </div>
      </ConfigProvider>

    </>
  )
}

export default App
