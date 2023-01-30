import { useState } from 'react';
import { createContext } from 'react';
import { getUser } from '../services/auth.js';

// TODO -- create the user provider!
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
