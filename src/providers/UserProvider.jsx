import { useContext, createContext, useState, useEffect } from "react";

async function getCurrentUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );
}

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  logout: () => {},
});
UserContext.displayName = "UserContext";

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
