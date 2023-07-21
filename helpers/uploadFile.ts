import { uploadSingleFile } from '@/helpers/backend_helper';

export const uploadImage = async (
    files: any,
    folder: 'frontend' | 'topic' | 'profile',
    _id: string
) => {
    const url = [];
    if (files?.length > 0) {
        for (let i = 0; i < files.length; i++) {
            //check if file is already uploaded
            if (files[i].url) {
                url.push(files[i].url);
                continue;
            }
            const payload = { files: files[i].originFileObj };
            try {
                let data = await uploadSingleFile(payload);
                url.push(data.data);
            } catch (e) {
                console.log(e);
            }
        }
    }
    return url;
};
