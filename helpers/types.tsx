import React, { ReactNode } from 'react';
export interface UserType {
    _id?: string;
    name: string;
    username?: string;
    email: string;
    image: string;
    role?: string;
    reading_list?: string[];
    auth_type?: string;
}
import { useState } from 'react';

export type PuppiesData = {
    _id: string;
    user?: string;
    name?: string;
    price?: number;
    gender?: string;
    category?: string;
    breed?: { name?: string };
    description?: string;
    health?: string;
    age?: string;
    traits?: {
        personality?: string;
        trainability?: string;
        energy_level?: string;
        height?: string;
        childrens?: string;
        weight?: string;
        shedding?: string;
        life_expectancy?: string;
        grooming?: string;
        braking_level?: string;
    };
    history?: string;
    images?: string;
    address?: string;
    zip_code?: string;
};

export interface UserType {
    _id?: string;
    name: string;
    first_name?: string;
    last_name?: string;
    email: string;
    phone: string;
    image: string;
    role?: string;
    access_token?: string;
    auth_type?: string;
    is_verified_seller?: boolean;
    seller_information?: { phone: string };
    seller_about?: string;
    shipping_address?: {};
    designation?: string;
    earning_history?: {
        amount: number;
        type_of: 'service' | 'product' | 'puppies';
        more_info: any;
    }[];
    total_earnings?: number;
    total_withdrawals?: number;
    withdrawable_amount?: number;
    withdrawal_history?: {
        amount: number;
        more_info: any;
    }[];
}

export interface ResponsePeginatatedData {
    error: boolean;
    msg: string;
    data: {
        docs: any;
        totalPages: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        totalDocs: number;
        page: number;
        limit: number;
    };
}

export interface PaginatedTableData {
    docs: any;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    totalDocs: number;
    page: number;
    limit: number;
}

export interface TableData {
    data: any;
}

export type Schedule = {
    saturday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
    sunday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
    monday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
    tuesday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
    wednesday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
    thursday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
    friday: {
        is_active: boolean;
        slots: {
            start: string;
            end: string;
        }[];
    };
};
