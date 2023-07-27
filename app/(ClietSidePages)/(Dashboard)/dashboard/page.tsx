'use client';
import React from 'react';
import { Button } from 'primereact/button';
import { useUserContext } from '@/context/user';

const MyComponent = () => {
    const { user } = useUserContext();
    return (
        // <div>
        //     {JSON.stringify(user)}
        // </div>

        <div className='grid'>
            <div className='col-12'>
                <div className='card'>
                    <h5>Empty Page</h5>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
            </div>
        </div>

    );
};

export default MyComponent;
