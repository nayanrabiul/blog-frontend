'use client';
import { fetchTopics } from '@/helpers/backend_helper';
import { useFetch } from '@/helpers/hooks';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import UploadFIle from '../image_uploader';

let api = `${process.env.NEXT_PUBLIC_API_URL}/api/uploadSingleFile`;
const Editor = ({ formik }) => {
    const [topics, getTopics, { loading }] = useFetch(fetchTopics);

    const toast = useRef(null);
    return (
        <>
            <Toast ref={toast} />
            <div
                className={
                    'flex h-[85vh] flex-col items-stretch justify-start overflow-scroll rounded px-6 py-2 '
                }
            >
                {formik.values?.image.length > 0 ? (
                    <Image
                        className={'mb-8 h-[30vh] w-full p-3'}
                        src={formik.values.image[0]}
                        height={100}
                        width={100}
                        alt={'image'}
                    />
                ) : (
                    <UploadFIle
                        api={api}
                        multiple={false}
                        name={'image'}
                        id={'image'}
                        maxFileSize={1000000}
                        className={'w-full p-3 text-5xl'}
                        value={formik?.values?.image}
                        onChange={(imageUrls) => {
                            formik.setFieldValue('image', imageUrls);
                        }}
                    />
                )}

                <div className=' justify-content-center flex'>
                    {loading ? (
                        <p>Loading Topics...</p>
                    ) : (
                        <>
                            <Dropdown
                                value={formik?.values?.topic}
                                onChange={(e) => {
                                    console.log(e);
                                    formik.setFieldValue('topic', e.value);
                                }}
                                options={topics.map((topic) => {
                                    return {
                                        name: topic.name,
                                        value: topic._id,
                                    };
                                })}
                                optionLabel='name'
                                placeholder='Select a Topic'
                                filter
                                // valueTemplate={selectedCountryTemplate}
                                className='md:w-14rem w-full'
                            />
                        </>
                    )}
                </div>
                <br />

                <span className='p-float-label '>
                    <InputText
                        type={'text'}
                        className={'mb-8 w-full p-3 text-3xl font-bold'}
                        id='title'
                        name='title'
                        placeholder='Title'
                        value={formik?.values?.title}
                        onChange={formik.handleChange}
                    />
                </span>

                <span className='p-float-label'>
                    <InputTextarea
                        className={'mb-8 h-[80vh] w-full p-3'}
                        id='content'
                        name='content'
                        value={formik?.values?.content}
                        onChange={(e) => {
                            formik.setFieldValue('content', e.target.value);
                        }}
                        rows={5}
                        cols={30}
                    />
                    <label htmlFor='content'>Content</label>
                </span>
                <Button onClick={formik.handleSubmit} label='Submit' />
            </div>
        </>
    );
};
export default Editor;
