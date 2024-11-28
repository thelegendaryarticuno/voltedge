import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import ContactUsBubble from './components/contactus/bubble';
import Sidebar from './components/sidebar/sidebar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {isDashboard ? (
        <div className="flex">
          <Sidebar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <ContactUsBubble/>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Layout 