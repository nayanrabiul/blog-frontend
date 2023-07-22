'use client';
import React, { useState } from 'react';
import markdownit from '@wcj/markdown-to-html';
import Image from 'next/image';
import { useFormik } from 'formik';
import { postData } from '@/helpers/hooks';
import { postArticle, postTopic } from '@/helpers/backend_helper';
import Editor from '@/components/editor/editor';


const Myapp = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            image: [],
            topic: '64ae21ee65f29377889fca4b',


        },
        onSubmit: async (values) => {

            let payload = { ...values, image: values.image[0] };
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
                {formik.values.image.length > 0 && (
                    <Image
                        src={formik.values.image[0]}
                        alt='uploaded'
                        height={100}
                        width={100}
                        className={' p-6 m-2 rounded w-full h-[25vh]'}
                    />)
                }
                <article
                    className='prose lg:prose-xl  h-[82vh] overflow-ellipsis m-3 p-6 border-green-900 rounded'>
                    <h1>{formik.values.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: Html }} />
                </article>
            </div>

        </div>
    );
};
export default Myapp;
