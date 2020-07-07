// This class will be used for injecting our UI to DOM

class UI {
	constructor() {
		this.profile = document.getElementById("profile");
	}
	//**** showProfile() ****
	// Adding the info from the API to the DOM
	showProfile(user) {
		// Creating a template for adding it in our profile
		console.log(user);
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
                    <p>Name: ${user.name}</p>
		         <a href='${user.html_url}' target='blank' class='btn btn-primary btn-block mb-4'> View Profile</a>
                </div>
                <div class="col-md-9">
                <div><h2 class='display-5'>${user.name}</h2></div>
                <div><h5>${user.login}</h5></div>
                    <span class='badge badge-primary badge-pill' style='padding:14px; font-size:14px; background-color:rgb(109, 107, 107)'>Public Repos: ${user.public_repos}</span>
                    <span class='badge badge-info badge-pill'
                    style='padding:14px; font-size:14px'>Public Gists: ${user.public_gists}</span>
                    <span class='badge badge-success badge-pill'
                    style='padding:14px; font-size:14px'>Followers: ${user.followers}</span>
                    <span class='badge badge-warning badge-pill'
                    style='padding:14px; font-size:14px'>Following: ${user.following}</span>
                    <br><br>
                    <ul class='list-group'>
                        <li class='list-group-item'>Company: ${user.company}</li>
                        <li class='list-group-item'>Website/Blog: ${user.blog}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Member since: ${user.created_at}</li>
                    </ul>
                </div>
			</div>
        </div>
        <br>
        
        <h3>Latest Repositories: </h3>
        <div id='repos'></div>
		`;
	}
	//*** repos ****
	showRepos(repos) {
		let op = "";
		repos.map((repo) => {
			op += `<div class='card card-body mb-2'>
				<div class='row'>
					<div class='col-md-6'>
						<a href='${repo.html_url}' target='blank' style='padding:14px; font-size:18px' > Repository Name: ${repo.name}</a>
						<p style='padding:14px'>${repo.description}</p>
					</div>
					<div class='col-md-6'>
					<span class='badge badge-info badge-pill'
					style='padding:14px; font-size:14px'>Stars: ${repo.stargazers_count}</span>
					
                    <span class='badge badge-success badge-pill'
                    style='padding:14px; font-size:14px ; background-color:#8561f2;'>Watchers: ${repo.watchers}</span>
					
					<span class='badge badge-pill'
                    style='padding:14px; font-size:14px;background-color:#fcec03' >Forks: ${repo.forks_count}</span>
					</div>
				</div>
			</div>`;
		});
		console.log(repos);
		console.log(op);

		document.getElementById("repos").innerHTML = op;
	}
	//**** noProfile method ****
	// If the expected user is not found then we will create a alert div
	noProfile(message, className) {
		// Clear remaining alerts
		this.removeAlertDiv();

		//Create div
		const div = document.createElement("div");
		div.className = className;
		//add message to the div
		div.appendChild(document.createTextNode(message));
		// Add this div to card
		const parentContainer = document.querySelector(".searchContainer");
		//Search div
		const search = document.querySelector(".search");
		parentContainer.insertBefore(div, search);

		// Removing the alert once we found the user
		setTimeout(() => {
			this.removeAlertDiv();
		}, 3000);
	}

	//**** removeAlertDiv method ****
	// This method will be used to remove the older alertDiv
	removeAlertDiv() {
		const currentAlert = document.querySelector(".alert");
		//If there there is any div with .alert method then we will remove that div
		if (currentAlert) {
			currentAlert.remove();
		}
	}

	//**** clear profile method ****
	// If there is no value in input the card will get empty

	clearProfile() {
		this.profile.innerHTML = ``;
	}
}
