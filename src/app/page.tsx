import { Services } from '@/components/sections/Services'
import { Header } from '../components/layout/Header'
import { Hero } from '../components/sections/Hero'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { Projects } from '@/components/sections/Projects'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
