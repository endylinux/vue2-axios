import axios from "axios";

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
    // baseURL: 'https://vue2-axios-e0f1a-default-rtdb.europe-west1.firebasedatabase.app'
});

// instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
