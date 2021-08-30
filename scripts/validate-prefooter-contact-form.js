// prefooter-contact-form-submit
// prefooter-contact-form-name
// prefooter-contact-form-name-danger
// prefooter-contact-form-name-success
// prefooter-contact-form-name-danger-help
// prefooter-contact-form-name-success-help
// prefooter-contact-form-mail
// prefooter-contact-form-mail-danger
// prefooter-contact-form-mail-success
// prefooter-contact-form-mail-danger-help
// prefooter-contact-form-mail-success-help
// prefooter-contact-form-phone
// prefooter-contact-form-phone-danger
// prefooter-contact-form-phone-success
// prefooter-contact-form-phone-danger-help
// prefooter-contact-form-phone-success-help
// prefooter-contact-form-terms
// prefooter-contact-form-terms-danger-help

$(document).ready( () => {
	const prefooterSubmit = $('#prefooter-contact-form-submit');
	// Manage the chebox event
	if ($('#prefooter-contact-form-terms').is(':checked'))
		$('#prefooter-contact-form-terms').attr('value', 'on');
	$('#prefooter-contact-form-terms').on('change', function () {
		if ($(this).is(':checked')) {
			$(this).attr('value', 'on');
		} else {
			$(this).attr('value', 'off');
		}
	});
	var lastValues = {
		name: 'init',
		mail: 'init',
		phone: 'init',
		terms: 'init'
	}
	prefooterSubmit.click( () => {
		prefooterSubmit.toggleClass('is-loading');

		const prefooterName             = $('#prefooter-contact-form-name'              );
		const prefooterNameDanger       = $('#prefooter-contact-form-name-danger'       );
		const prefooterNameSuccess      = $('#prefooter-contact-form-name-success'      );
		const prefooterNameDangerHelp   = $('#prefooter-contact-form-name-danger-help'  );
		const prefooterNameSuccessHelp  = $('#prefooter-contact-form-name-success-help' );

		const prefooterMail             = $('#prefooter-contact-form-mail'              );
		const prefooterMailDanger       = $('#prefooter-contact-form-mail-danger'       );
		const prefooterMailSuccess      = $('#prefooter-contact-form-mail-success'      );
		const prefooterMailDangerHelp   = $('#prefooter-contact-form-mail-danger-help'  );
		const prefooterMailSuccessHelp  = $('#prefooter-contact-form-mail-success-help' );

		const prefooterPhone            = $('#prefooter-contact-form-phone'             );
		const prefooterPhoneDanger      = $('#prefooter-contact-form-phone-danger'      );
		const prefooterPhoneSuccess     = $('#prefooter-contact-form-phone-success'     );
		const prefooterPhoneDangerHelp  = $('#prefooter-contact-form-phone-danger-help' );
		const prefooterPhoneSuccessHelp = $('#prefooter-contact-form-phone-success-help');

		const prefooterTerms            = $('#prefooter-contact-form-terms'             );
		const prefooterTermsDangerHelp  = $('#prefooter-contact-form-terms-danger-help' );

		const name  = prefooterName.val ();
		const mail  = prefooterMail.val ();
		const phone = prefooterPhone.val ();
		const terms = prefooterTerms.val ();

		var errorMessages = {
			nameError: '',
			mailError: '',
			phoneError: '',
			termsError: ''
		}

		// Put hardcoded the success help messages in here.
		var successMessages = {
			nameSuccess: '',
			mailSuccess: '',
			phoneSuccess: '',
			termsSuccess: ''
		}

		// Remove all previous error styles that may or may not exist
		if (prefooterName.hasClass('is-danger'))
			prefooterName.removeClass('is-danger');
		if (!prefooterNameDanger.hasClass('is-hidden'))
			prefooterNameDanger.addClass('is-hidden');
		if (!prefooterNameDangerHelp.hasClass('is-hidden'))
			prefooterNameDangerHelp.addClass('is-hidden');
		if (prefooterName.hasClass('is-success'))
			prefooterName.removeClass('is-success');
		if (!prefooterNameSuccess.hasClass('is-hidden'))
			prefooterNameSuccess.addClass('is-hidden');
		if (!prefooterNameSuccessHelp.hasClass('is-hidden'))
			prefooterNameSuccessHelp.addClass('is-hidden');

		if (prefooterMail.hasClass('is-danger'))
			prefooterMail.removeClass('is-danger');
		if (!prefooterMailDanger.hasClass('is-hidden'))
			prefooterMailDanger.addClass('is-hidden');
		if (!prefooterMailDangerHelp.hasClass('is-hidden'))
			prefooterMailDangerHelp.addClass('is-hidden');
		if (prefooterMail.hasClass('is-success'))
			prefooterMail.removeClass('is-success');
		if (!prefooterMailSuccess.hasClass('is-hidden'))
			prefooterMailSuccess.addClass('is-hidden');
		if (!prefooterMailSuccessHelp.hasClass('is-hidden'))
			prefooterMailSuccessHelp.addClass('is-hidden');

		if (prefooterPhone.hasClass('is-danger'))
			prefooterPhone.removeClass('is-danger');
		if (!prefooterPhoneDanger.hasClass('is-hidden'))
			prefooterPhoneDanger.addClass('is-hidden');
		if (!prefooterPhoneDangerHelp.hasClass('is-hidden'))
			prefooterPhoneDangerHelp.addClass('is-hidden');
		if (prefooterPhone.hasClass('is-success'))
			prefooterPhone.removeClass('is-success');
		if (!prefooterPhoneSuccess.hasClass('is-hidden'))
			prefooterPhoneSuccess.addClass('is-hidden');
		if (!prefooterMailSuccessHelp.hasClass('is-hidden'))
			prefooterMailSuccessHelp.addClass('is-hidden');

		if (prefooterTerms.hasClass('is-danger'))
			prefooterTerms.addClass('is-danger');
		if (!prefooterTermsDangerHelp.hasClass('is-hidden'))
			prefooterTermsDangerHelp.addClass('is-hidden');

		// Validations
		// Validate Name
		if (name === null || name === '') {
			errorMessages.nameError += '- Please fill in your full name';
		} else {
			// Further Validation
			if (name.length < 5)
				errorMessages.nameError += '- The full name must be 5 chars or more';
		}

		// Validate Mail
		if (mail === null || mail === '') {
			errorMessages.mailError += '- Please fill in your email address';
		} else {
			// Further Validation
			if (mail.length < 7) // smallest email address in the world ( b@hh.la )
				errorMessages.mailError += 'The email field must be 7 chars or more';
			else if (!mail.includes('@') || !mail.includes('.') )
				errorMessages.mailError += '- The email you typed is wrong';
		}

		// Validate Phone
		if (phone === null || phone === '') {
			errorMessages.phoneError += '- The telephone field cannot be empty';
		} else {
			// Further Validation
			if (!/^\d+$/.test(phone))
				errorMessages.phoneError += '- The telephone field must contain only digits';
			else if (phone.length < 6)
				errorMessages.phoneError += '- The telephone you entered is too small';
		}

		// Validate Terms
		if (terms !== 'on') {
			errorMessages.termsError += '- Please accept the terms to submit the form';
		}

		// Check the validations results and show messages

		// Name Error Messages
		if ( errorMessages.nameError ) {
			// 1. Make input box Red
			prefooterName.addClass('is-danger');
			prefooterNameDanger.removeClass('is-hidden');
			// 2. Show the Error help text
			prefooterNameDangerHelp.text(errorMessages.nameError);
			prefooterNameDangerHelp.removeClass('is-hidden');
		} else {
			// 1. Make Input box Green
			prefooterName.addClass('is-success');
			prefooterNameSuccess.removeClass('is-hidden');
			// 2. Show the Success help text
			prefooterNameSuccessHelp.text(successMessages.nameSuccess);
			prefooterNameSuccessHelp.removeClass('is-hidden');
		}

		// Mail Error Messages
		if ( errorMessages.mailError ) {
			// 1. Make input boxe Red
			prefooterMail.addClass('is-danger');
			prefooterMailDanger.removeClass('is-hidden');
			// 2. Show the Error help text
			prefooterMailDangerHelp.text(errorMessages.mailError);
			prefooterMailDangerHelp.removeClass('is-hidden');
		} else {
			// 1. Make Input box Green
			prefooterMail.addClass('is-success');
			prefooterMailSuccess.removeClass('is-hidden');
			// 2. Show the Success help text
			prefooterMailSuccessHelp.text(successMessages.mailSuccess);
			prefooterMailSuccessHelp.removeClass('is-hidden');
		}

		// Phone Error Messages
		if ( errorMessages.phoneError ) {
			// 1. Make input boxe Red
			prefooterPhone.addClass('is-danger');
			prefooterPhoneDanger.removeClass('is-hidden');
			// 2. Show the Error help text
			prefooterPhoneDangerHelp.text(errorMessages.phoneError);
			prefooterPhoneDangerHelp.removeClass('is-hidden');
		} else {
			// 1. Make Input box Green
			prefooterPhone.addClass('is-success');
			prefooterPhoneSuccess.removeClass('is-hidden');
			// 2. Show the Success help text
			prefooterPhoneSuccessHelp.text(successMessages.phoneSuccess);
			prefooterPhoneSuccessHelp.removeClass('is-hidden');
		}

		// Terms Error Messages
		if ( errorMessages.termsError ) {
			// 1. Show the Error help text
			prefooterTermsDangerHelp.text(errorMessages.termsError);
			prefooterTermsDangerHelp.removeClass('is-hidden');
		}


		// If nothing change after last submit and at least 1 error, return now.
		if (lastValues[name] === name && lastValues[mail] === mail && lastValues[phone] === phone && lastValues[terms] === terms ||
			(!errorMessages.nameError || !errorMessages.mailError || !errorMessages.phoneError || !errorMessages.termsError) ) {
			setTimeout(function(){
				prefooterSubmit.toggleClass('is-loading');
			}, 250);
			// Append current values to the lastValues for later comparison
			lastValues[name] = name;
			lastValues[mail] = mail;
			lastValues[phone] = phone;
			lastValues[terms] = terms;
			return;
		}

		// Append current values to the lastValues for later comparison
		lastValues[name] = name;
		lastValues[mail] = mail;
		lastValues[phone] = phone;
		lastValues[terms] = terms;

		// Send all the error notifications at once
		// for (var key in errorMessages) {
		// 	if (errorMessages.hasOwnProperty(key) && errorMessages[key]) {
		// 		new jBox('Notice', {
		// 			attributes: {
		// 				x: "right",
		// 				y: "bottom"
		// 			},
		// 			animation: {
		// 				open: "tada",
		// 				close: "zoomIn"
		// 			},
		// 			showCountdown: true,
		// 			delayOnHover: true,
		// 			autoClose: 10000,
		// 			fade: 500,
		// 			// color: 'yellow',
		// 			title: "Σφάλμα Συμπλήρωσης Φόρμας",
		// 			content: errorMessages[key]
		// 		});
		// 	}
		// }

		// If no error messages, then passes !
		if ( !errorMessages.nameError && !errorMessages.mailError && !errorMessages.phoneError && !errorMessages.termsError ) {
			// Passed ! Submit !
			// 1. Submit
			// 2. Send Success notification
			// 3. Success Help Text (white at bottom with green check)
			// 4. Clear the form
			alert('Submitted!');
		}

		setTimeout(function(){
			prefooterSubmit.toggleClass('is-loading');
		}, 450);

	});
});