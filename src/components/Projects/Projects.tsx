import { ArrowUpRight } from "lucide-react"
import { projects } from "../../constants"
import { Link } from "react-router"
import { motion } from "framer-motion";
import { SlideLeft } from "../../utilies/SlideLeft";
import { SlideRight } from "../../utilies/SlideRight";
import { ImgLeft } from "../../utilies/ImgLeft";
import { ImgRight } from "../../utilies/ImgRight";



const Projects = () => {

    return (

        <section className="flex flex-col padding w-full max-container items-center justify-center bg-[#FAF3EC] space-y-14">
            {/* Text Section */}
            <h2 className="text-anon-dark font-melodrama text-6xl">Our Projects</h2>

            <div className="flex flex-col gap-20 lg:p-10">
                {projects.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex items-center gap-10 ${index === 1 ? 'lg:flex-row-reverse flex-col' : 'lg:flex-row flex-col'} w-full`}
                    >
                        <motion.img
                            variants={index === 1 ? ImgLeft() : ImgRight()}
                            initial="hidden"
                            whileInView={"visible"}
                            width={270}
                            height={270}
                            src={item.image} alt={item.text} className="lg:w-1/2 w-full object-contain object-center " />
                        <div className="flex flex-col flex-1 sm:gap-10 gap-5 lg:w-1/2">
                            <motion.h2
                                variants={index === 1 ? SlideLeft(0.6) : SlideRight(0.6)}
                                initial="hidden"
                                whileInView={"visible"}

                                className="sm:text-4xl text-3xl text-anon-dark font-semibold">{item.title}</motion.h2>
                            <motion.p
                                variants={index === 1 ? SlideLeft(0.9) : SlideRight(0.9)}
                                initial="hidden"
                                whileInView={"visible"}
                                className=" text-gray-700 sm:text-lg text-md leading-loose font-semibold">{item.text}</motion.p>
                            <motion.div
                                variants={index === 1 ? SlideLeft(1.2) : SlideRight(1.2)}
                                initial="hidden"
                                whileInView={"visible"}
                            >
                                <Link to='collections' className="flex gap-3 font-black sm:text-lg text-md items-center">
                                    <h3>See Projects</h3>
                                    <ArrowUpRight className="text-lg" />
                                </Link>
                            </motion.div>

                        </div>

                    </div>
                ))}

            </div>

        </section>

    )
}

export default Projects
