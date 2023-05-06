import { Route, Routes } from 'react-router-dom';
import { ForgotPassword, Register, Login } from '../pages';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};
