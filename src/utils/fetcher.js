import axios from 'axios';

export const api = axios.create({
   baseURL:'http://10.0.2.2:3000',
});

export const getResError = (error) => {
   if (!error) return 'Something Went Wrong';
   const isNetError = error?.message?.includes('Network Error');
   if (isNetError) return 'Network Error';
   return error?.response?.data?.message ?? error?.message ?? 'Something Went Wrong';
};
