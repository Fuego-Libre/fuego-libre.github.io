import { Routes, Route } from 'react-router';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import OfferingsPage from './pages/Offerings';
import EventsPage from './pages/Events';
import TestimonialsPage from './pages/Testimonials';
import ResourcesPage from './pages/Resources';
import ContactPage from './pages/Contact';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/offerings" element={<OfferingsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
