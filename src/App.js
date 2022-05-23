import { Route, Routes } from 'react-router-dom'
import { BreadCrumbs, NavBar} from './Components'
import { AboutPage, LogPage, MainPage, ProfilePage, SignPage, TasksPage } from './Pages'
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
            <Route exact path='/sign' element={<SignPage />} />
            <Route exact path='/log' element={<LogPage />} />
            <Route exact path='/profile' element={<ProfilePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/tasks' element={<TasksPage />} />
          </Routes>
      </div>
    </div>
  )
}

export default App;
