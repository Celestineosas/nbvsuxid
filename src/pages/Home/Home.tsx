import CustomerReviews from "../../components/CustomeReview/CusomerReviews"
import Featured from "../../components/Featured/Featured"
import Hero from "../../components/Hero/Hero"
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll"
import Loader from "../../components/Loader/Loader"
import { Parallex } from "../../components/Parallex/Parallex"

import Projects from "../../components/Projects/Projects"
import Transition from "../../utilies/Transition"

const Home = () => {
  return (
    <section>
       <Hero />
       <Loader />
       <Featured />
       <Projects />
       <HorizontalScroll />
       <Parallex />
       <CustomerReviews />
    </section>
  )
}

export default Transition(Home) 
