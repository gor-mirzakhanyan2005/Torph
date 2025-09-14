import React from 'react'
import { createContext, useState, useContext } from 'react'

const AccountContext = createContext();

export const AccountContextProvider = ({children}) => {
  const [account, setAccount] = useState(false);
  return (
    <AccountContext.Provider value={{account, setAccount}}>
        {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
    return useContext(AccountContext);
}