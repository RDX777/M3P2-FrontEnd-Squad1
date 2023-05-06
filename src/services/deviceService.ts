import axios from 'axios';

import { AutorizationHeaders, URL_API } from './configService';
import { IdDevice, IdLocal } from './exportedInterfaces';

export interface DeleteDevice {
  idPlace: string;
  IdDevice: string[];
}

export interface CreateDevice {
  name: string;
  type_id: string;
  macAddress: string;
}

export const GetDevices = async (idPlace: string) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/sensores/${idPlace}`;
  const { data } = await axios.get(URL, AutorizationHeaders);
  return data;
};

export const CreateDevice = async (param: IdLocal, body: CreateDevice) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/sensores/vincular-sensor/${param}`;
  const { data } = await axios.post(URL, body, AutorizationHeaders);
  return data;
};

export const DeleteDevices = async (body: DeleteDevice) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/sensores/desvincular-sensor`;
  const { data } = await axios.post(URL, body, AutorizationHeaders);
  return data;
};

export const ChangeStateDevice = async (param: IdDevice) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/sensores/altera-status/${param.idDevice}`;
  const { data } = await axios.put(URL, {}, AutorizationHeaders);
  return data;
};
