import React from 'react';
import colorScheme from '../../colorScheme';

const Logout = () => {
  console.log(883);
  const handleLogout = () => {
    const authKey = localStorage.getItem('authKey');
    console.log(authKey, '<<<auth key>>>');
  };
  return (
    <button
      onClick={handleLogout}
      style={{ backgroundColor: colorScheme.blue }}
      type="button"
      className="text"
    >
      Logout
    </button>
  );
};

export default Logout;
