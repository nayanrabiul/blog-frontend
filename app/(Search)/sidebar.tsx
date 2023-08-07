'use client';
import { fetchTopics } from '@/helpers/backend_helper';
import { useFetch } from '@/helpers/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchSidebar({ children }) {
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
        <div className={'h-full  w-full  py-6 '}>
            <div className={'container relative mx-auto flex h-full flex-row   '}>
                <div className={'flex h-full flex-col items-center justify-center '}>
                    <div
                        className={
                            'mr-6 hidden h-[100%]   w-72 flex-col items-start justify-start rounded border shadow md:flex'
                        }
                    >
                        {['Article', 'User', 'Tag', 'Topic'].map((item) => (
                            <div
                                key={item}
                                className={`flex w-full scale-110  cursor-pointer px-5 py-3  font-bold ${
                                    //match by filter
                                    filter === item ? 'text-green-600' : ''
                                }`}
                                onClick={() => router.push(`/search?query=${query}&filter=${item}`)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'h-full w-full overflow-x-hidden'}> {children}</div>
            </div>
        </div>
    );
}
