import axios from 'axios';

//apply base url for axios
const API_URL = process.env.NEXT_PUBLIC_API_URL + '/api';

export const axiosApi = axios.create({
    baseURL: API_URL,
    validateStatus: function (status) {
        return status >= 200 && status < 600; // default
    },
});

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export async function get(url: any, data: any, config = {}) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${
        localStorage.getItem('authToken') ?? ''
    }`;
    return await axiosApi.get(url, { ...config, params: data }).then((response) => response.data);
}

export async function post(url: any, data: any, config = {}) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${
        localStorage.getItem('authToken') ?? ''
    }`;
    return await axiosApi.post(url, data, { ...config }).then((response) => response.data);
}

export async function postForm(url: any, data: any, config = {}) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${
        localStorage.getItem('token') ?? ''
    }`;
    axiosApi.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    let form = new FormData();
    for (let key in data) {
        form.append(key, data[key]);
    }
    return axiosApi.post(url, form, { ...config }).then((response) => response.data);
}

export async function put(url: any, data: any, config = {}) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${
        localStorage.getItem('authToken') ?? ''
    }`;
    return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function del(url: any, data: any, config = {}) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${
        localStorage.getItem('authToken') ?? ''
    }`;
    return await axiosApi
        .delete(url, { ...config, params: data })
        .then((response) => response.data);
}
