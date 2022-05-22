import { Route, Routes } from 'react-router-dom'
import { BreadCrumbs, NavBar} from './Components'
import { MainPage, SignPage } from './Pages'
import './index.css'

function App() {
  return (
    <div>
      <div className='container'>
        <NavBar />
      </div>
      <BreadCrumbs />
      <div className='container'>
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route path='/sign' element={<SignPage />} />
          </Routes>
      </div>
    </div>
  )
}

export default App;
