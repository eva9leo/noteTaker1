var logged_in = false;
var backAPI_url = "";
var url_login = backAPI_url + "/users/";
var url_regis = backAPI_url + "/users/user?username=";
var url_post = backAPI_url + "/users";
var current_username= null;
var current_password= null;


function renderMainView(){
        document.getElementById("firstView").style.display = "block";
        document.getElementById("thirdView").style.display = "none"
}

function saveNote(){
	var unsaved = document.getElementById("note-string").value;
	if (unsaved.lenght == 0) {
		console.log('empty string!');
	} else {
		console.log(unsaved);
	}
	
}