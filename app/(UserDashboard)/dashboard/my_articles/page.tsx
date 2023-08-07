'use client';
import { fetchArticleByUser } from '@/helpers/backend_helper';
import { useFetch } from '@/helpers/hooks';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const MyComponent = () => {
    let [articles, setArticles, { loading }] = useFetch(fetchArticleByUser);
    console.log(articles);
    let data = articles?.docs || [];
    const imageBodyTemplate = (data) => {
        return <img src={data.image} alt={data.title} className='w-6rem -2 -round h-32 w-48' />;
    };
    const topicTemplete = (data) => {
        return <div>{data.topic.name}</div>;
    };

    if (loading) return <div>loading</div>;
    return (
        <div>
            <div className='card'>
                <DataTable value={data} tableStyle={{ minWidth: '60rem' }}>
                    <Column header='Topic' body={topicTemplete}></Column>
                    <Column field='Title' header='Title'></Column>
                    <Column header='Image' body={imageBodyTemplate}></Column>
                    <Column
                        header={'Edit'}
                        body={(data) => {
                            return (
                                <a href={`/dashboard/edit-article/${data._id}`}>
                                    <i className='pi pi-pencil'></i>
                                </a>
                            );
                        }}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default MyComponent;
