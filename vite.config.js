import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'bootstrap',
        'bootstrap/dist/css/bootstrap.min.css',
        'react-bootstrap/Container',
        'react-bootstrap/Nav',
        'react-bootstrap/Navbar',
        'react-bootstrap/NavDropdown',
        'react-bootstrap/Table'
      ]
    }
  }
});
