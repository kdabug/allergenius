const { api, updateToken } = require('./apiHelper');

const registerUser = async (user) => {
  try {
  const { email, password, username } = user;

  const resp = await api.post('/users/', {
    email,
    password,
    username,
  });

  const { data } = resp;

  updateToken(data.token);
  console.log(data);
  return data;
  }
  catch(e){
    console.log(e);
  }
};

const verifyToken = async () => {
  const token = await localStorage.getItem('authToken');
  if (token === null) {
    console.log("no token");
    return false;
  } else {
    try {
      console.log("token verified");
      const resp = await api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      updateToken(token);
      console.log(resp.data);
      return resp.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

const loginUser = async ({ email, password }) => {
  const resp = await api.post('/users/login', {
    email,
    password
  });
  const data = resp.data;

  updateToken(data.token);

  return data;
}

export {
  registerUser,
  verifyToken,
  loginUser,
}
