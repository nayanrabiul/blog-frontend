'use client'
import React from 'react';
import { Button } from 'primereact/button';
import { useUserContext } from '@/context/user';

const MyComponent = () => {
    const {user} = useUserContext();
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default MyComponent;
