import axios from "axios";

var token = localStorage.getItem('token')
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.common['accept'] = '*/*';


const url = "https://transferapi.saipacorp.com/api";
// const url = "http://172.20.11.237/api";
// const url = "https://transferapi.saipacorp.com/api";
//const url = "http://172.20.11.237/api";
const auth = "https://transferapi.saipacorp.com/Users";
const captcha = "http://Captcha.saipacorp.com/api";


axios.interceptors.response.use(null, error => {
    const exeptedError =
        error.response &&
        error.response?.status >= 400 &&
        error.response?.status < 500

    if (!exeptedError) {
        throw new Error(error)
    }
    return Promise.reject(error);
})

const http = {
    url: url,
    auth: auth,
    captcha: captcha,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
}

export default http