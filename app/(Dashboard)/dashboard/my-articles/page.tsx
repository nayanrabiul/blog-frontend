'use client';
import React from 'react';
import { useFetch } from '@/helpers/hooks';
import { fetchArticleByUser } from '@/helpers/backend_helper';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import  Image  from 'next/image';

const MyComponent = () => {
    let [articles, setArticles, { loading }] = useFetch(fetchArticleByUser);
    if (loading) return (<div>loading</div>);
    let data = articles.docs;
    const imageBodyTemplate = (data) => {
        return <img src={data.image} alt={data.title} className='w-6rem shadow-2 border-round w-48 h-32' />;
    };
    const topicTemplete = (data) => {
        console.log('fklasdkljfasjdf', data);
        return <div>{data.topic.name}</div>;
    };

    return (
        <div>
            <div className='card'>
                <DataTable value={data} tableStyle={{ minWidth: '60rem' }}>

                    <Column header='Topic' body={topicTemplete}></Column>
                    <Column field='Title' header='Title'></Column>
                    <Column header='Image' body={imageBodyTemplate}></Column>
                    <Column header={'Edit'} body={(data) => {
                        return <a href={`/dashboard/edit-article/${data._id}`}>
                            <i className='pi pi-pencil'></i>
                        </a>;

                    }}></Column>

                </DataTable>
            </div>
        </div>
    );
};

export default MyComponent;

