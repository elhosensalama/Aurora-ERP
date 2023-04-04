import { toast } from 'react-toastify';

import Sender from '../../utils/Sender';

const login = async (username, password) => {
    try {
        const res = await Sender(
            'http://127.0.0.1:8000/api/v1/users/login',
            'POST',
            {},
            {
                username,
                password,
            }
        );
        if (res.data.status === 'success') {
            toast.success('Logged in successfully');
            return {
                name: res.data.data.user.name,
                photo: res.data.data.user.photo,
                role: res.data.data.user.role,
                token: res.data.token,
            };
        } else {
            console.log(res.data);
            toast.error(`${res.data.status} , please contact Aurora Support!`);
        }
    } catch (error) {
        toast.error(error.response.data.message);
        return {};
    }
};

export default login;
