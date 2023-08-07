'use client';
import Editor from '@/components/editor/editor';
import { postArticle } from '@/helpers/backend_helper';
import { postData } from '@/helpers/hooks';
import markdownit from '@wcj/markdown-to-html';
import { useFormik } from 'formik';
import Image from 'next/image';

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
                _id: values._id,
                title: values.title,
                content: values.content,
                image: values.image[0],
                topic: values.topic,
            };

            console.log('payload', payload);
            postData(postArticle, payload);
        },
    });

    const Html = markdownit(formik.values.content);

    return (
        <div className={'b-3 m-3 grid  grid-cols-2 gap-4 overflow-ellipsis '}>
            <div>
                <Editor formik={formik} />
            </div>
            {/*scroll x */}
            <div className={'h-[85vh] overflow-x-hidden  rounded bg-white'}>
                <Image
                    src={formik.values.image[0]}
                    alt='uploaded'
                    height={100}
                    width={100}
                    className={' m-2 h-[25vh] w-full rounded p-6'}
                />

                <article className='prose m-3  h-[82vh] overflow-ellipsis rounded p-6  lg:prose-xl'>
                    <h1>{formik.values.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: Html }} />
                </article>
            </div>
        </div>
    );
};
export default Edit;
