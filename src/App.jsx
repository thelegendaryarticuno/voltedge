import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import { ThemeProvider } from "./context/ThemeContext";
import ContactUs from './pages/ContactUs/contactus';
import Pricing from './pages/Pricing/pricing';
import Docs from './pages/Docs/docs';
import LoginPage from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import MyDevices from './pages/Dashboard/my_devices';
import Complaints from './pages/Dashboard/complaints';
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard/complaints" element={<Complaints/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/dashboard/contactus' element={<ContactUs/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/docs' element={<Docs/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/dashboard/:userId' element={<Dashboard/>} />
            <Route path='/dashboard/my-devices' element={<MyDevices/>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App 