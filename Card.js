'use strict';

 class Card {
	
	constructor (name, link){
		this.name = name;
		this.link = link;		
	}

	setEventListeners() {	
			
    	this.cardElement.addEventListener('click', this.like);
    	this.deleteButton.addEventListener('click', this.remove);
	}
	
	like (event){       
       if (event.target.classList.contains('place-card__like-icon')) {
          event.target.classList.toggle('place-card__like-icon_liked');
       }
	}
	remove (event){		
  			const card = event.target.parentElement.parentElement;
			card.parentElement.removeChild(card);
			
	}
	create (name, link){
	  const cardElement = document.createElement('div');
	  const cardImage = document.createElement('div');
	  const deleteButton = document.createElement('button');
	  const description = document.createElement('div');
	  const cardName = document.createElement('h3');
	  const likeButton = document.createElement('button');

	  cardElement.classList.add('place-card');
	  cardImage.classList.add('place-card__image');
	  cardImage.style.backgroundImage = `url(${link})`;
	  deleteButton.classList.add('place-card__delete-icon');
	  description.classList.add('place-card__description');
	  cardName.classList.add('place-card__name');
	  cardName.textContent = name;
	  likeButton.classList.add('place-card__like-icon');
		  
	  
	  cardElement.appendChild(cardImage);
	  cardElement.appendChild(description);
	  cardImage.appendChild(deleteButton);  
	  description.appendChild(cardName);
	  description.appendChild(likeButton);
	  
	  this.deleteButton = deleteButton;
	  this.cardElement = cardElement;
	  this.setEventListeners();
	  return cardElement;
	}
	
}




