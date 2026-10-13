import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from '@/components/SiteLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Skills from '@/pages/Skills';
import Contact from '@/pages/Contact';

// На GitHub Pages сайт живёт в подпапке (/Portfolio/), поэтому роутеру нужен basename.
// BASE_URL берётся из `base` в vite.config.js.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
