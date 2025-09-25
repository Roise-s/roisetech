import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import NotFound from './pages/404';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import LaptopRepairs from './components/LaptopRepairs';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/laptop-repairs" element={<LaptopRepairs />} />
      </Routes>
    </>
  )
}

export default App
