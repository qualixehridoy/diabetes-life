import './App.css'
import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

const HowItsWork = lazy(() => import('./components/HowItsWork'))
const SpreadSection = lazy(() => import('./components/SpreadSection'))
const VideoGallery = lazy(() => import('./components/VideoGallery'))

function App() {


  return (
    <>
    <Header />
    <Hero />
    <Suspense fallback={<LoadingSpinner />}>
      <HowItsWork />
      <SpreadSection />
      <VideoGallery />
    </Suspense>
    <Footer />

    </>
  )
}

export default App
