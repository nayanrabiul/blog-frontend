'use client';
import { useUserContext } from '@/context/user';
import { addToReadingList, removeToReadingList } from '@/helpers/backend_helper';
import { postData } from '@/helpers/hooks';
import React, { useEffect } from 'react';

const ReadingList = ({ post_id }) => {
    let { user, setLoggedInUser } = useUserContext();
    let [readingListData, setReadingListData] = React.useState([]);

    //sync reading list when user changes
    useEffect(() => {
        setReadingListData(user?.reading_list || []);
    }, [user]);

    let isReadingList = readingListData.includes(post_id);
    let handlePostReadingList = async (e) => {
        e.stopPropagation();
        if (readingListData.includes(post_id)) {
            setReadingListData(readingListData.filter((item) => item !== post_id));
            postData(removeToReadingList, { _id: post_id }, () => {}, false);
        } else {
            setReadingListData([...readingListData, post_id]);
            postData(addToReadingList, { _id: post_id }, () => {}, false);
        }
    };
    return (
        <div className={'rounded bg-white p-1 text-center shadow'}>
            <i
                onClick={handlePostReadingList}
                className={`pi text-center  ${
                    isReadingList
                        ? 'pi-bookmark-fill text-green-500'
                        : 'pi-bookmark-fill shdadow text-gray-500'
                } h-4 w-4 font-semibold`}
            />
        </div>
    );
};

export default ReadingList;
