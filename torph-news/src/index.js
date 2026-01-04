import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import WhyUs from './components/WhyUs';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { AuthContextProvider } from './context/AuthContext';
import {AccountContextProvider} from './context/AccountContext';
import PartnerShips from './components/PartnerShips';
import Donations from './components/Donations';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <AuthContextProvider >
      <AccountContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/whyus" element={<WhyUs />}/>
            <Route path="/" element={<App />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/main" element={<Main />} />
              <Route path="/partnerships" element={<PartnerShips />} />
              <Route path="/donations" element={<Donations />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      </AccountContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
