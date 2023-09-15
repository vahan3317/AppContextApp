import React, { useState, useEffect, useRef } from 'react';
import { useAppContext, Item } from '../context/AppContext';

const Form: React.FC = () => {
  const { addItem, data, isBlackMode, toggleMode, deleteItem, selectedUser } = useAppContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [subscribed, setSubscribed] = useState<string>('other'); 
  const [employed, setEmployed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddItem = () => {
    if (name && age !== '' && subscribed !== '') {
      addItem({ name, age: age.toString(), subscribed, employed });
      setName('');
      setAge('');
      setSubscribed('');
      setEmployed(false);
    }
  };

  const handleDelete = () => {
    if (selectedUser) {
      deleteItem(selectedUser);
    }
  };

  const handleAgeIncrement = () => {
    if (typeof age === 'number') {
      setAge(age + 1);
    }
  };

  const handleAgeDecrement = () => {
    if (typeof age === 'number' && age > 0) {
      setAge(age - 1);
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      if (isFocused) {
        inputElement.classList.add('no-border');
      } else {
        inputElement.classList.remove('no-border');
      }
    }
  }, [isFocused, isBlackMode]);

  return (
    <div className={`w-[30%] p-2 mt-4 rounded-xl shadow-2xl ${isBlackMode ? 'bg-[rgba(49,49,49,255)] text-white' : 'bg-white'} border-[1px] ${isBlackMode ? 'border-gray-400' : 'border-gray-400'} shadow-xl h-[350px] transition-all duration-300 ease-in-out`}>
      <div className=''>
        <h4 className='mt-[-20px]'>Insert Row</h4>
        <input
          ref={inputRef}
          type="text"
          placeholder="Name"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={name}
          className={`w-[98%] mt-4 h-[32px] pl-2 ${isBlackMode ? 'border-2 border-gray-400 bg-[rgba(49,49,49,255)]' : 'border-2 border-gray-400'} rounded-lg focus:border-green-600 focus:border-2 transition-all duration-300 ease-in-out`}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="age-input flex w-full justify-center items-center">
          <input
            type="text"
            placeholder="Age"
            className={`w-[70%] mt-4 pl-2  h-[32px] border-[2px] ${isBlackMode ? 'border-2 border-gray-400  bg-[rgba(49,49,49,255)]' : 'border-gray-400'} rounded-r-none rounded-lg focus:border-green-600 transition-all duration-300 ease-in-out`}
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value) || '')}
          />
        <button
  className={`age-button w-[32px] h-[32px] rounded bg-gray-400 border-r-[1px] mt-4 ${
    isBlackMode ? 'text-black' : 'text-white'
  } transition duration-300 ease-in-out transform hover:scale-110`}
  onClick={handleAgeDecrement}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`flex pl-[1.5px] w-full justify-center items-center ${
      isBlackMode ? 'text-black' : 'text-white'
    }`}
    width="24"
    height="24"
  >
    <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
  </svg>
</button>

<button
  className={`age-button w-[32px] rounded h-[32px] bg-gray-400 mt-4 ${
    isBlackMode ? 'text-black' : 'text-white'
  } transition duration-300 ease-in-out transform hover:scale-110`}
  onClick={handleAgeIncrement}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={`pl-[1.5px] ${isBlackMode ? 'text-black' : 'text-white'}`}
  >
    <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
  </svg>
</button>

        </div>

        <div className="subscribed-select">
          <label>
            <select
            
              value={subscribed}
              onChange={(e) => setSubscribed(e.target.value)}
              className={`w-[70%] mt-4 pl-2  h-[32px] border-[2px] ${isBlackMode ? 'border-2 border-gray-400 text-gray-700 bg-gray-400 ' : 'border-gray-400 text-gray-400'} rounded-lg`}
            >
              
              <option value="subscribed">Not Subscribed</option>
              <option value="not-subscribed">Subscribed</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <label>
          <span className=''> Employed</span>
          <input
            type="checkbox"
            className={`mt-4 w-[32px] ${isBlackMode ? 'text-black' : 'text-white'}`}
            checked={employed}
            onChange={() => setEmployed(!employed)}
          />
        </label>

        <div>
        <button
  onClick={handleAddItem}
  className={`w-[98%] flex justify-center items-center h-[32px] mt-4 rounded-lg mb-2 ${
    isBlackMode ? 'bg-gray-400' : 'bg-gray-300'
  } transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 active:bg-opacity-100 focus:outline-none`}
>
  Insert
</button>

          <hr />
          <div className='flex mt-2'>
          <label className="switch">
            <input type="checkbox" checked={isBlackMode} onChange={toggleMode} />
            <span className="slider round"></span>
            
          </label>
          <svg
  className={`w-[32px] h-[28px] mt-[3px] pl-2 ${isBlackMode ? 'hidden' : 'block'} transition-opacity duration-300 ease-in-out`}
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="100"
  height="100"
  viewBox="0 0 48 48"
>
  <radialGradient
    id="w~INujfpQanMh___D7Au2a_8EUmYhfLPTCF_gr1"
    cx="24"
    cy="24"
    r="22"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset=".724" stopColor="#ffed54"></stop>
    <stop offset=".779" stopColor="#ffe649"></stop>
    <stop offset=".877" stopColor="#ffd22d"></stop>
    <stop offset="1" stopColor="#ffb300"></stop>
  </radialGradient>
  <path
    fill="url(#w~INujfpQanMh___D7Au2a_8EUmYhfLPTCF_gr1)"
    d="M24,2l1.421,1.474c0.93,0.965,2.388,1.196,3.571,0.566l1.807-0.963l0.896,1.841	c0.586,1.205,1.902,1.876,3.222,1.641l2.016-0.357l0.283,2.028c0.185,1.328,1.229,2.371,2.557,2.557l2.028,0.283l-0.357,2.016	c-0.234,1.32,0.436,2.635,1.641,3.222l1.841,0.896l-0.963,1.807c-0.631,1.183-0.4,2.641,0.566,3.571L46,24l-1.474,1.421	c-0.965,0.93-1.196,2.388-0.566,3.571l0.963,1.807l-1.841,0.896c-1.205,0.586-1.876,1.902-1.641,3.222l0.357,2.016l-2.028,0.283	c-1.328,0.185-2.371,1.229-2.557,2.557l-0.283,2.028l-2.016-0.357c-1.32-0.234-2.635,0.436-3.222,1.641l-0.896,1.841l-1.807-0.963	c-1.183-0.631-2.641-0.4-3.571,0.566L24,46l-1.421-1.474c-0.93-0.965-2.388-1.196-3.571-0.566l-1.807,0.963l-0.896-1.841	c-0.586-1.205-1.902-1.876-3.222-1.641l-2.016,0.357l-0.283-2.028c-0.185-1.328-1.229-2.371-2.557-2.557l-2.028-0.283l0.357-2.016	c0.234-1.32-0.436-2.635-1.641-3.222l-1.841-0.896l0.963-1.807c0.631-1.183,0.4-2.641-0.566-3.571L2,24l1.474-1.421	c0.965-0.93,1.196-2.388,0.566-3.571l-0.963-1.807l1.841-0.896c1.205-0.586,1.876-1.902,1.641-3.222l-0.357-2.016l2.028-0.283	c1.328-0.185,2.371-1.229,2.557-2.557l0.283-2.028l2.016,0.357c1.32,0.234,2.635-0.436,3.222-1.641l0.896-1.841l1.807,0.963	c1.183,0.631,2.641,0.4,3.571-0.566L24,2z"
  ></path>
  <linearGradient
    id="w~INujfpQanMh___D7Au2b_8EUmYhfLPTCF_gr2"
    x1="8.092"
    x2="35.996"
    y1="8.092"
    y2="35.996"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" stopColor="#fed100"></stop>
    <stop offset="1" stopColor="#e36001"></stop>
  </linearGradient>
  <path
    fill="url(#w~INujfpQanMh___D7Au2b_8EUmYhfLPTCF_gr2)"
    d="M24,7C14.611,7,7,14.611,7,24s7.611,17,17,17s17-7.611,17-17S33.389,7,24,7z"
  ></path>
</svg>

<img
  className={`w-[24px] h-[22px] mt-[6px] ml-[4px] ${isBlackMode ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out`}
  src="data:image/png;base64,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"
  alt="Icon"
/>

          </div>
        </div>

        <button
  onClick={handleDelete}
  disabled={!selectedUser}
  className={`w-[98%] flex justify-center items-center cursor-pointer h-[32px] mt-4 rounded-lg mb-2 ${
    isBlackMode ? 'bg-gray-400' : 'bg-gray-300'
  } transition duration-300 ease-in-out transform hover:scale-95`}
>
  Delete
</button>

      </div>
    </div>
  );
};

export default Form;
