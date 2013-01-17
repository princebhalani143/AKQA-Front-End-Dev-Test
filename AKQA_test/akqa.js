$(function(){
	
	// show or hide news item
	$('a.hide_news').show().click(function(){
		$(this).parent().next().toggle('slow');
		return false;
	});
	
	//validate form when submit is pressed
	$('form').submit(function(){

		//remove all currently displayng error messages
		$('span.error').remove();

		//set default form status
		var valid = true;

		//check that a name has been entered
		if ( $('input[name="name"]').val() == '' ){
			$('input[name="name"]').after('<span class="error">Enter your name</span>');
			valid = false;
		}
		
		//check for a valid email address with a regex
		email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ( !$('input[name="email"]').val().match(email) ) {
			$('input[name="email"]').after('<span class="error">Enter a valid email</span>');
			valid = false;
		}
		
		//check for a valid phone number
		phone = $('input[name="phone"]').val();
		if ( phone.length > 0 && !phone.match(/^[0-9]{11}$/) ){
			$('input[name="phone"]').after('<span class="error">Phone number not valid</span>');
			valid = false;
		}
		
		//notify if form is valid
		if ( valid ){
			alert('Form is valid');
		}
		
		return false;
		
	});
	
});