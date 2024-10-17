import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './route/route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './route/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
