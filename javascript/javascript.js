
function validateFeedback() {
	var fname = document.forms["feedback"]["firstName"].value;
	var lname = document.forms["feedback"]["lastName"].value;
	var gender = document.forms["feedback"]["gender"].value;
	var message = document.forms["feedback"]["message"].value;
	var	email = document.forms["feedback"]["email"].value;

	if (fname == "" || lname == "" || message == ""){
		alert("Empty fields found. Please fill the form.");
		} else {
				alert("Thank you for the feedback.");
				}
}
		