import Swal from 'sweetalert2';
import React from 'react';
import { notification } from 'antd';

const swalAlert = {
    success: async (message: string) => {
        await Swal.fire({
            title: 'Success',
            html: message,
            icon: 'success',
        });
    },
    error: async (message: string) => {
        await Swal.fire({
            title: 'Error',
            html: message,
            icon: 'error',
        });
    },
    warning: async (message: string, timer = true) => {
        await Swal.fire({
            title: 'Warning',
            html: message,
            icon: 'warning',
            timer: timer ? 3000 : undefined,
        });
    },
    confirm: async (message: string, confirmText: string) => {
        return await Swal.fire({
            title: 'Are you sure?',
            html: message,
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: confirmText || 'Yes',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
        });
    },
};

export default swalAlert;

export const antdAlert = {
    warning: (message: string, description: string) =>
        notification.warning({ message, description }),
};
