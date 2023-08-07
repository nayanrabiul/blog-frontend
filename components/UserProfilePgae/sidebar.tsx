'use client';
import { fetchTopicsPerUser } from '@/helpers/backend_helper';
import { useFetch } from '@/helpers/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

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

    let className = 'hidden';

    if (topics.isArray) return <div>Loading...</div>;
    return (
        <div className={' h-full w-full py-6 shadow'}>
            <div className={'container relative mx-auto flex h-full flex-row'}>
                <div className={'flex h-full flex-col items-center justify-center '}>
                    <div
                        className={
                            ' mr-6  hidden h-[100%]  w-72 flex-col items-start justify-start rounded border shadow md:flex'
                        }
                    >
                        {topics.map((topic) => (
                            <div
                                className={`w-full cursor-pointer px-5  py-3 ${
                                    current_topic_id === topic._id
                                        ? 'flex     w-full  font-bold    '
                                        : ''
                                } `}
                                key={topic._id}
                            >
                                <div
                                    className={'mr-6'}
                                    onClick={() => {
                                        router.push(pathname + `/?topic=${topic._id}`);
                                    }}
                                >
                                    {topic.name} ({topic.count})
                                </div>

                                <div className={''}>
                                    {current_topic_id === topic._id ? (
                                        //add a cross to remove the filter
                                        <span
                                            className={'rounded-full text-center    '}
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
