'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { postData, useFetch } from '@/helpers/hooks';
import { fetchSingleArticle, postArticle } from '@/helpers/backend_helper';
import Editor from '@/components/editor/editor';
import Image from 'next/image';
import { useFormik } from 'formik';
import Edit from '@/app/(Dashboard)/dashboard/edit-article/[_id]/edit';

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
