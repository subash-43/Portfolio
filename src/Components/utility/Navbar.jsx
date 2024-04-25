import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { BsFillMoonFill, BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {

        const priviousValue = scrollY.getPrevious();

        if (latest > priviousValue && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.nav
            className={`sticky top-0 z-30 flex px-10 py-5 items-center bg-[#465362]`}
            variants={{
                visible: { y: "0" },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            {/* Logo section*/}
            <div>
                <h1 className='text-white  text-2xl'>
                    Subash<span className='text-red-500 bg-black'>Dev</span>
                </h1>
            </div>
            {/* Navigation bar */}
            <div className='flex gap-5 text-lg text-white px-5 ml-auto '>
                <a className='hover:underline hover:decoration-yellow-300 hover:underline-offset-8 hover:decoration-2 hover:text-teal-500'
                    href="#Home">Home</a>
                <a className='hover:underline hover:decoration-yellow-300 hover:underline-offset-8 hover:decoration-2 hover:text-teal-500'
                    href="#About">About</a>
                <a className='hover:underline hover:decoration-yellow-300 hover:underline-offset-8 hover:decoration-2 hover:text-teal-500'
                    href="#Project">Project</a>
                <a className='hover:underline hover:decoration-yellow-300 hover:underline-offset-8 hover:decoration-2 hover:text-teal-500'
                    href="#edu1">Education</a>
                
                <a className='hover:underline hover:decoration-yellow-300 hover:underline-offset-8 hover:decoration-2 hover:text-teal-500'
                    href="#Experience">Experience</a>
                <a className='hover:underline button-86 hover:decoration-yellow-300 hover:underline-offset-8 hover:decoration-2 hover:text-teal-500'
                    href="#Contact">Contact</a>
            </div>
            
        </motion.nav>
    )
}
