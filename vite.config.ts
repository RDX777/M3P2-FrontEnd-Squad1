import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT || 3001),
  },
});
