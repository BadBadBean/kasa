import './style/main.scss'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Housing from './pages/Housing'

function App() {
  return (
    <>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Housing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>  
    <Footer />
    </>
  )
}

export default App
