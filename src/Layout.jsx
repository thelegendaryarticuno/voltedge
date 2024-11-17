import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import ContactUsBubble from './components/contactus/bubble';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <ContactUsBubble/>
      <Footer />
    </div>
  )
}

export default Layout 