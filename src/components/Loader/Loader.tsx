import CountUp from 'react-countup';

const Loader = () => {
    return (
        <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-5 gap-7 justify-center items-center padding-x sm:py-8 py-5 max-container bg-anon-dark">
            <div className="flex gap-3 ">
                <CountUp
                   className='text-gray-300 font-melodrama sm:text-4xl text-2xl'
                    start={20}
                    end={100}
                    duration={4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    suffix='%'
                />
                <p className="text-gray-300 sm:text-[11px] text-[9px] uppercase font-san mt-1">satisfaction <br /> clients</p>
            </div>
            <div className="flex gap-3 ">
                <CountUp
                   className='text-gray-300 font-melodrama sm:text-4xl text-2xl'
                    start={50}
                    end={250}
                    duration={4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                   
                />
                <p className="text-gray-300 sm:text-[11px] text-[9px] uppercase font-san mt-1">employee on <br /> worldwide</p>
            </div>
            <div className="flex justify-center gap-3">
                <CountUp
                   className='text-gray-300 font-melodrama sm:text-4xl text-2xl'
                    start={0}
                    end={469}
                    duration={4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    suffix='+'
                    
                />
                <p className="text-gray-300 sm:text-[11px] text-[9px] uppercase font-san mt-1">Product completed <br /> countries</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <CountUp
                   className='text-gray-300 font-melodrama sm:text-4xl text-2xl'
                    start={0}
                    end={5569}
                    duration={4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    suffix='+'
                    
                />
                <p className="text-gray-300 sm:text-[11px] text-[9px] uppercase font-san mt-1">Product completed on all countries</p>
            </div>
           



        </section>
    )
}

export default Loader
