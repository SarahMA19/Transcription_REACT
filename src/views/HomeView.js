import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Testimonal from "../components/Testimonal"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function HomeView() {
    return(
        <>
        <Nav />
      <Hero />
      <Services />
      <Testimonal />
      <CTA />
      <Footer />
      </>
    )
    
}

