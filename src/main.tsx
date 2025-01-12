import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Bounce, ToastContainer } from 'react-toastify';
import 'jodit/es2021/jodit.min.css'; 

function Main() {
 
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter> 
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
