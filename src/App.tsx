import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useAppContext } from './context/AppContext';

const App: React.FC = () => {
  const { isBlackMode, toggleMode } = useAppContext();
  const backgroundColor = isBlackMode ? 'bg-[rgba(49,49,49,255)] text-white' : 'bg-white';

  return (
    <div className={`App ${backgroundColor} h-[400px] rounded mt-2 shadow-2xl`}>
      <Form />
      <Table />
      
    </div>
  );
};

export default App;
