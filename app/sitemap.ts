import { MetadataRoute } from 'next';

async function getData() {
    let api = '';
    api = `${process.env.NEXT_PUBLIC_API_URL}/api/article/all_article_link`;

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let data = await getData();

    // return [
    // {
    //     url: 'https://acme.com',
    //     lastModified: new Date(),
    // },
    // {
    //     url: 'https://acme.com/about',
    //     lastModified: new Date(),
    // },
    // {
    //     url: 'https://acme.com/blog',
    //     lastModified: new Date(),
    // },
    // ]
    return data.data.map((item) => {

        return {
            url: `${process.env.NEXT_PUBLIC_URL}/article/${item.link}`,
            lastModified: item.updatedAt,
        };
    });
}
