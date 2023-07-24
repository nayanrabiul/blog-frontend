import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import swalAlert from '@/common_components/alert';

type QueryParams = {
    [key: string]: any;
};

type DataResponse = {
    error: boolean;
    data?: any;
    msg: string;
    meta?: any;
};

type UseFetchResponse = [
    data: any | undefined,
    getData: (query?: QueryParams) => void,
    state: {
        query?: QueryParams;
        loading: boolean;
        error: boolean;
        errorMessage: string;
        clear: () => void;
    },
];

// ...............................      useFetch      .............................................
export const useFetch = (
    func: (params: QueryParams) => Promise<DataResponse>,
    query: QueryParams = {},
    load = true
): UseFetchResponse => {
    const router = useRouter();
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(load);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [params, setParams] = useState<QueryParams>({
        ...query,
        page: query?.page || 1,
        size: query?.size || 10,
    });

    useEffect(() => {
        if (load) {
            getData(params);
        }
    }, []);

    const getData = (query: QueryParams) => {
        setLoading(true);
        setError(false);
        setParams({ ...params, ...query });
        func({ ...params, ...query })
            .then(({ error, data, msg, meta, ...rest }) => {
                setLoading(false);
                if (error === false) {
                    setData(data);
                } else {
                    setError(true);
                    setErrorMessage(msg || '');
                    setData(undefined);
                }
                if (rest) {
                    if ((Object.values(rest) + '').replaceAll(',', '') === 'Unauthorized.') {
                        router.push('/login');
                    }
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const clear = () => setData(undefined);

    return [data, getData, { query: params, loading, error, errorMessage, clear }];
};

//...............................      useAction      .............................................
export const postData = async (
    func: (params: QueryParams) => Promise<DataResponse>,
    data?: any,
    reload?: (data: any) => void,
    alert = true,
    t?: (text: string) => string
) => {
    const { error, msg, data: d } = await func({ ...data });
    if (!error) {
        if (reload) {
            reload(d);
        }
        if (alert) {
            await swalAlert.success(!!t ? t(msg) : msg);
        }
    } else {
        await swalAlert.error(!!t ? t(msg) : msg);
    }
    return { error, msg, data: d };
};

//...............................      useActionConfirm      .............................................
type ActionConfirmFunc = (
    func: (data: any) => Promise<any>,
    data: any,
    reload: () => void,
    message?: string,
    confirmText?: string,
    alert?: boolean
) => Promise<void>;

export const useActionConfirm: ActionConfirmFunc = async (
    func,
    data,
    reload,
    message,
    confirmText,
    alert = true
) => {
    const { isConfirmed } = await swalAlert.confirm(message, confirmText);
    if (isConfirmed) {
        await postData(func, data, reload, alert);
    }
};

//...............................      userOutSideClick      .............................................
export const userOutSideClick = (ref: any, func: any) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                func && func();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export const useLocations = () => {
    const [date, setData] = useState({});
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/locations.json');
            setData(data);
        })();
    }, []);
    return date;
};
