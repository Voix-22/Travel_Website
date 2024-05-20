import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

// Error Boundary Component
const ErrorBoundary = ({ error }) => (
  <div>
    <h1>Unexpected Application Error!</h1>
    <p>{error.message}</p>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} errorElement={<ErrorBoundary />} />
      <Route path="/login" element={<Login />} errorElement={<ErrorBoundary />} />
      <Route path="/register" element={<Register />} errorElement={<ErrorBoundary />} />
      <Route path="/dashboard" element={<Dashboard />} errorElement={<ErrorBoundary />} />
    </>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
