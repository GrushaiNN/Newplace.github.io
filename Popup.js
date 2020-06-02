'use strict';


class Popup {
    constructor(popupElement) {
      this.popupElement = popupElement;
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
    }
    setEventListeners(event) {
      this.popupElement.querySelector('.popup__close').addEventListener('click', this.close);
    }
    open() {
      this.popupElement.classList.add('popup_is-opened');
    }
    close() {
      this.popupElement.classList.remove('popup_is-opened');
    }
}



