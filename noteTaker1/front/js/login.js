function loginFun() {
	var username = document.getElementById("uname").value;
    var password = document.getElementById('upass').value;

    logged_in = true;
    if (logged_in) {
    	console.log('User is logged in');
    }

    renderMainView();
}

function regisFun() {
	var username = document.getElementById("uname").value;
    var password = document.getElementById('upass').value;

    logged_in = true;
}