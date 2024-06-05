import axios from 'axios';
// import API_URL from '../../config/api-url';
import * as SecureStorage from 'expo-secure-store'
import API_URL from '../../utils/api-url';

export const register = async (data) => {
    return axios.post(API_URL + '/api/users/create', data)
        .then((res) => {
            return { ...res?.data, success: true }
        })
        .catch((err) => {
            
            console.log(err);
            return err?.response?.data;
        }
        )

}



export const login = async (data) => {
    return axios.post(API_URL + '/api/auth/login', data)
        .then((res) => {
            return res?.data
        })
        .catch((err) => {
            return err?.response?.data;
        }
        )
}




