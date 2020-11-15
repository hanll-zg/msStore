import axios from 'axios';
// 获取post headers
function uploadHeaders (params) {
    return axios.get('/api/product/queryProductPageList',{params});
}
function getById (params) {
    return axios.get('/api/product/id',{params});
}
function topicPro (params) {
    return axios.get('/api/topic/topicPro',{params});
}
function topicId (params) {
    return axios.get('/api/product/topicId',{params});
}
function post_file_getFileList (params) {
    return axios.get('/swagger/index.html/file/post_file_getFileListt',{params});
}
export {
    axios,
    uploadHeaders,
    topicPro,
    topicId,
    getById,
    post_file_getFileList
}
