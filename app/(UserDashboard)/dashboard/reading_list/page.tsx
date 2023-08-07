'use client';
import ReadingList from '@/components/ReadingList';
import { fetchToReadingList } from '@/helpers/backend_helper';
import { useFetch } from '@/helpers/hooks';

const MyComponent = () => {
    let [readingList, getReadinglist, { loading }] = useFetch(fetchToReadingList, {});
    console.log(readingList);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!readingList?.length) {
        return <div>No article in reading list</div>;
    }
    return (
        <div className='grid'>
            <div className='col-12'>
                <div className={' w-full p-2'}>
                    {readingList?.map((item) => <ReadingList key={item._id} article={item} />)}
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
