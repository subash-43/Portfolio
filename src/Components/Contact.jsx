import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiFacebook, FiGithub } from 'react-icons/fi'

export default function Contact() {
  return (
    <div className='px-10 bg-black text-white h-screen pt-20' id='Contact'>
      <h1 className='text-6xl underline underline-offset-8 decoration-white decoration-[1px]'>Contact &rarr;</h1>
      <div className='flex'>
        <div className='w-1/2  mt-20 tracking-widest'>
          <p>Have questions, ideas, or just want to say hello? Feel free to reach out! Whether you're interested in collaborating on a project, discussing potential opportunities, or simply want to connect, I'd love to hear from you.</p>
          <hr className='border-none py-2' />
          <p>You can drop me a message using the form below or connect with me through the following channels:</p>
          {/* Icons */}
          <div className='flex gap-5 mt-5'>
            <a href="https://github.com/subash-43" className='p-2 hover:bg-yellow-300 hover:text-black hover:rounded-xl'>
              <FiGithub className='size-6' />
            </a>
            <a href="http://www.linkedin.com/in/subash-e-09016b19a" className='p-2 hover:bg-yellow-300 hover:text-black hover:rounded-xl'>
              <FaLinkedinIn className='size-6' />
            </a>
            <a href="https://twitter.com/subash43it" className='p-2 hover:bg-yellow-300 hover:text-black hover:rounded-xl'>
              <CiTwitter className='size-6' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557887344765" className='p-2 hover:bg-yellow-300 hover:text-black hover:rounded-xl'>
              <FiFacebook className='size-6' />
            </a>
          </div>
          <hr className='border-none py-2' />
          <p>I'm looking forward to hearing from you and starting a conversation. Let's build something great together!</p>
        </div>
        <div className='w-1/2 '><img className='size-[500px]' src="/Message.png" alt="Mail sending" /></div>
      </div>

    </div>
  )
}
