'use strict';

class Api {
	constructor (options, user, job){
		this.options = options;
		this.user = user;
		this.job = job;
	}
	getUserData(){
    return fetch(`${this.options.baseUrl}/users/me`, {
  headers: {
    authorization: this.options.headers.authorization
  }

});
  }
	downloadImages(){
		return fetch(`${this.options.baseUrl}/cards`, {
  headers: {
    authorization: this.options.headers.authorization
  }
});
	}

	updateUserData(user, job){
		return fetch(`${this.options.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: {
    authorization: this.options.headers.authorization,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: user,
    about: job
  })
})
	}
}
