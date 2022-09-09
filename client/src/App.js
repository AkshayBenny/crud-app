import LeftBar from './components/LeftBar/LeftBar'
import { Routes, Route } from 'react-router-dom'
import Tasks from './pages/Tasks'
import CalendarPage from './pages/CalendarPage'

function App() {
  return (
    <div className='flex   text-gray-700 bg-gray-50 min-h-screen w-full'>
      <LeftBar />
      <div className='w-full'>
        <Routes>
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
