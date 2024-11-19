import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import { ThemeProvider } from "./context/ThemeContext";
import ContactUs from './pages/ContactUs/contactus';
import Pricing from './pages/Pricing/pricing';
import Docs from './pages/Docs/docs';
import LoginPage from './pages/Login/login';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/docs' element={<Docs/>} />
            <Route path='/login' element={<LoginPage/>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App 