import tokenService from './tokenService';
import { Error } from 'mongoose';
const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(user)
    })
    .then(res => {
      console.log(res)
      if (res.ok) return res.json();
      throw new Error('FUUUUUUCCCK!');
    })
    .then(({ token }) => {
        tokenService.setToken(token);
    });
  }

  function getUser() {
    return tokenService.getUserFromToken();
  }

  function logOut() {
    tokenService.removeToken();
  }

  function login(creds) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
  }

  export default {
    signup,
    getUser,
    logOut,
    login
  };