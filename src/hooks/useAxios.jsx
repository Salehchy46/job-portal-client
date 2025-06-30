import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-ten-nu.vercel.app',
    withCredentials: true,
})

const useAxios = () => {

    const { logOut } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {

            console.log('error caught in the interceptor', error);

            if (error.status === 401 || error.status === 403) {
                console.log('User is invalid, log out');
                logOut()
                    .then(() => {
                        console.log('logged out user');
                        navigate('/signin')
                    })
                    .catch(error => console.log(error))
            }

            return Promise.reject(error);
        })
    }, [logOut, navigate])

    return axiosInstance;
};

export default useAxios;