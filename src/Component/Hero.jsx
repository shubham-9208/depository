import { HERO_CONTENT } from "../constants"
import profile_pic from "../assets/shubham-Photoroom-Photoroom (1).png"
import { motion } from "framer-motion"


const container = (delay) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
        x: 0, opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

function Hero() {
    return (
        <>
            <div  className=' border-b border-neutral-900'>
                <div id="about" className=' lg:pt-4 px-2 lg:h-[75vh] '>
                    <div className=' text-center md:text-start flex flex-wrap justify-center lg:justify-between items-center flex-col-reverse lg:flex-row'>

                        <div className=" w-full lg:w-1/2 lg:pb-10">
                            <motion.h1 variants={container(0)}
                                initial="hidden"
                                animate="visible" className=' text-4xl md:text-6xl font-thin tracking-tighter mb-12 mt-5'>Shubham Maurya</motion.h1>
                            <motion.span
                                variants={container(0.2)}
                                initial="hidden"
                                animate="visible"
                                className=' bg-gradient-to-r from-blue-400 via-slate-400 to-purple-500 bg-clip-text text-transparent text-3xl font-bold tracking-tight'> Front-End Developer</motion.span>
                            <motion.p
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className=" flex tracking-tighter font-light my-2 py-3 max-w-xl">{HERO_CONTENT}</motion.p>

                            <motion.button 
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.1 }}
                                className=" border border-white hover:shadow-purple-500 px-14 py-4 text-[20px] font-bold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 rounded-full hover:scale-110 hover:transition-all ease-out duration-150">Check Resume</motion.button>

                        </div>
                        <div className="  lg:pr-16  px-4">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, }}
                                src={profile_pic} alt="profile_pic" width='400px' className=" rounded-full  opacity-80 shadow-md  shadow-purple-700" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero