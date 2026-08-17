import './App.css';
import Login from './components/Login';
import Top from './components/Top';
import { Outlet } from 'react-router';
import supabase from '../src/config/supabaseClient';
import AccountMenu from './components/AccountMenu';
import { useAccount } from './context/AccountContext';
import LoadingScreen from './components/LoadingScreen';
import WhyUs from './components/WhyUs';
import { useState, useEffect } from 'react';

function App() {
  const {account} = useAccount();
  const [whyUs, setWhyUs] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [contact, setContact] = useState(false);
  const [donations, setDonations] = useState(() => {
    try{
      const stored = localStorage.getItem('donations');
      return stored !== null ? JSON.parse(stored) : false;
    } catch(err){
      console.error('Donations rendering error: ', err);
      return false;
    }
  });

  useEffect(() => {
    try{
      localStorage.setItem('donations', JSON.stringify(donations));
    } catch(err){
      console.error('Error writing donations to LS: ', err);
    }
  }, [donations])

  return (
    <>
        <Outlet context={{
          whyUs, 
          setWhyUs, 
          aboutUs, 
          setAboutUs, 
          contact, 
          setContact,
          donations,
          setDonations}}/>
    </>
  );
}

export default App;
