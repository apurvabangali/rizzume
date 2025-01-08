import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { Bounce, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      theme="light"
      transition={Bounce}
    />
  </BrowserRouter >,
)
