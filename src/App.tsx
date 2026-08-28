import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ScrollToTop from '@/components/layout/ScrollToTop'

const Home = lazy(() => import('@/pages/Home'))
const Features = lazy(() => import('@/pages/Features'))
const HowItWorks = lazy(() => import('@/pages/HowItWorks'))
const WhoItsFor = lazy(() => import('@/pages/WhoItsFor'))
const Contact = lazy(() => import('@/pages/Contact'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <BrowserRouter basename="/lane-ops-website">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
