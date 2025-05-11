import Featured from "../../components/Featured/Featured"
import Hero from "../../components/Hero/Hero"
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll"
import Loader from "../../components/Loader/Loader"
import { Parallex } from "../../components/Parallex/Parallex"
import Projects from "../../components/Projects/Projects"

const Home = () => {
  return (
    <section>
       <Hero />
       <Loader />
       <Featured />
       <Projects />
       <HorizontalScroll />
       <Parallex />
    </section>
  )
}

export default Home
