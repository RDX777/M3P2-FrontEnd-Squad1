import axios from 'axios';

import { AutorizationHeaders, ContentHeaders, URL_API } from './configService';

export interface SignUpType {
  name: string;
  cnpj: string;
  owner: string;
  mail: string;
  phone: string;
  password: string;
  confirm_password: string;
}

interface EditProfile {
  phone: string;
  password: string;
  confirmPassword: string;
}

export const SignUp = async (body: SignUpType) => {
  const URL = `${URL_API}/empresa/cadastro`;
  const { data } = await axios.post(URL, body, ContentHeaders);
  return data;
};

export const EditProfile = async (body: EditProfile) => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/empresa/perfil`;
  const data = await axios.put(URL, body, AutorizationHeaders);
  return data;
};

export const GetProfileData = async () => {
  const token = localStorage.getItem('token');
  const AutorizationHeaders = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const URL = `${URL_API}/empresa/dados`;
  const { data } = await axios.get(URL, AutorizationHeaders);
  return data;
};
