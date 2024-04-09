import axios from 'axios';
const API_URL = 'http://localhost:8801/api-v1';


export const API = axios.create({
    baseURL: API_URL,
    responseType: 'json',
    
    });

export const apiRequest = async ({url,token,data,method}) => {
    try {
        const result = await API(url, {
            method: method,
            data: data,
            headers:{
                'Content-Type':'application/json',
                Authorization: token ? `Bearer ${token}` : '',

            }
        });
        return result?.data;

    }
    catch(error){
        console.log(error);
        const err = error.response.data;
        return{
            status: err.success, message: err.message
        };
    }
};

export const handleFileUpload = async(uploadFile) => {
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'jobfinder');
    try{
        const respone = await axios.post('https://api.cloudinary.com/v1_1/dv9eo5ekd/image/upload',formData);
        return respone.data.secure_url;
    } catch(error){
        console.log(error);
    }
};

export const updateURL = ({
    pageNum,
    query,
    cmpLoc,
    sort,
    navigate,
    location,
    jType,
    exp,
}) => {
    const params = new URLSearchParams();

    if(pageNum && pageNum > 1) {
        params.set('page', pageNum);
    }

    if(query) {
        params.set('search', query);
    }

    if(cmpLoc) {
        params.set('location', cmpLoc);
    }

    if(sort) {
        params.set('sort', sort);
    }

    if(jType) {
        params.set('jtype', jType);
    }

    if(exp) {
        params.set('exp', exp);
    }

    const newURL = `${location.pathname}?${params.toString()}`;
    navigate(newURL, {replace: true});

    return newURL;


};