/* Create an array to contain each new contact object created */
var contacts = [];

var Contact = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	street: "",
	city: "",
	state: "",
}

/* Create Contact function, setting object values based on form input fields */
function CreateNewContact(){
	var newContact = Object.create(Contact);
	newContact.firstName = $("#firstName").val();
	newContact.lastName = $("#lastName").val();
	newContact.fullName = ($("#firstName").val() + " " + $("#lastName").val());
	newContact.phoneNumber = $("#phoneNumber").val();
	newContact.street = $("#street").val();
	newContact.city = $("#city").val();
	newContact.state = $("#state").val();
	contacts.push(newContact);
}

/* Display the contact clicked from the bulleted list, based on the index of that contact in the array */
function DisplayContact(contactIndex){
	var contact = contacts[contactIndex];
	$(".contactDisplay").show(); 
	$("#firstNameDis").text(contact.firstName);
	$("#lastNameDis").text(contact.lastName);
	$("#fullNameDis").text(contact.fullName);
	$("#phoneNumberDis").text(contact.phoneNumber);
	$("#addressDis").text("Address:");
	$("#addressBullet").empty();
	$("#addressBullet").append("<li>" + contact.street + ", " + contact.city + ", " + contact.state + "</li>");
}

$(document).ready(function() {

	$("#contactEntryForm").submit(function(event) {

	event.preventDefault();

	CreateNewContact();

	/* Create the array index to be used as a property in the appending below, to be able to display the correct contact */
	var arrayIndex = contacts.length - 1;

	$(".contactItem").append(
		"<li>" + "<a href='#' class='contactLinks' data-contact-index='" + arrayIndex + "'>" +
		$("#firstName").val() + " " + $("#lastName").val() +
		"</a>" +
		"</li>"

	);

	$(this)[0].reset();

	});

	/* When the bulleted contact links are clicked, show the contact that was clicked */
	$("body").on("click", ".contactLinks", function() {
		var contactIndex = +($(this).data("contact-index"));
		DisplayContact(contactIndex);

	});

});