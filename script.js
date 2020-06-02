'use strict';
(function(){
//import Card from './Card.js';
// переменные
const userName = document.querySelector(".user-info__name");
const userJob = document.querySelector(".user-info__job");
const userAvatar = document.querySelector(".user-info__photo");
const cardPlaces = document.querySelector('.places-list');
const form = document.forms.new;
const formEdit = document.forms.edit;
const closeButtonImg = document.querySelector(".popup__close_img");
const addButton = document.querySelector('.popup__button');
const saveButton = document.querySelector('.popup__button_edit');
const editButton = document.querySelector('.user-info__edit_button');
const userButton = document.querySelector('.user-info__button_form');
const popupForm = document.querySelector('.popup_form');
const popupFormEdit = document.querySelector('.popup_edit');
const popupImg = document.querySelector('.popup_img');
const popupStyle = document.querySelector('.popup__content_img');
const user = document.querySelector('.popup__input_type_user');
const job = document.querySelector('.popup__input_type_job');

// увеличиваем картинку
cardPlaces.addEventListener('click', function(event) {
      if (event.target.classList.contains('place-card__image')) {
      popupImage.open();
      popupStyle.style.backgroundImage = event.target.style.backgroundImage;
    }
    })

closeButtonImg.addEventListener('click', function () {
      popupImage.close();
    })

// создание карточек
const card = new Card ();
const cardList = new CardList (document.querySelector('.places-list'), card);

// обработки запросов

const api = new Api ({
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
    authorization: '1887ef77-ec54-4624-95c5-915a884a09c4',
  }
}, userName, userJob);

    // загрузка данных о пользователе
api.getUserData()
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
    .then((res) => {
   userName.textContent = res.name;
   userJob.textContent = res.about;
   userAvatar.style.backgroundImage = `url(${res.avatar})`;
  })
    .then((res) => {
        userInfo.setUserInfo(user, job);
  })
    .catch((err) => {
      console.log(err);
  });

      //загрузка карточек
api.downloadImages()
    .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    cardList.render(res);
  })
  .catch((err) => {
    console.log(err);
  });

// работа с попапами
const popup = new Popup (popupForm);
  popup.setEventListeners();

// редактирование профиля
const popupProfile = new Popup (popupFormEdit);
  popupProfile.setEventListeners();

const popupImage = new Popup (popupImg);
  popupImage.setEventListeners();

const userInfo = new UserInfo(userName, userJob);

function editProfile(event) {
  event.preventDefault();
  api.updateUserData(user.value, job.value)
      .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })    
      .then((res) => {
        popupProfile.close();
        userInfo.updateUserInfo(user, job);
  })
      .catch((err) => {
        console.log(err);
  });

}

// отправка формы редактирования профиля
formEdit.addEventListener("submit", editProfile);

// валидация формы
const editFormValidate = new FormValidator(formEdit, saveButton);
  editFormValidate.setEventListeners();

// активация кнопки добавления карточки
function activateAddButton(){
  const name = form.elements.name;
  const link = form.elements.link;
  if (name.value.length === 0 || link.value.length === 0){
    addButton.setAttribute('disabled', '');
    addButton.style.color = `rgba(0, 0, 0, .2)`;
    addButton.style.backgroundColor = `#FFFFFF`;
  } else {
    addButton.removeAttribute('disabled');
    addButton.style.backgroundColor = `#000000`;
    addButton.style.color = `#FFFFFF`;
}
}

form.addEventListener('input', activateAddButton);

//отправка формы добавления карточки
form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = form.elements.name;
    const link = form.elements.link;

    cardList.addCard(card.create(name.value, link.value));
    addButton.setAttribute('disabled', '');
    addButton.style.color = `rgba(0, 0, 0, .2)`;
    addButton.style.backgroundColor = `#FFFFFF`;
    form.reset();
});

userButton.addEventListener('click', popup.open);
addButton.addEventListener('click', popup.close);
editButton.addEventListener('click', popupProfile.open);

})()

