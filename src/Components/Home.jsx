import React from 'react'


export default function Home() {

    const iconsVariant = {
        hover: {
            backgroundColor: 'blue',
            translateY: "-3px",
            scale: 1.2
        }
    }



    return (
        <div className=' bg-[#465362]' id='Home'>
            {/* Section 1 */}
            <div className=' mx-10 pt-10 justify-center'>

                {/* Hero section 1 */}

                <div className='flex pl-20 text-white -m-10 relative'>
                    <div className='w-1/2 mx-auto my-10'>
                        <img className='w-[400px]' src="/office-work-15.svg" alt="Wall welcome message!" />
                    </div>
                    <div className='w-1/2 mx-10 my-auto'>
                        <h1 className='text-6xl jerseyFont'>Hi Everyone.</h1>

                        <p className='pt-6 text-2xl indent-10 leading-10 text-pretty'>
                            <q>
                            I am Subash, a passionate Full Stack Software Developer 🚀 with experience in building websites and web apps using JavaScript, React.js, Node.js, and other exciting libraries and frameworks.
                            </q>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
