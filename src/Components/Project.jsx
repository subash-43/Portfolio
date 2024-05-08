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
                    <div>
                        <h1 className='text-3xl font-bold indent-10 underline pt-20'>PortFolio</h1>
                        <div className='mx-20 flex'>
                            <div className='w-1/2 h-fit text-pretty border border-black mt-20 tracking-wider p-3 rounded-md bg-slate-400'>
                                <h4 className='text-2xl font-bold'>Description:</h4>
                                <p className='pt-6'>
                                Welcome to my portfolio! This site showcases my profile and how it fits your ideas, as well as demonstrating my ability to perform when given any task.
                                </p>
                                <p className='pt-2'>
                                I built this website using ReactJS and Tailwind CSS for comprehensive styling, incorporating lightweight animations with the Framer Motion animation library.
                                </p>

                                <p className='pt-2'>
                                I utilize Material Design along with free and open-source resources.
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
                                <a href="https://github.com/subash-43/portfolio" className='flex button-54 items-center gap-3' target='_blank' rel="noopener noreferrer"><ImGithub />GitHup</a>
                            </div>

                            <div className='flex'>
                                <a className='button-54 h-fit' href="https://www.subash.site" target='_blank' rel="noopener noreferrer">www.subash.site</a>
                            </div>
                        </div>
                        <hr className='bg-gradient-to-r from-transparent via-zinc-500 to-transparent border-none h-[1px] w-auto mt-20' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold indent-10 underline pt-20'>Todo App</h1>
                        <div className='mx-20 flex'>
                            <div className='w-1/2 h-fit text-pretty border border-black mt-20 tracking-wider p-3 rounded-md bg-slate-400'>
                                <h4 className='text-2xl font-bold'>Description:</h4>
                                <p className='pt-6'>
                                    I{"'"}ve developed a sleek Todo application using React and Tailwind CSS, which includes local storage functionality for seamless todo saving.</p>
                                <p className='pt-2'>
                                    I built this App with ReactJS and Tailwind CSS for comprehensive styling, incorporating lightweight animations using the Framer Motion animation library.
                                </p>
                            </div>
                            < div className='w-1/2 h-72 mx-5 mb-32 overflow-hidden rounded-xl border bg-white'>
                                < motion.img whileHover={{
                                    scaleX: 1.2,
                                    scaleY: 1.2
                                }} transition={{ duration: 1.50, ease: "easeInOut" }} className='w-auto ' src="/todo.png" alt="portfolio Overview" />
                            </div>


                        </div>
                        <div className='flex mt-10 justify-evenly'>
                            <div className='flex'>
                                <a href="https://github.com/subash-43/Mini-todo-App" className='flex button-54 items-center gap-3' target='_blank' rel="noopener noreferrer"><ImGithub />GitHup</a>
                            </div>

                            <div className='flex'>
                                <a className='button-54 h-fit' href="https://todo-six-lilac.vercel.app/" target='_blank' rel="noopener noreferrer">Live link</a>
                            </div>
                        </div>
                        <hr className='bg-gradient-to-r from-transparent via-zinc-500 to-transparent border-none h-[1px] w-auto mt-20' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold indent-10 underline pt-20'>Weather App</h1>
                        <div className='mx-20 flex'>
                            <div className='w-1/2 h-fit text-pretty border border-black mt-20 tracking-wider p-3 rounded-md bg-slate-400'>
                                <h4 className='text-2xl font-bold'>Description:</h4>
                                <p className='pt-6'>
                                    I have created a real-time weather app using ReactJS and the OpenWeather API, along with core CSS for simple styling. </p>
                                <p className='pt-2'>
                                    This app provides suggestions as you type the city name.
                                </p>

                                <p className='pt-2'>
                                    This app also showing forecast after 7 days based weather details.
                                </p>
                                <p className='pt-2'>
                                    Additionally, it displays a forecast for the next 7 days based on weather details.
                                </p>
                            </div>
                            < div className='w-1/2 mx-5 mb-36 overflow-hidden rounded-xl border'>
                                < motion.img whileHover={{
                                    scaleX: 1.2,
                                    scaleY: 1.2
                                }} transition={{ duration: 1.50, ease: "easeInOut" }} className='w-fit' src="/weather.png" alt="portfolio Overview" />
                            </div>


                        </div>
                        <div className='flex mt-10 justify-evenly'>
                            <div className='flex'>
                                <a href="https://github.com/subash-43/portfolio" className='flex button-54 items-center gap-3' target='_blank' rel="noopener noreferrer"><ImGithub />GitHup</a>
                            </div>

                            <div className='flex'>
                                <a className='button-54 h-fit' href="https://weather-app-nine-ochre-31.vercel.app/" target='_blank' rel="noopener noreferrer">Weather app Live link</a>
                            </div>
                        </div>
                        <hr className='bg-gradient-to-r from-transparent via-zinc-500 to-transparent border-none h-[1px] w-auto mt-20' />
                    </div>
                </div>
            </div>
        </div>
    )
}
