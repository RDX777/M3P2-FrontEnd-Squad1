import { Route, Routes } from 'react-router-dom';
import { Home, Locals, Profile } from '../pages';
import { Sensors } from '../pages/Sensors';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locals" element={<Locals />} />
      <Route path="/sensors" element={<Sensors />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
