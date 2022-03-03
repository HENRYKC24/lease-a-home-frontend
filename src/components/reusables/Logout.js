import React from 'react';

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
      className={logoutBtn}
    >
      Logout
    </button>
  );
};

export default Logout;
