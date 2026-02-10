import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LayoutZH } from './components/layout/zh/LayoutZH';
import { HomePage } from './pages/HomePage';
import { HomePageZH } from './pages/zh/HomePageZH';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* English Routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/legal" element={<Layout><LegalPage /></Layout>} />

        {/* Chinese Routes */}
        <Route path="/zh" element={<LayoutZH><HomePageZH /></LayoutZH>} />
      </Routes>
    </Router>
  );
}

export default App;
