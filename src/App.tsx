import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
function App() {
  return (
    <div className="w-9/12 mb-0  bg-white  border border-zinc-50 dark:bg-zinc-900 dark:border-zinc-800">
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
