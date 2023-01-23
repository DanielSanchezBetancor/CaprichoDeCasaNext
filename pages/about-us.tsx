import Navbar from './components/Navbar/Navbar.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Footer from './components/Footer/Footer.js';
export default function Home() {
  return (
    <>
        <Navbar activeLi={3}/>
        <AboutUs />
        <Footer />
    </>
  )
}
