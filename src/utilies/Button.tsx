import { motion } from "framer-motion";



type ButtonProps = {
    label: string;
};
const Button = ({ label }: ButtonProps) => {
    const buttonVarients = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0
        },

    }
    return (
        <motion.button
            className='flex justify-center cursor-pointer items-center text-center px-9 py-5 leading-none font-inter sm:text-lg font-bold bg-[#2b2b2b] text-gray-100'
            variants={buttonVarients}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 2.1}}
            transition={{
                delay: 2,
                type: "spring",
                stiffness: 120,
                mass: 0.5,
                ease: 'easeInOut',
                duration: 1
            }}
        >
            {label}

        </motion.button>
    )
}

export default Button