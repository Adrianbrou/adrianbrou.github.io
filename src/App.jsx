import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Links from './pages/Links'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Layout>
  )
}

export default App