'use client';

'use client';
import React, { useState } from 'react';
import markdownit from '@wcj/markdown-to-html';
import Image from 'next/image';
import { useFormik } from 'formik';
import { postData } from '@/helpers/hooks';
import { postArticle, postTopic } from '@/helpers/backend_helper';
import Editor from '@/components/editor/editor';


const Edit = ({ article }) => {

    const formik = useFormik({
        initialValues: {
            _id: article._id || '',
            title: article.title || '',
            content: article.content || '',
            image: [article.image] || [],
            topic: article.topic._id || '',
        },
        onSubmit: async (values) => {

            let payload = {
                _id : values._id,
                title: values.title,
                content: values.content,
                image: values.image[0],
                topic: values.topic,
            }

            console.log("payload",payload);
            postData(postArticle, payload);

        },
    });

    const Html = markdownit(formik.values.content);

    return (
        <div className={'grid grid-cols-2 gap-4  overflow-ellipsis m-3 b-3 border-green-900'}>
            <div>
                <Editor formik={formik} />
            </div>
            {/*scroll x */}
            <div className={'h-[85vh] overflow-x-hidden border bg-white rounded'}>

                <Image
                    src={formik.values.image[0]}
                    alt='uploaded'
                    height={100}
                    width={100}
                    className={' p-6 m-2 rounded w-full h-[25vh]'}
                />

                <article
                    className='prose lg:prose-xl  h-[82vh] overflow-ellipsis m-3 p-6 border-green-900 rounded'>
                    <h1>{formik.values.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: Html }} />
                </article>
            </div>

        </div>
    );
};
export default Edit;
