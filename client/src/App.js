import LeftBar from './components/LeftBar/LeftBar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='flex justify-between  text-gray-700 bg-gray-50 min-h-screen w-full'>
      <LeftBar />
      <Projects />
    </div>
  )
}

export default App
