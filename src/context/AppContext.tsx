import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Item {
  name: string;
  age: string;
  subscribed: string;
  employed: boolean;
}



interface AppContextType {
    data: Item[];
    setData: React.Dispatch<React.SetStateAction<Item[]>>;
    isBlackMode: boolean;
    toggleMode: () => void;
    addItem: (item: Item) => void;
    deleteItem: (item: Item) => void;
    selectedUser: Item | null; // Add selectedUser state
    setSelectedUser: React.Dispatch<React.SetStateAction<Item | null>>; // Add setSelectedUser function
  }
  
  export const AppContext = createContext<AppContextType | undefined>(undefined);
  
  export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };
  
  export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<Item[]>([]);
    const [isBlackMode, setIsBlackMode] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Item | null>(null); // Initialize selectedUser
  
    useEffect(() => {
      // Load saved data from localStorage on app startup
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        setData(JSON.parse(savedData));
      }
    }, []);
  
    const toggleMode = () => {
      setIsBlackMode((prevMode) => !prevMode);
    };
  
    const addItem = (item: Item) => {
      setData((prevData) => [...prevData, item]);
      // Save the updated data to localStorage
      localStorage.setItem('userData', JSON.stringify([...data, item]));
    };
  
    const deleteItem = (item: Item) => {
      const updatedData = data.filter((existingItem) => existingItem !== item);
      setData(updatedData);
      // Save the updated data to localStorage
      localStorage.setItem('userData', JSON.stringify(updatedData));
    };
  
    return (
      <AppContext.Provider value={{ data, setData, isBlackMode, toggleMode, addItem, deleteItem, selectedUser, setSelectedUser }}>
        {children}
      </AppContext.Provider>
    );
  };
  