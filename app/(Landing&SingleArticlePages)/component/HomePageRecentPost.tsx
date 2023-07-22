import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReadingList from '@/common-components/ReadingList';

export default async function HomePageRecentPost({ article }) {

    return (
        <>
            <div
                className='  w-full mb-6 border border-green-900 rounded-md shadow-md bg-gray-200 text-gray-800'>
                {/*main image*/}
                <Link
                    rel='noopener noreferrer'
                    href={`/article/${article.key}`}
                    className='max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 '
                >
                    <Image src={article.image} alt=' article image'
                           height={288}
                           width={999}
                           className='object-cover object-center w-full h-72 bg-gray-500' />
                </Link>
                {/*user section*/}
                <div className='flex items-center justify-between p-3'>
                    <div className='flex items-center space-x-2'>
                        <Image src={article.user.image} alt=''
                               height={32}
                               width={32}
                               className='object-cover object-center w-12 h-12 rounded-full shadow-sm bg-gray-500 border-gray-300' />
                        <div className={'p-2 '}>
                            <div className='text-sm font-semibold leadi'>{article.user.name}</div>
                            <div className='inline-block text-xs leadi text-gray-600'>
                                {`${
                                    new Date(article.updatedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })
                                } (${
                                    getPostTimeAgo(article.updatedAt)

                                })`}
                            </div>
                        </div>
                    </div>
                    <button title='Open options' type='button'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                             className='w-5 h-5 fill-current'>
                            <path
                                d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z'></path>
                            <path
                                d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z'></path>
                            <path
                                d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z'></path>
                        </svg>
                    </button>
                </div>
                <div className={'relative'}>
                    <Link
                        rel='noopener noreferrer'
                        href={`/article/${article.key}`}
                        className='max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 '
                    >
                        <h1 className={'px-2'}>{article.title}</h1>
                    </Link>

                    <div className={'absolute right-6 top-3'}>
                        <ReadingList post_id={article._id} />
                    </div>

                </div>

                <div className='pl-2 mt-6 flex flex-col justify-start items-start '>
                    <div className='text-black font-extrabold text-xl'>{article.topic.name}</div>
                    <div className=' flex flex-wrap justify-start '>
                        <div className='m-1 px-2 py-1 rounded border shadow'>#javascript</div>
                        <div className='m-1 px-2 py-1 rounded border shadow'>#javascript</div>
                        <div className='m-1 px-2 py-1 rounded border shadow'>#javascript</div>
                        <div className='m-1 px-2 py-1 rounded border shadow'>#javascript</div>
                        <div className='m-1 px-2 py-1 rounded border shadow'>#javascript</div>

                    </div>
                </div>
                <div className={'w-full flex justify-between items-center px-2 py-3'}>
                    <div className={'flex justify-start  font-extrabold space-x-4'}>
                        <div className={'flex space-x-2'}><i
                            className=' pi pi-arrow-up h-4 w-4 font-semibold p-1' /> <span>332</span></div>
                        <div className={'flex space-x-2'}><i
                            className=' pi pi-arrow-down h-4 w-4 font-semibold p-1' /><span>232</span></div>
                        <div className={'flex space-x-2'}><i
                            className=' pi pi-comments h-4 w-4 font-semibold p-1' /><span>132</span></div>
                        <div className={'flex space-x-2'}><i
                            className=' pi pi-share-alt h-4 w-4 font-semibold p-1' /><span>122</span></div>
                    </div>
                    <div>
                        <div className={'flex space-x-2'}><i
                            className=' pi pi-share-alt h-4 w-4 font-semibold p-1' /><span>122</span></div>

                    </div>
                </div>


            </div>

        </>
    );
}


function getPostTimeAgo(postCreatedTime) {
    const postTime = new Date(postCreatedTime);
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - postTime.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return days + (days === 1 ? ' day' : ' days') + ' ago';
    } else if (hours > 0) {
        return hours + (hours === 1 ? ' hour' : ' hours') + ' ago';
    } else if (minutes > 0) {
        return minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago';
    } else {
        return seconds + (seconds === 1 ? ' second' : ' seconds') + ' ago';
    }
}
