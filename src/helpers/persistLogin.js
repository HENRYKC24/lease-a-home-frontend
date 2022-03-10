const persistLogin = (login, dispatch) => {
  if (localStorage.getItem('someRandomVitalData')) {
    const { timestamp, mainUser } = JSON.parse(
      localStorage.getItem('someRandomVitalData'),
    );
    const now = new Date().getTime();
    const oneDayInMillSecs = 86400000;
    if (now - timestamp < 7 * oneDayInMillSecs) {
      dispatch(login(mainUser));
    } else {
      localStorage.removeItem('someRandomVitalData');
    }
  }
};

export default persistLogin;
