import React, { useRef, useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import Image from 'next/image';
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import axios from 'axios';

export default function UploadFIle({ api, value, onChange, multiple = false, maxFileSize = 1000000 }) {

    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / maxFileSize;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className}
                 style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className='flex align-items-center gap-3 ml-auto'>
                    <span>{formatedValue} / 100 MB</span>
                    <ProgressBar value={value} showValue={false}
                                 style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className='flex items-center flex-wrap'>
                <div className='flex items-center' style={{ width: '80%' }}>
                    <Image alt={file.name} role='presentation' src={file.objectURL} height={100} width={100} />
                    <div className={'w-full flex flex-col text-right'}>
                        <span className=''>
                            {`${file.name} ${new Date().toLocaleDateString()}`}
                        </span>
                        <span className={'font-bold'}>{props.formatSize}</span>
                    </div>


                </div>
                <Button type='button' icon='pi pi-times'
                        className='p-button-outlined p-button-rounded p-button-danger ml-auto'
                        onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    return (
        <div className='card'>

            <Toast ref={toast}></Toast>

            <Tooltip target='.custom-choose-btn' content='Choose' position='bottom' />
            <Tooltip target='.custom-upload-btn' content='By pressing this button you can upload your files'
                     position='bottom' />
            <Tooltip target='.custom-cancel-btn' content='Clear' position='bottom' />

            <FileUpload
                ref={fileUploadRef}
                name='files'
                url={api}
                accept='image/*'
                multiple={true}
                maxFileSize={maxFileSize}
                customUpload={true}
                uploadHandler={async (e) => {
                    //set uploaded files to value
                    let _totalSize = 0;
                    let urls = [];
                    for (let i = 0; i < e.files.length; i++) {
                        let file = e.files[i];
                        //upload to api  xhr
                        let formData = new FormData();
                        formData.append('file', file, file.name);
                        let res = await axios.post(api, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            },
                        );
                        urls.push(res.data.url);
                    }
                    onChange([...value, ...urls]);
                    //clear fileupload
                    fileUploadRef.current.clear();
                }
                }
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={
                    <>
                        <div className={'flex  flex-wrap  '}>
                            {value.map((url) => (
                                <Image
                                    key={url}
                                    src={url}
                                    alt='uploaded'
                                    height={100}
                                    width={100}
                                    className={'m-2 rounded'}
                                />
                            ))}
                        </div>
                    </>
                }
                chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

        </div>
    );
}

//properties for upper buttons
const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
};
const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
};
const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
};
