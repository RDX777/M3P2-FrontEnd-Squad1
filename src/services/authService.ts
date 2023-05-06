import axios from 'axios';
import { ContentHeaders, URL_API } from './configService';

interface SignIn {
  mail: string;
  password: string;
}

interface ForgotPassword {
  mail: string;
}

export const ForgotPassword = async (body: ForgotPassword) => {
  const URL = `${URL_API}/auth/esqueci-senha`;
  const { data } = await axios.post(URL, body, ContentHeaders);
  return data;
};

export const SignIn = async (body: SignIn) => {
  const URL = `${URL_API}/auth/login`;
  const { data } = await axios.post(URL, body, ContentHeaders);
  return data;
};
