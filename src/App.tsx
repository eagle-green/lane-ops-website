import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ScrollToTop from '@/components/layout/ScrollToTop'

const Home = lazy(() => import('@/pages/Home'))
const Features = lazy(() => import('@/pages/Features'))
const PlatformCategory = lazy(() => import('@/pages/PlatformCategory'))
const HowItWorks = lazy(() => import('@/pages/HowItWorks'))
const Solutions = lazy(() => import('@/pages/Solutions'))
const WhyLaneOps = lazy(() => import('@/pages/WhyLaneOps'))
const About = lazy(() => import('@/pages/About'))
const AllFeatures = lazy(() => import('@/pages/AllFeatures'))
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
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/why-laneops" element={<WhyLaneOps />} />
            <Route path="/about" element={<About />} />
            <Route path="/features/all" element={<AllFeatures />} />
            <Route path="/features/:categoryId" element={<PlatformCategory />} />
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
