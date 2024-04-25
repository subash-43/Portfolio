import React from 'react'

export default function Experience() {
    return (
        <div className='h-screen bg-black ' id='Experience'>
            <h1 className='text-6xl mb-32 text-white px-10 underline decoration-white underline-offset-8 decoration-[1px]'>Experience →</h1>
            {/* Card */}
            <div className=" rounded-md shadow-lg font-mono mx-auto w-fit">
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none">
                        <a href="https://objectways.com/">
                            <img
                                src="https://objectways.com/img/logo.webp"
                                alt="pic"
                                className="h-72 w-56 rounded-md shadow-xl transform -translate-y-4 border-2 border-gray-300 bg-white mr-20"
                            />

                        </a>
                    </div>

                    <div className="flex-col text-white">
                        <p className="pt-4 text-2xl font-bold">Data Annotator</p>
                        <hr className="hr-text" data-content="" />
                        <div className="text-md flex justify-between px-4 my-2">
                            <span className="font-bold">ObjectWays | Karur</span>
                            <span className="font-bold"></span>
                        </div>
                        <p className="hidden md:block px-4 my-4 text-sm text-left">During my tenure, I was entrusted with key responsibilities revolving around the annotation of road objects, people, and cars in Lidar projects. My primary focus was on ensuring the accuracy and quality of annotations to enhance the final product.

                            Additionally, I played a pivotal role in content moderation projects, where my tasks included annotating frames and meticulously evaluating product quality.

                            With a dedicated approach, I strived to maintain high standards and deliver exceptional results in all aspects of my work.</p>

                        <p className="flex text-md px-4 my-2">
                            Join: Jun - 2023
                            <span className="font-bold px-2">|</span>
                            Vacate: Oct - 2023
                        </p>

                        <div className="text-xs flex">
                            <div className="border w-fit border-gray-400 cursor-default text-gray-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-400 hover:text-black focus:outline-none focus:shadow-outline">Excel</div>

                            <div className="border w-fit border-gray-400 cursor-default text-gray-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-400 hover:text-black focus:outline-none focus:shadow-outline">Ms Office</div>

                            <div className="border w-fit border-gray-400 cursor-default text-gray-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-400 hover:text-black focus:outline-none focus:shadow-outline">Time Management</div>
                            <div className="border w-fit border-gray-400 cursor-default text-gray-200 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-400 hover:text-black focus:outline-none focus:shadow-outline">Team Work</div>
                        </div>
                    </div>
                </div>

            </div>
                <hr className='border-none h-[1px] bg-gradient-to-r via-white from-transparent to-transparent mt-20 ' />
        </div>
    )
}
