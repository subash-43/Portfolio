import React from 'react'
import { motion } from 'framer-motion'
import { ImGithub } from 'react-icons/im'

export default function Project() {
    return (
        <div className='bg-black px-10 py-10 text-white min-h-screen' id='Project'>
            <div className='-mx-10'>
                <div className='relative pt-20 pb-7 after:absolute after:content-[""] after:w-[100%] after:left-0 after:bottom-0 after:h-[10%]  after:bg-slate-300'>
                    <h1 className='text-6xl font-bold underline-offset-8 underline decoration-white decoration-[1px] text-center'>Projects</h1>
                </div>
                <div className='bg-slate-300 text-black'>
                    <h1 className='text-3xl font-bold indent-10 underline pt-20'>PortFolio</h1>
                    <div className='mx-20 flex'>
                        <div className='w-1/2 text-pretty border border-black mt-20 tracking-wider p-3 rounded-md bg-slate-400'>
                            <h4 className='text-2xl font-bold'>Description:</h4>
                            <p className='pt-6'>
                                Welcome to my portfolio! This site showcase My Profile How is fit Your ideas and I am how to perform when your giving Any work. </p>
                            <p className='pt-2'>
                                I am builded this website with reactjs and tailwindcss for full styling, and using lite animation for framermotion animation library.
                            </p>

                            <p className='pt-2'>
                                I am using Material all has Free resources and Opensourse resources.
                            </p>
                        </div>
                        < div className='w-1/2 mx-5 mb-32 overflow-hidden rounded-xl border'>
                            < motion.img whileHover={{
                                scaleX: 1.2,
                                scaleY: 1.2
                            }} transition={{ duration: 1.50, ease: "easeInOut" }} className='w-fit' src="/image.png" alt="portfolio Overview" />
                        </div>


                    </div>
                    <div className='flex mt-10 justify-evenly'>
                        <div className='flex'>
                            <button className='flex button-54 items-center gap-3' href=""><ImGithub/>GitHup</button>
                        </div>

                        <div className='flex'>
                            <a className='button-54 h-fit' href="https://www.subash.site">www.subash.site</a>
                        </div>
                    </div>
                    <hr className='bg-gradient-to-r from-transparent via-zinc-500 to-transparent border-none h-[1px] w-auto mt-20' />
                </div>
            </div>
        </div>
    )
}
