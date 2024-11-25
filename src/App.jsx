import './style/main.scss'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} /> 
        </Routes>
      </div>  
      <Footer />
    </>
  )
}

export default App
