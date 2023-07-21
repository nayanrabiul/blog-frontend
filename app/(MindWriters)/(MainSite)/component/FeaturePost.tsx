import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

async function getData(topic_id) {
    let api = '';
    if (topic_id === undefined) {
        api = `${process.env.NEXT_PUBLIC_API_URL}/api/article/featured`;
    } else {
        api = `${process.env.NEXT_PUBLIC_API_URL}/api/article/featured?topic_id=${topic_id}`;
    }
    const res = await fetch(api, { cache: 'no-cache' });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function FeaturedPost({ topic_id }) {
    const res = await getData(topic_id);
    if (res.error) {
        return <div>{res.error}</div>;
    }
    let data = res.data;

    return (
        <article>
            <Link
                rel='noopener noreferrer'
                href={`/article/${data._id}`}
                className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50'
            >
                <Image
                    src={data.image}
                    alt={data.title}
                    className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500'
                    width={480}
                    height={360}
                />
                <div className='p-6 space-y-2 lg:col-span-5'>
                    <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>
                        {data.title}
                    </h3>
                    <span className='text-xs text-gray-600'>{
                        new Date(data.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })
                    }</span>
                    <p>
                        {/*convert markdown to html in reactjs and get 200 words*/}
                        {

                        }
                    </p>
                </div>
            </Link>
        </article>
    );
}
// data: {
//     _id: '64b0e26bbf6cda9c492f6520',
//     title: 'How to write blog posts [Markdown]',
//     image: 'https://appstick-resources.s3.ap-southeast-1.amazonaws.com/bully-mall/files//hqdefault.jpg',
//     content: '# Basics of Markdown\n' +
//       'Markdown is the most popular markup language that can be used
// to format documents. It can be used to create *websites*,*ebooks*,*email*,*chats in discussions forums*.\n' +
//       '\n' +
//       '## Topics\n' +
//       '1. Paragraphs \n' +
//       '\n' +
//       '    MD expects a full line space to show texts in a different line else it joins text in the same line.\n' +
//       '2.  Text decorations\n' +
//       '\n' +
//       '    MD can write **bold** texts, ~~italiic~~ *italic*  texts\n' +
//       '3. Headings\n' +
//       "    No of #'s represent the type of heading. Github will autom
// atically add id's to headings, so the text will be automatically linked. \n" +
//       '    ## This is h2\n' +
//       '    ### This is h3\n' +
//       '4. Links\n' +
//       '\n' +
//       '   [My Github](https://github.com/bhupendra1011 "all repos") account.[Bhupendra][1] github repo.\n' +
//       '\n' +
//       '5. Images\n' +
//       '    Images can be used just like links. ![Alt txt](img url)\n' +
//       '\n' +
//       '    !["cat Img"](http://placekitten.com/200/200)\n' +
//       '\n' +
//       '    Thumbnails images can also be used which links to larger image \n' +
//       '    [<img src="http://placekitten.com/20/20">](http://placekitten.com/200/200)\n' +
//       '\n' +
//       '6. Ordered and Unordered Lists\n' +
//       '\n' +
//       '    Coding Best Practices:\n' +
//       '\n' +
//       '    * Keep code DRY\n' +
//       '    * Writing Unit Test cases\n' +
//       '    * Checking cross-browser support\n' +
//       '\n' +
//       '    Steps to merge branch:\n' +
//       '\n' +
//       '    1. Create a branch from feature\n' +
//       '    1. commit your changes\n' +
//       '    1. push your changes\n' +
//       '    1. raise a pull request',
//     user: '64aff8568296d9862c0329ac',
//     topic: '64ae21ee65f29377889fca4b',
//     comments: [],
//     createdAt: '2023-07-14T05:51:39.474Z',
//     updatedAt: '2023-07-14T05:51:39.474Z',
//     __v: 0
//   }
// }
//
// -  ┌ GET /?_rsc=57fbd2a 200 in 1201ms
//    │
//    └──── GET http://localhost:5000/api/article/featured 200 in 206ms (cache:
