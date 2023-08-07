import ArticleCard from '@/components/ArticleCard/server/ArticleCard';

async function getData(params) {
    let username = params.username[0];
    let topic_id = params.username[1];
    console.log(topic_id);
    if (username === undefined) {
        throw new Error('Failed to fetch data. User not found');
    }

    let api = `${process.env.NEXT_PUBLIC_API_URL}/api/article/list-by-user?username=${username}`;

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

export default async function Home({ params, searchParams }) {
    let topic_id = searchParams.topic;
    let data = await getData(params);
    let articles = data.data.docs || [];

    return (
        <div>
            <section className=''>
                <div className='space-y-6 sm:space-y-12'>
                    {/*<FeaturedPost topic_id={topic_id} />*/}
                    {/*posts that will be displayed on the homepage*/}
                    {/*<div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>*/}
                    <div className='sm:pr-3'>
                        {articles.length === 0 ? (
                            <div className='w-max text-center text-2xl font-bold '>
                                No articles found
                            </div>
                        ) : (
                            articles.map((article) => (
                                <ArticleCard key={article._id} article={article} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
