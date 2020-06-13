'use strict';
export default class UserInfo {
	constructor(userName, userJob){
		this.userName = userName;
		this.userJob = userJob;
	}
	setUserInfo(user, job){
		user.value = this.userName.textContent;
		job.value = this.userJob.textContent;
	}
	updateUserInfo(user, job){
		this.userName.textContent = user.value;
		this.userJob.textContent = job.value;
	}


}



