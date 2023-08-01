import ArticleCard from '@/common_components/ArticleCard/server/ArticleCard';

async function getData(topic_id) {
    let api = '';
    if (topic_id === undefined) {
        api = `${process.env.NEXT_PUBLIC_API_URL}/api/article/paginated-list/`;
    } else {
        api = `${process.env.NEXT_PUBLIC_API_URL}/api/article/paginated-list?topic_id=${topic_id}`;
    }
    const res = await fetch(api, { cache: 'no-cache' });

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Home({ searchParams }) {
    let topic_id = searchParams.topic;
    let data = await getData(topic_id);
    let articles = data.data.docs || [];

    return (
        <div>
            <section className=''>
                <div className='space-y-6 sm:space-y-12 '>
                    {/*<FeaturedPost topic_id={topic_id} />*/}
                    {/*posts that will be displayed on the homepage*/}
                    {/*<div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>*/}
                    <div className='sm:pr-3'>
                        {
                            articles.length === 0 ? (
                                <div className='text-center w-max text-2xl font-bold '>
                                    No articles found
                                </div>
                            )
                        :
                            articles.map((article) => (
                                <ArticleCard key={article._id} article={article} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

