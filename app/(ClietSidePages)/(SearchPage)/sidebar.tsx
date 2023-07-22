'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/helpers/hooks';
import { fetchTopics } from '@/helpers/backend_helper';


export default function Sidebar({ children }) {
    let router = useRouter();
    let data = useFetch(fetchTopics);
    let topics = data[0] || [];

    const searchParams = useSearchParams();
    const current_topic_id = searchParams.get('topic');

    //check if user in on the search page
    let pathname = usePathname();
    let query = searchParams.get('query');
    let filter = searchParams.get('filter') || 'Article';


    if (topics.isArray) return <div>Loading...</div>;
    return (
        <div className={'w-full flex justify-center items-start '}>
            <div className={'container w-full h-[85vh] rounded flex justify-between items-start '}>

                {
                    pathname === '/search' ?
                        (
                            <div className={'w-72 h-full hidden md:flex flex-col items-start justify-start space-y-6 '}>
                                {
                                    ['Article', 'User', 'Tag', 'Topic'].map((item) => (
                                        <div
                                            className={`my-2 mx-4  cursor-pointer w-full font-bold scale-110  flex ${
                                                //match by filter
                                                filter === item ? 'text-green-600' : ''
                                            }`}
                                            onClick={() => router.push(`/search?query=${query}&filter=${item}`)}>
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>

                        ) :
                        (
                            <div className={'h-full flex flex-col justify-center items-center'}>
                                <div
                                    className={'w-72 border border-green-900 mr-6 rounded h-[100%] hidden md:flex flex-col items-start justify-start'}>
                                    {topics.map((topic) => (
                                        <div
                                            className={`px-5 py-3 w-full  cursor-pointer ${
                                                current_topic_id === topic._id ? 'w-full bg-gray-400   font-bold  flex border  border-green-900 ' : ''
                                            } `}
                                            key={topic._id}
                                        >
                                            <div
                                                className={'mr-6'}
                                                onClick={() => {
                                                    router.push(`/?topic=${topic._id}`);
                                                }}>{topic.name}</div>

                                            <div className={''}>
                                                {current_topic_id === topic._id ? (
                                                    //add a cross to remove the filter
                                                    <span
                                                        className={'text-center rounded-full border border-green-900 '}
                                                        onClick={() => {
                                                            console.log('clicked');
                                                            router.push('/');
                                                        }}
                                                    >
                                    x
                                </span>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>)
                }

                <div className={'w-full h-full  overflow-y-scroll'}> {children}</div>
            </div>
        </div>
    );
}




