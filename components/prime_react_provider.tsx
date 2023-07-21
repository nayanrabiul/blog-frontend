'use client'

import React from 'react';
import { PrimeReactProvider } from 'primereact/api';

const PrimeProvider = ({children}) => {
    return  (
        <PrimeReactProvider>
            {children}
        </PrimeReactProvider>
    )
};

export default PrimeProvider;
