import React, { ReactNode } from 'react';


const MyComponent = () => {
    return (
        <div className='bg-gray-100 text-gray-900 p-2'>
            <div className='container grid grid-cols-12 mx-auto'>
                <div className='flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto '>
                    <div className='flex flex-col items-center p-8 py-12 text-center'>
                        <span>12 June</span>
                        <h1 className='py-4 text-5xl font-bold'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h1>
                        <p className='pb-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
                        </p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-7 h-7'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300'>
                    <div className='pt-6 pb-4 space-y-2'>
                        <span>12 June</span>
                        <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a
                            rel='noopener noreferrer'
                            href='#'
                            className='inline-flex items-center py-2 space-x-2 text-sm text-emerald-600'
                        >
                            <span>Read more</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className='pt-6 pb-4 space-y-2'>
                        <span>12 June</span>
                        <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a
                            rel='noopener noreferrer'
                            href='#'
                            className='inline-flex items-center py-2 space-x-2 text-sm text-emerald-600'
                        >
                            <span>Read more</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className='pt-6 pb-4 space-y-2'>
                        <span>12 June</span>
                        <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <a
                            rel='noopener noreferrer'
                            href='#'
                            className='inline-flex items-center py-2 space-x-2 text-sm text-emerald-600'
                        >
                            <span>Read more</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className='container grid grid-cols-12 mx-auto bg-gray-50'>
                <div className='bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4'></div>
                <div className='flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10'>
                    <div className='flex justify-start'>
                        <span className='px-2 py-1 text-xs rounded-full bg-emerald-600 text-gray-50'>
                            Label
                        </span>
                    </div>
                    <h1 className='text-3xl font-semibold'>Lorem ipsum dolor sit.</h1>
                    <p className='flex-1 pt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit
                        adipisci tempore voluptas laborum quod.
                    </p>
                    <a
                        rel='noopener noreferrer'
                        href='#'
                        className='inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-emerald-600'
                    >
                        <span>Read more</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-4 h-4'
                        >
                            <path
                                fillRule='evenodd'
                                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </a>
                    <div className='flex items-center justify-between pt-2'>
                        <div className='flex space-x-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-5 h-5 text-gray-600'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                            <span className='self-center text-sm'>by Leroy Jenkins</span>
                        </div>
                        <span className='text-xs'>3 min read</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default MyComponent;
