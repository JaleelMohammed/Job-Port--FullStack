import Home from './assets/Home'
import { Route, Routes } from 'react-router-dom'
import Jobs from './assets/Jobs'
import PostJob from './assets/PostJob'
import Navbar from './assets/Navbar'

export default function App() {

  return (

    <div className='App'>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='post-job' element={<PostJob />} />
      </Routes>
    </div>

  )
}

