import { toast } from "react-toastify";

import Sender from "../../utils/Sender";

const logout = async (email, password) => {
    try {
        const res = await Sender("http://127.0.0.1:8000/api/v1/users/logout", "GET");
        console.log(res.data);
        if (res.data.status === "success") {
            toast.success("Logged Out successfully");
            return true;
        } else {
            console.log(res.data);
        }
    } catch (error) {
        toast.error(error.response.data.message);
        return false;
    }
};

export default logout;
