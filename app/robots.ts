import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/article/'],
            disallow: ['/admin/', '/dashboard/', '/new-article/', '/login/'],
        },
        sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
    };
}
