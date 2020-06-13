'use strict';

export default class FormValidator{
	constructor(form, button){
		this.form = form;
		this.button = button;
		this.inputs = Array.from(this.form.querySelectorAll(`input`));
	}
	setEventListeners(){
		this.inputs.forEach(input => {
            input.addEventListener('input', this.checkInputValidity);

	})
		this.setSubmitButtonState(this.form);
}
	checkInputValidity(event){
		const button = this.form.querySelector('.popup__button');
		const errorElement = event.target.nextElementSibling;
	  	if (!event.target.validity.valid){
	    errorElement.textContent = event.target.validationMessage;
	    errorElement.classList.add('popup_edit-error-is-opened');
	    button.setAttribute('disabled', '');
	    return false;
	  } else {
	    errorElement.classList.remove('popup_edit-error-is-opened');
	    errorElement.textContent = '';
	    button.removeAttribute('disabled');
	}

}
	setSubmitButtonState(form){
		if (!this.form.checkValidity()){
		    this.button.setAttribute('disabled', '');
		} else {
		    this.button.removeAttribute('disabled');
		}
}

}


