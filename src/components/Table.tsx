import React from 'react';
import { useAppContext, Item } from '../context/AppContext';

const Table: React.FC = () => {
  const { data, deleteItem, isBlackMode, selectedUser, setSelectedUser } = useAppContext();

  const handleRowClick = (user: Item) => {
    setSelectedUser(user);
  };

  return (
    <div className={`w-[65%] overflow-auto overflow-x-hidden h-[366px] shadow-2xl ${isBlackMode ? 'bg-[rgba(49,49,49,255)]' : 'bg-white'} border-[1px] ${isBlackMode ? 'border-gray-400' : 'border-gray-400'} mt-2 rounded`}>
      <table className={`w-[98%]  mx-auto mt-2 text-center  ${isBlackMode ? 'text-white' : 'text-black'}`}>
        <thead className={`w-full ${isBlackMode ? 'bg-gray-400' : 'bg-gray-300'}`}>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription Status</th>
            <th>Employed</th>
          </tr>
        </thead>
        <tbody >
          {data.map((user, index) => (
            <tr
              key={index}
              className={`cursor-pointer ${selectedUser === user ? 'bg-gray-500 text-white transition duration-300 ease-in-out transform hover:scale-105' : ''}`}
              onClick={() => handleRowClick(user)}
            >
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.subscribed}</td>
              <td>{user.employed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
