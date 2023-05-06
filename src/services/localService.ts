import axios from 'axios';
import { AutorizationHeaders, URL_API } from './configService';
import { IdLocal } from './exportedInterfaces';

interface CreateLocal {
  name: string;
  latitude: number;
  longitude: number;
}

export const GetLocals = async () => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/locais/`;
  const { data } = await axios.get(URL, AutorizationHeaders);
  return data;
};

export const CreateLocal = async (body: CreateLocal) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/locais/`;
  const { data } = await axios.post(URL, body, AutorizationHeaders);
  return data;
};

export const EditLocal = async (param: IdLocal, body: CreateLocal) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/locais/${param}`;
  const { data } = await axios.put(URL, body, AutorizationHeaders);
  return data;
};

export const DeleteLocal = async (param: IdLocal) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/locais/${param}`;
  const { data } = await axios.delete(URL, AutorizationHeaders);
  return data;
};
