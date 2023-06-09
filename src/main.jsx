import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
 } from '@tanstack/react-query'
  
 const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <HelmetProvider>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-4xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
