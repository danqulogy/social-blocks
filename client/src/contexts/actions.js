import { loginUser, registerUser, socialApi } from '../services';

// on login, use the login API and set auth token
export async function login(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const response = await loginUser(loginPayload);

    if (response?.accessToken) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });

      localStorage.setItem('x-social-blocks', response.accessToken);
      socialApi.defaults.headers.authorization =
        'Bearer ' + response.accessToken;

      return true;
    } else {
      dispatch({ type: 'LOGIN_ERROR', error: response });
      return false;
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: 'LOGIN_ERROR', error: err });
    return false;
  }
}

// on register, use the register API and set auth token
export async function register(dispatch, registerPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const response = await registerUser(registerPayload);

    if (response?.accessToken) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });

      localStorage.setItem('x-social-blocks', response.accessToken);
      socialApi.defaults.headers.authorization =
        'Bearer ' + response.accessToken;

      return true;
    } else {
      dispatch({ type: 'LOGIN_ERROR', error: response });
      return false;
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: 'LOGIN_ERROR', error: err });
    return false;
  }
}

// on logout, remove all tokens and unauthorize
export async function logout(dispatch) {
  await dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('x-social-blocks');

  return true;
}
