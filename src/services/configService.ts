export const URL_API = 'http://localhost:3000';

export function GetToken() {
  return localStorage.getItem('token');
}

export const AutorizationHeaders = {
  headers: {
    authorization: `Bearer ${GetToken()}`,
    'Content-Type': 'application/json',
  },
};

export const ContentHeaders = {
  headers: { 'Content-Type': 'application/json' },
};
