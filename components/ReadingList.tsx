'use client';
import React, { useEffect } from 'react';
import { useUserContext } from '@/context/user';
import { postData, useActionConfirm } from '@/helpers/hooks';
import { addToReadingList, removeToReadingList } from '@/helpers/backend_helper';

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
            setReadingListData(readingListData.filter(item => item !== post_id));
            postData(removeToReadingList, { _id: post_id }, () => {
            }, false);
        } else {
            setReadingListData([...readingListData, post_id]);
            postData(addToReadingList, { _id: post_id }, () => {
            }, false);
        }


    };
    return (
        <div className={'text-center'}>
            <i onClick={handlePostReadingList}
               className={`text-center pi  ${isReadingList ? 'pi-bookmark-fill text-green-500 ' : 'pi-bookmark-fill text-white'} h-4 w-4 font-semibold`} />
        </div>
    );
};

export default ReadingList;
