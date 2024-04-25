import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black pt-10'>
            <hr className='border-none h-[1px]  bg-gradient-to-r from-transparent via-white to-transparent' />
            <div className='text-white flex px-20 py-10 justify-between'>
                <h1>© Subash. All Rights Reserved.</h1>
                <h1 className='flex gap-2'>
                    Developed by <div className=''>
                        Subash
                        <span className='text-red-500 bg-black'>
                            Dev
                        </span>
                    </div>
                </h1>
            </div>
        </div>
    )
}
