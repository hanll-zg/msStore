import axios from 'axios';
// 获取post headers
function uploadHeaders (params) {
    return axios.get('/api/product/queryProductPageList',{params});
}
function getById (params) {
    return axios.get('/api/product/id',{params});
}
export {
    axios,
    uploadHeaders,
    getById
}