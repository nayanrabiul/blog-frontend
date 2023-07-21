import React from 'react';

const articleSidebar = ({children}) => {
    return (
        <div className={'w-full '}>
            <div className={'container'}>
                <div className={'grid grid-cols-12 overflow-hidden'}>
                    <div className={'col-span-12 md:col-span-12 lg:col-span-9 '}>
                        {children}
                    </div>
                    <div className={'hidden md:block md:col-span-3'}>
                        <section className='px-5 py-10 bg-gray-100 text-gray-800'>

                            <div className='hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block'>
                                <div className='mb-8 space-x-5 border-b-2 border-opacity-10 border-emerald-600'>
                                    <button type='button'
                                            className='pb-5 text-xs font-bold uppercase border-b-2 border-emerald-600'>Latest
                                    </button>
                                    <button type='button'
                                            className='pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-600'>Popular
                                    </button>
                                </div>
                                <div className='flex flex-col divide-y divide-gray-300'>
                                    <div className='flex px-1 py-4'>
                                        <img alt=''
                                             className='flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500'
                                             src='https://source.unsplash.com/random/244x324'/>
                                        <div className='flex flex-col flex-grow'>
                                            <a rel='noopener noreferrer' href='#'
                                               className='font-serif hover:underline'>Aenean ac tristique lorem, ut
                                                mollis dui.</a>
                                            <p className='mt-auto text-xs text-gray-600'>5 minutes ago
                                                <a rel='noopener noreferrer' href='#'
                                                   className='block text-blue-400 lg:ml-2 lg:inline hover:underline'>Politics</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex px-1 py-4'>
                                        <img alt=''
                                             className='flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500'
                                             src='https://source.unsplash.com/random/245x325'/>
                                        <div className='flex flex-col flex-grow'>
                                            <a rel='noopener noreferrer' href='#'
                                               className='font-serif hover:underline'>Nulla consectetur
                                                efficitur.</a>
                                            <p className='mt-auto text-xs text-gray-600'>14 minutes ago
                                                <a rel='noopener noreferrer' href='#'
                                                   className='block text-blue-400 lg:ml-2 lg:inline hover:underline'>Sports</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex px-1 py-4'>
                                        <img alt=''
                                             className='flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500'
                                             src='https://source.unsplash.com/random/246x326'/>
                                        <div className='flex flex-col flex-grow'>
                                            <a rel='noopener noreferrer' href='#'
                                               className='font-serif hover:underline'>Vitae semper augue purus
                                                tincidunt libero.</a>
                                            <p className='mt-auto text-xs text-gray-600'>22 minutes ago
                                                <a rel='noopener noreferrer' href='#'
                                                   className='block text-blue-400 lg:ml-2 lg:inline hover:underline'>World</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex px-1 py-4'>
                                        <img alt=''
                                             className='flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500'
                                             src='https://source.unsplash.com/random/247x327'/>
                                        <div className='flex flex-col flex-grow'>
                                            <a rel='noopener noreferrer' href='#'
                                               className='font-serif hover:underline'>Suspendisse potenti.</a>
                                            <p className='mt-auto text-xs text-gray-600'>37 minutes ago
                                                <a rel='noopener noreferrer' href='#'
                                                   className='block text-blue-400 lg:ml-2 lg:inline hover:underline'>Business</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default articleSidebar;
