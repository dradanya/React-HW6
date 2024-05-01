import React, { useState } from 'react';
import styles from './style.css';

function Main() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !email || !phoneNumber) {
      alert('Please fill all fields');
    } else {
      alert(`User name : ${username} \n Email : ${email} \n Phone number : ${phoneNumber}`);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phoneNumber') {
      if (!/^\d*$/.test(value)) {
        alert('Phone number should contain only numbers');
      } else {
        setPhoneNumber(value);
      }
    }
  };

  return (
    <div className='wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-wrapper'>
        <input
          className='input'
          type='text'
          name='username'
          placeholder='User name'
          value={username}
          onChange={handleInputChange}
        />
        <input
          className='input'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleInputChange}
        />
        <input
          className='input'
          type='text'
          name='phoneNumber'
          placeholder='Phone number'
          maxLength={12}
          value={phoneNumber}
          onChange={handleInputChange}
          />
        </div>
        <div className='button-wrapper'>       
            <button className='submit' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Main;