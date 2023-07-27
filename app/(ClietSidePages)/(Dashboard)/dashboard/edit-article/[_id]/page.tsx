'use client';
import React from 'react';
import {  useFetch } from '@/helpers/hooks';
import { fetchSingleArticle } from '@/helpers/backend_helper';
import Edit from '@/app/(ClietSidePages)/(Dashboard)/dashboard/edit-article/[_id]/edit';


const MyComponent = ({ params }: { params: { _id: string } }) => {
    let _id = params._id;
    let [article, setArticle, { loading }] = useFetch(fetchSingleArticle, { _id });
    if (loading) return <div>Loading...</div>;
    else {

        return (
            <div>
                < Edit article={article} />
            </div>
        );
    }

};

export default MyComponent;
