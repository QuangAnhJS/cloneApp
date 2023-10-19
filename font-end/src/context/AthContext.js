import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = () => {
    setcurrentUser({
      id: 1,
      name: 'Anh Quang',
      profilePic:
        'https://kenh14cdn.com/2020/7/17/br12-15950049927201199617038.jpg',
    });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {' '}
      {children}{' '}
    </AuthContext.Provider>
  );
};
