import Image from 'next/image';
import markdownit from '@wcj/markdown-to-html';
import sanitizeHtml from 'sanitize-html';
import React from 'react';


async function getData(key) {
    console.log(key);
    let api = `${process.env.NEXT_PUBLIC_API_URL}/api/article?key=${key}`;
    const res = await fetch(api, { cache: 'no-store' });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page({ params }: { params: { key: string } }) {

    let data = await getData(params.key);
    let article = data.data || null;
    const html = markdownit(article?.content);
    let sanitizedHtml = sanitizeHtml(html);
    return (
        <div className='mx-auto pr-3'>
            <div className='flex items-center space-x-2'>
                <Image src={article.user.image} alt=''
                       height={32}
                       width={32}
                       className='object-cover object-center w-12 h-12 rounded-full -sm bg-gray-500 -gray-300' />
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
            <Image src={article?.image} alt={article?.topic?.name} width={100} height={100}
                   className={'w-full h-96 rounded mt-3'} />
            <article className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto'>
                <h1 className={'pt-6 '}>{article?.title}</h1>
                {/*tags*/}
                <div className={'p-2 mb-4 rounded bg-gray-100'}>
                   <span className={'font-extrabold'}>{article?.topic?.name}</span>
                    <div className='flex flex-row space-x-2 '>

                        {[12, 31, 23].map((tag) => (
                            <div key={tag} className=' rounded px-2'>
                                {'#js'}
                            </div>
                        ))}
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            </article>
            {/*<CommentSection/>*/}
        </div>
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


