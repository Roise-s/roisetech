import ClientProjects from '@/components/ClientProjects'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainSection from '@/components/MainSection'

const Home = () => {
  return (
    <>
        <Header />
        <MainSection />
        <ClientProjects />
        <FAQ />
        <Footer />
    </>
  )
}

export default Home
