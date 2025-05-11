import { motion } from "framer-motion";

import { SlideLeft } from "../../utilies/SlideLeft";

type FeaturedProps = {
    img: string;
    text: string;
    price: number;
    delay: number;
};

const FeaturedCard = ({ img, text, price, delay }: FeaturedProps) => {
    return (
        <motion.div
            variants={SlideLeft(delay)}
            initial="hidden"
            whileInView={"visible"}
            className="flex flex-1 flex-col gap-3"
        >
            <img src={img} alt={text} width={270} className='object-contain object-center w-full' />
            <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="text-lg uppercase text-anon-dark font-black mt-2">{text}</h3>
                <p className="text-anon-dark font-san font-semibold">${price.toFixed(2)} USD</p>
            </div>

        </motion.div>
    );
};

export default FeaturedCard;
