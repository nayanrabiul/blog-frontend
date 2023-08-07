'use client';
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { postTopic } from '@/helpers/backend_helper';
import { postData } from '@/helpers/hooks';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

const SignupForm = () => {
    const uploadedFiles = [];
    const toast = useRef(null);
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            name: '',
            image: '',
        },
        onSubmit: async (values) => {
            // let image = await uploadImage(values.image, 'puppies', '');
            // values.image = image[0];
            // toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
            postData(postTopic, values);
        },
    });
    const [uploadedFIlesUrl, setUploadedFIlesUrl] = React.useState([]);
    const onUpload = (event) => {
        for (let file of event.files) {
            uploadedFiles.push(file);
        }
        setUploadedFIlesUrl(uploadedFiles);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='p-float-label'>
                <InputText
                    id='topic_name'
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                <label htmlFor='topic_name'>topic Name</label>
            </div>
            <br />
            <div className='card flex justify-content-center'>
                <Toast ref={toast}></Toast>
                <FileUpload
                    mode='basic'
                    multiple={false}
                    name='demo[]'
                    url='/api/upload'
                    accept='image/png'
                    maxFileSize={1000000}
                    onUpload={onUpload}
                />
            </div>
            <Button label='Submit' />
        </form>
    );
};

export default SignupForm;
