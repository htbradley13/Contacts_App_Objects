var Contact = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	street: "",
	city: "",
	state: "",
	idNumber: "",
	displayed: false
}

function CreateNewContact(){
	var newContact = Object.create(Contact);
	newContact.firstName = $("#firstName").val();
	newContact.lastName = $("#lastName").val();
	newContact.fullName = ($("#firstName").val() + " " + $("#lastName").val());
	newContact.phoneNumber = $("#phoneNumber").val();
	newContact.street = $("#street").val();
	newContact.city = $("#city").val();
	newContact.state = $("#state").val();
}

function DisplayContact(){
	$(".contactDisplay").show(); /*
	$("#firstNameDis").val(newContact.firstName);
	$("#lastNameDis").val(newContact.lastName);
	$("#fullNameDis").val(newContact.fullName);
	$("#phoneNumberDis").val(newContact.phoneNumber);
	$("#addressDis").val("Address:");
	$("#addressBullet").append("<li>" + newContact.street + ", " + newContact.city + ", " + newContact.state + "</li>");
	*/
}

$(document).ready(function() {

	$("#contactEntryForm").submit(function(event) {

	event.preventDefault();

	CreateNewContact();

	$(".contactItem").append(
		"<li style='color:blue'>" + "<button class='contactLinks'>" +
		$("#firstName").val() + " " + $("#lastName").val() +
		"</button>" +
		"</li>"

	);

	$(this)[0].reset();

	});

	$(".contactLinks").submit(function(event) {

		event.preventDefault();

		DisplayContact();

	});

});