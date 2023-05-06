import axios from 'axios';
import { AutorizationHeaders, URL_API } from './configService';

export const GetAvailableDevices = async () => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/sensores-disponiveis`;
  const { data } = await axios.get(URL, AutorizationHeaders);
  return data;
};
