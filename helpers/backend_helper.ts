import { del, get, post, postForm } from './api_helper';

//Login SIgnup profile
export const fetchProfile = (data?: any) => get('/user/verify', data);
export const verifyGoogleUser = (data: any) => post('/user/verify-google-user', data);


//topic
export const fetchTopic = (data?: any) => get('/article/topic', data);
export const fetchFeaturedArticle = (data?: any) => get('/article/featured', data);
export const fetchTopics = (data?: any) => get('/article/topics', data);
export const fetchTopicsPerUser = (data?: any) => get('/article/topics-per-user', data);
export const postTopic = (data?: any) => post('/article/topic', data);

//article
export const fetchSingleArticle = (data?: any) => get('/article/', data);
export const searchArticle = (data?: any) => get('/article//search', data);
export const fetchArticleByUser = (data?: any) => get('/article/list-by-user', data);
export const postArticle = (data?: any) => post('/article', data);

//reading list
export const fetchToReadingList = (data?: any) => get('/user/reading-list', data);
export const addToReadingList = (data?: any) => post('/user/reading-list', data);
export const removeToReadingList = (data?: any) => del('/user/reading-list', data);


//upload file
export const uploadSingleFile = (data?: any) => postForm('/uploadSingleFile', data);


