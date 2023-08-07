'use client';
import React from 'react';
import { useFetch } from '@/helpers/hooks';
import { fetchToReadingList } from '@/helpers/backend_helper';
import ReadingListPost from '@/common_components/ArticleCard/client/ArticleCard';


const MyComponent = () => {
    let [readingList, getReadinglist, { loading }] = useFetch(fetchToReadingList, {});
    console.log(readingList);
    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    if(!readingList?.length){
       return  <div>No article in reading list</div>
    }
    return (
        <div className='grid'>
            <div className='col-12'>
                <div className={' p-2 w-full'}>
                    {readingList?.map((item) => (
                        <ReadingListPost key={item._id} article={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
