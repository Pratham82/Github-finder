// This is main utility class in which we will be calling other classes

// Creating object of github class
let gitObj = new Github();

//Creating object of UI class
let uiObj = new UI();

// Search input
const searchUsers = document.querySelector("#searchUsers");

searchUsers.addEventListener("keyup", (e) => {
	const userText = e.target.value;
	if (userText !== "") {
		console.log(userText);

		// Make http call
		gitObj.getUser(userText).then((data) => {
			if (data.profile.message === "Not Found") {
				//Show alert if user not found
				uiObj.noProfile("User not Found", "alert alert-danger");
			} else {
				// Show profile which will be assigned in UI class
				// We are passing only profile object
				uiObj.showProfile(data.profile);
				uiObj.showRepos(data.repos);
			}
		});
	} else {
		// Clear profile
		uiObj.clearProfile();
	}
});

/*
user ID for testing:
Pratham82
tinshade
Ankit-Developer143
leandrotk
ry
johnafish
w3cj
shiffman
yyx990803
*/
