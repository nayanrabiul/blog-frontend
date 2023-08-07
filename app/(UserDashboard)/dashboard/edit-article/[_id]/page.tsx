'use client';
import { fetchSingleArticle } from '@/helpers/backend_helper';
import { useFetch } from '@/helpers/hooks';
import Edit from './edit';

const MyComponent = ({ params }: { params: { _id: string } }) => {
    let _id = params._id;
    let [article, setArticle, { loading }] = useFetch(fetchSingleArticle, { _id });
    if (loading) return <div>Loading...</div>;
    else {
        return (
            <div>
                <Edit article={article} />
            </div>
        );
    }
};

export default MyComponent;
