'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/helpers/hooks';
import { fetchTopics, fetchTopicsPerUser } from '@/helpers/backend_helper';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';


export default function UserSidebar({ children }) {
    let router = useRouter();
    let data = useFetch(fetchTopicsPerUser);
    let topics = data[0] || [];

    const searchParams = useSearchParams();
    const current_topic_id = searchParams.get('topic');
    console.log(current_topic_id);

    //check if user in on the search page
    let pathname = usePathname();


    const [visible, setVisible] = React.useState(false);


    if (topics.isArray) return <div>Loading...</div>;
    return (
        <div className={'w-full h-full py-6 shadow  '}>
            <div className={'relative h-full container mx-auto flex flex-row'}>
                <div className={'h-full flex flex-col justify-center items-center '}>
                    <div
                        className={'w-72 shadow border  mr-6 rounded h-[100%] hidden md:flex flex-col items-start justify-start'}>
                        {topics.map((topic) => (
                            <div
                                className={`px-5 py-3 w-full  cursor-pointer ${
                                    current_topic_id === topic._id ? 'w-full     font-bold  flex    ' : ''
                                } `}
                                key={topic._id}
                            >
                                <div
                                    className={'mr-6'}
                                    onClick={() => {
                                        router.push(pathname + `/?topic=${topic._id}`);
                                    }}>{topic.name} ({topic.count})
                                </div>

                                <div className={''}>
                                    {current_topic_id === topic._id ? (
                                        //add a cross to remove the filter
                                        <span
                                            className={'text-center rounded-full    '}
                                            onClick={() => {
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
                </div>
                <div className={'h-full w-full overflow-x-hidden'}> {children}</div>
            </div>

        </div>
    );
}




