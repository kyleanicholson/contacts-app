import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import Contacts from './pages/Contacts'


function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/:id" element={<Contact />} />
        </Routes>
        </Layout>
    </Router>
  )
}

export default App
