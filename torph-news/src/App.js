import './App.css';
import Login from './components/Login';
import Top from './components/Top';
import { Outlet } from 'react-router';
import supabase from '../src/config/supabaseClient';
import AccountMenu from './components/AccountMenu';
import { useAccount } from './context/AccountContext';
import LoadingScreen from './components/LoadingScreen';
import WhyUs from './components/WhyUs';
import { useState } from 'react';

function App() {
  const {account} = useAccount();
  const [whyUs, setWhyUs] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [contact, setContact] = useState(false);
  const [donations, setDonations] = useState(false);

  return (
    <>
        <Outlet context={{
          whyUs, 
          setWhyUs, 
          aboutUs, 
          setAboutUs, 
          contact, 
          setContact}}/>
    </>
  );
}

export default App;
