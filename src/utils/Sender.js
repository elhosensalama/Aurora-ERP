import axios from 'axios';

const Sender = async (url, method, headers = {}, data = {}) => {
    const res = axios({
        method,
        url,
        headers,
        data,
    });
    return res;
};

export default Sender;
