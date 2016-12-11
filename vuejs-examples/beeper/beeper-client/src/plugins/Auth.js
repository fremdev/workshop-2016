const AuthPlugin = {
  setToken(token, expiration) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiration', expiration);
  },

  destroyToken() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
  },

  getToken() {
    const token = localStorage.getItem('authToken');
    const expiration = localStorage.getItem('authTokenExpiration');

    if(!token || !expiration) {
      return null;
    }

    if(Date.now() > parseInt(expiration)) {
      this.destroyToken();
      return null;
    } else {
      return token;
    }
  },

  loggedIn() {
    if(this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
};

export default function(Vue) {
  Vue.auth = AuthPlugin;

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get() {
        return Vue.auth;
      }
    }
  })
}
