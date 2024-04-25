import React from 'react'
import details from '../../data'

export default function About() {

  return (
    <div className='flex text-white bg-black px-20 pt-20 ' id='About'>
      <div className='w-1/2 text-left'>
        <h1 className='text-6xl pt-10 abril-fatface-regular underline decoration-1 underline-offset-8'>About Me</h1>
        {/* Content */}
        <div className='text-lg mt-10'>
          <p className='my-3 indent-5'>
            Welcome to my corner of the web! I'm a passionate React and frontend developer dedicated to crafting responsive, user-friendly, and visually appealing web applications. With a keen interest in adopting new technologies, I'm constantly learning and evolving to stay at the forefront of my field.
          </p>
          <p className='my-3 indent-5'>
            My primary focus lies in frontend development, where I specialize in building captivating user interfaces that leave a lasting impression. However, my journey doesn't stop there; I also possess knowledge in full-stack development, allowing me to create seamless end-to-end solutions.
          </p>
          <p className='my-3 indent-5'>
            Beyond coding, I harbor a fascination for operating systems, particularly Windows and Linux. Exploring the intricacies of these systems not only satisfies my curiosity but also enhances my understanding of the digital landscape.
          </p>
          <p className='my-3 indent-5'>
            Join me as I continue to push the boundaries of web development, one line of code at a time.
          </p>
        </div>

      </div>
      <hr className=' bg-white  w-[1px] h-[480px] mt-36 mb-10 mx-10' />
      <div className='w-1/2 flex items-center'>
        <img className='mx-auto mt-5 w-[400px]' src="/Newsletter 2.png" alt="" />
      </div>
    </div>
  )
}
