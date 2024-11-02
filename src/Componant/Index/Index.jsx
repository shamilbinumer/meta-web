import EffectiveTechnology from './EffectiveTechnology/EffectiveTechnology'

import About from './AboutHome/About'
import Case from './CaseStudy/Case'
import Service from './Services/Service'
import InstagramFeed from './Instagram/InstagarmFeed'
import Clients from './Happy-clients/Clients'
// import Monals from './TestiMonals/Monals'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <EffectiveTechnology />
      <Case />
      <Clients />
      <InstagramFeed />
      {/* <Monals /> */}
      <Footer />

    </div>
  )
}

export default Index