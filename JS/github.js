// From this class we will be calling github API and getting the user info
// require("dotenv").config();

class Github {
	constructor() {
		this.client_id = "YOUR API ID";
		this.client_secret = "YOUR API KEY";
		this.repos_count = 5;
		this.repos_sort = "created: asc";
	}

	//get info from github
	async getUser(user) {
		//* For profile info
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		//* For getting reps
		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return {
			// in ES6 if both key and value is same we can just pass the var name
			//profile: profileData,
			profile,
			repos,
		};
	}
}
