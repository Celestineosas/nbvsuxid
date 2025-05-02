import Featured from "../../components/Featured/Featured"
import Hero from "../../components/Hero/Hero"
import Loader from "../../components/Loader/Loader"
import Projects from "../../components/Projects/Projects"

const Home = () => {
  return (
    <section>
       <Hero />
       <Loader />
       <Featured />
       <Projects />
    </section>
  )
}

export default Home
