'use client';

import ReadingList from '@/components/ReadingList';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article }) {
    return (
        <>
            <div className=' -md mb-6   w-full rounded-md   border shadow  '>
                {/*main image*/}
                <Link
                    rel='noopener noreferrer'
                    href={`/article/${article.key}`}
                    className='group mx-auto max-w-sm bg-gray-50 hover:no-underline focus:no-underline '
                >
                    <Image
                        src={article.image}
                        alt=' article image'
                        height={288}
                        width={999}
                        className='h-72 w-full bg-gray-500 object-cover object-center'
                    />
                </Link>
                {/*user section*/}
                <div className='flex items-center justify-between p-3'>
                    <div className='flex items-center space-x-2'>
                        <Image
                            src={article.user.image}
                            alt=''
                            height={32}
                            width={32}
                            className='-sm -gray-300 h-12 w-12 rounded-full bg-gray-500 object-cover object-center'
                        />
                        <div className={'p-2 '}>
                            <Link href={`/user/${article.user.username}`}>
                                <div className='leadi text-sm font-semibold'>
                                    {article.user.name}
                                </div>
                            </Link>
                            <div className='inline-block text-xs opacity-80 '>
                                {`${new Date(article.updatedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })} (${getPostTimeAgo(article.updatedAt)})`}
                            </div>
                        </div>
                    </div>
                    <button title='Open options' type='button'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            className='h-5 w-5 fill-current'
                        >
                            <path d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z'></path>
                            <path d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z'></path>
                            <path d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z'></path>
                        </svg>
                    </button>
                </div>
                <div className={'relative'}>
                    <Link
                        rel='noopener noreferrer'
                        href={`/article/${article.key}`}
                        className='group mx-auto max-w-sm bg-gray-50 hover:no-underline focus:no-underline '
                    >
                        <h1 className={'px-2'}>{article.title}</h1>
                    </Link>

                    <div className={'absolute right-6 top-3'}>
                        <ReadingList post_id={article._id} />
                    </div>
                </div>

                <div className='mt-6    flex flex-col items-start justify-start pl-2 '>
                    <div className='text-xl font-extrabold text-black'>{article.topic.name}</div>
                    <div className=' flex flex-wrap justify-start '>
                        <div className='m-1 rounded px-2 py-1  '>#javascript</div>
                        <div className='m-1 rounded px-2 py-1  '>#javascript</div>
                        <div className='m-1 rounded px-2 py-1  '>#javascript</div>
                        <div className='m-1 rounded px-2 py-1  '>#javascript</div>
                        <div className='m-1 rounded px-2 py-1  '>#javascript</div>
                    </div>
                </div>
                <div className={'flex w-full items-center justify-between px-2 py-3'}>
                    <div className={'flex justify-start  space-x-4 font-extrabold'}>
                        <div className={'flex space-x-2'}>
                            <i className=' pi pi-arrow-up h-4 w-4 p-1 font-semibold' />{' '}
                            <span>332</span>
                        </div>
                        <div className={'flex space-x-2'}>
                            <i className=' pi pi-arrow-down h-4 w-4 p-1 font-semibold' />
                            <span>232</span>
                        </div>
                        <div className={'flex space-x-2'}>
                            <i className=' pi pi-comments h-4 w-4 p-1 font-semibold' />
                            <span>132</span>
                        </div>
                        <div className={'flex space-x-2'}>
                            <i className=' pi pi-share-alt h-4 w-4 p-1 font-semibold' />
                            <span>122</span>
                        </div>
                    </div>
                    <div>
                        <div className={'flex space-x-2'}>
                            <i className=' pi pi-share-alt h-4 w-4 p-1 font-semibold' />
                            <span>122</span>
                        </div>
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
