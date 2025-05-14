

export default function FooterContent() {
    return (
        <div className='bg-anon-dark h-full w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 sm:gap-20'>
            <Section2 />
            <Section1 />
            <Section3 />

        </div>
    )
}

const Section1 = () => {
    return (
        <div className="py-t-8 px-12 lg:row-start-1 lg:col-start-2">
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='lg:row-start-1 lg:col-start-1 flex justify-between items-start py-t-8 px-12 '>
            <h1 className='lg:text-[11vw] text-[20vw] font-melodrama text-[#FAF3EC] font-extralight  sm:leading-[0.8] leading-[1] mt-10'>HomeArt Studio</h1>

        </div>
    )
}
const Section3 = () => {
    return (
      <div className="lg:col-span-2 lg:row-start-2 border-dashed border-[#666360] border-t-[2px] lg:mt-20 mt-5">
         <h3 className="text-center mt-5  text-[#FAF3EC]">All Rights Reserved @2025</h3>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 mt-10 sm:gap-20 gap-10 cursor-pointer'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 font-montserrat whitespace-nowrap text-lg font-bold text-[#FAF3EC] cursor-pointer hover:text-[#b59e88]'>Important links</h3>
                <ul className="flex flex-col gap-5 text-sm font-extralight text-[#FAF3EC] cursor-pointer hover:text-[#b59e88]">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Our Mission</li>
                    <li>Contact Us</li>
                </ul>

            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 font-montserrat text-lg whitespace-nowrap font-bold text-[#FAF3EC] cursor-pointer hover:text-[#b59e88]'>Support</h3>
                <ul className="flex flex-col gap-5 text-sm font-extralight text-[#FAF3EC] cursor-pointer hover:text-[#b59e88]">
                    <li>News</li>
                    <li>Learn</li>
                    <li>Certification</li>
                    <li>Publications</li>
                </ul>

            </div>
        </div>
    )
}