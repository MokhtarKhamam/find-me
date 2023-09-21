import axios from "axios";
const BASEURL = `${process.env.REACT_APP_API_URL}`;

export default class Api {

    Post(url, data, token) {
        return axios.post(`${BASEURL}${url}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    };

    Get(url, token) {
        return axios.get(`${BASEURL}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
export const APIInstance = new Api();