'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFetch } from '@/helpers/hooks';
import { searchArticle } from '@/helpers/backend_helper';
import ArticleCard from '@/common_components/ArticleCard/client/ArticleCard';

export default function Search() {
    let searchParams = useSearchParams();
    let query = searchParams.get('query');
    let filter = searchParams.get('filter') || 'Article';
    let [articles, getArticles, { loading }] = useFetch(searchArticle, { query: query, filter: filter });
    console.log(articles);

    useEffect(() => {
        getArticles({ search: query, filter: filter });
    }, [query, filter]);


    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <div className='space-y-6 sm:space-y-12'>
                {/*<FeaturedPost topic_id={topic_id} />*/}
                {/*posts that will be displayed on the homepage*/}
                {/*<div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>*/}
                <div className='sm:pr-3'>
                    {
                        articles?.docs?.length === 0 ? (
                                <h1>Nothing found!</h1>
                            )
                            :
                            articles?.docs?.map((article, index) => (
                                <ArticleCard key={article.index} article={article} />
                            ))
                    }
                </div>
            </div>
        </div>

    );
}

