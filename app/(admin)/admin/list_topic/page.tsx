'use client';
import React from 'react';
import { useFetch } from '@/helpers/hooks';
import { fetchTopic, fetchTopics } from '@/helpers/backend_helper';
import { useUserContext } from '@/context/user';

const MyComponent = () => {
    const [topics, getTopics, { loading }] = useFetch(fetchTopics);
    let { user } = useUserContext();
    if (loading) return <h1>Loading...</h1>;
    return (
        <div>
            <h1>Topics</h1>
            {topics?.map((topic, i) => (
                <h3 key={topic.id}>{i + 1}. {topic.name}</h3>
            ))}
        </div>
    );
};

export default MyComponent;
