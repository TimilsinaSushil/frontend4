import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import AddTask from './components/AddTask'

function App() {
  

  return (
    <>
     <Sidebar/>
     <div className='h-[95vh]'>
    <AddTask/>
     </div>
     <Footer/>
    </>
  )
}

export default App
