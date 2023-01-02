import axios from 'axios';


const url = "http://127.0.0.1:3001/attributes";

export const getallAttributes = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addAttribute = async (attributes) => {
    return await axios.post(url,attributes);
}

export const editAttribute = async (id, attributes) => {
    return await axios.put(`${url}/${id}`,attributes);
}


export const deleteAttribute = async (id) => {
    return await axios.delete(`${url}/${id}`);
}