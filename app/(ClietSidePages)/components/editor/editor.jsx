'use client';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'next/image';
import UploadFIle from '@/components/image_uploader';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { useFetch } from '@/helpers/hooks';
import { fetchTopics } from '@/helpers/backend_helper';
import { Dropdown } from 'primereact/dropdown';


let api = `${process.env.NEXT_PUBLIC_API_URL}/api/uploadSingleFile`;
const Editor = ({ formik }) => {
    const [topics, getTopics, { loading }] = useFetch(fetchTopics);


    const toast = useRef(null);
    return (
        <>
            <Toast ref={toast} />
            < div className={'h-[85vh] overflow-scroll px-6 py-2 rounded flex flex-col justify-start items-stretch '}>
                {formik.values?.image.length > 0 ? (
                    <Image
                        className={'w-full h-[30vh] p-3 mb-8'}
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

                <div className=' flex justify-content-center'>
                    {loading ? <p>Loading Topics...</p> :
                        <>
                            <Dropdown
                                value={formik?.values?.topic}
                                onChange={( e) => {
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
                                className='w-full md:w-14rem' />
                        </>
                    }
                </div>
                <br />

                <span className='p-float-label '>
                <InputText
                    type={'text'}
                    className={'w-full p-3 mb-8 text-3xl font-bold'}
                    id='title'
                    name='title'
                    placeholder='Title'
                    value={formik?.values?.title}
                    onChange={formik.handleChange}
                />

                </span>

                <span className='p-float-label'>
                <InputTextarea
                    className={'w-full h-[80vh] p-3 mb-8'}
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
    )
        ;
};
export default Editor;



