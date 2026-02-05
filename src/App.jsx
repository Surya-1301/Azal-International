import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Collections from './pages/Collections.jsx'
import Projects from './pages/Projects.jsx'
import Sectors from './pages/Sectors.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
