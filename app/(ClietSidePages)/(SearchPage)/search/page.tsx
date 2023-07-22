'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFetch } from '@/helpers/hooks';
import { searchArticle } from '@/helpers/backend_helper';
import ReadingListPost from '@/app/(Dashboard)/dashboard/reading_list/ReadingListPost';

export default function Search() {
    let searchParams = useSearchParams();
    let query = searchParams.get('query');
    let filter = searchParams.get('filter') || 'Article';
    let [articles, getArticles,{loading}] = useFetch(searchArticle, { query: query, filter: filter });
    useEffect(() => {
        getArticles({ search: query, filter: filter });
    }, [query, filter]);

    if (articles?.docs?.length == 0) {
        return <h1>Nothing found!</h1>;
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <h1>
            {articles?.docs?.map((article) => (
                <ReadingListPost key={article} post={article} />
            ))}
        </h1>
    );
}

