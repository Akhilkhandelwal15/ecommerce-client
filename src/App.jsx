import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from "./shared/routes/router.jsx";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from './auth/authSlice.js';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    // console.log("get current user");
      dispatch(getCurrentUser());
  },[dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     <RouterProvider router={router} />
    </>
  )
}

export default App
