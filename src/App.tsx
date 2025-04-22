import { Routes, Route } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import PremiumPage from './pages/PremiumPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SuccessPage from './pages/SuccessPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App