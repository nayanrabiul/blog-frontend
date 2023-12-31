'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/helpers/hooks';
import { fetchTopics } from '@/helpers/backend_helper';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';


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

    const [visible, setVisible] = React.useState(false);

    if (topics.isArray) return <div>Loading...</div>;
    return (
        <div className={'w-full  h-full  py-6 '}>

            <div className={'relative h-full container mx-auto flex flex-row   '}>
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
                                        router.push(`/?topic=${topic._id}`);
                                    }}>{topic.name}</div>

                                <div className={''}>
                                    {current_topic_id === topic._id ? (
                                        //add a cross to remove the filter
                                        <span
                                            className={'text-center rounded-full    '}
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
                </div>
                <div className={'h-full w-full overflow-x-hidden'}> {children}</div>
            </div>
            {/*for mobile*/}
            <div className=' md:hidden card flex justify-content-center'>
                <Sidebar visible={visible} onHide={() => setVisible(false)} position='right'>
                    <div className={'flex flex-col items-center justify-center'}>
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
                                        router.push(`/?topic=${topic._id}`);
                                    }}>{topic.name}</div>

                                <div className={''}>
                                    {current_topic_id === topic._id ? (
                                        //add a cross to remove the filter
                                        <span
                                            className={'text-center rounded-full    '}
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
                </Sidebar>
                <Button className={'fixed bottom-6 right-6'} icon='pi pi-arrow-up'
                        onClick={() => setVisible(true)}>Topics</Button>
            </div>

        </div>
    );
}




