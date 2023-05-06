import axios from 'axios';

import { AutorizationHeaders, URL_API } from './configService';
import { IdDevice } from './exportedInterfaces';

interface Value {
  value: number;
}

export const Overview = async (idPlace: string) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/dados-sensor/overview/${idPlace}`;
  const { data } = await axios.get(URL, AutorizationHeaders);
  return data;
};

export const CreateDeviceData = async (body: Value, param: IdDevice) => {
  const URL = `${URL_API}/dados-sensor/${param.idDevice}`;
  const { data } = await axios.post(URL, body, AutorizationHeaders);
  return data;
};
