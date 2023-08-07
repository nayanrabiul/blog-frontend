
'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/helpers/hooks';
import { fetchTopics } from '@/helpers/backend_helper';


export default function HomeSidebar({ children }) {
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
        <div className={'w-full  h-full  py-6 '}>
            <div className={'relative h-full container mx-auto flex flex-row   '}>
                <div className={'h-full flex flex-col justify-center items-center '}>
                    <div
                        className={'w-72 shadow border   mr-6 rounded h-[100%] hidden md:flex flex-col items-start justify-start'}>
                        {
                            ['Article', 'User', 'Tag', 'Topic'].map((item) => (
                                <div
                                    key={item}
                                    className={`px-5 py-3 w-full  cursor-pointer font-bold scale-110  flex ${
                                        //match by filter
                                        filter === item ? 'text-green-600' : ''
                                    }`}
                                    onClick={() => router.push(`/search?query=${query}&filter=${item}`)}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={'h-full w-full overflow-x-hidden'}> {children}</div>
            </div>
        </div>
    );
}









