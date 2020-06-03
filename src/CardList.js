'use strict';


export default class CardList {
	constructor (container, card){
		this.container = container;				
		this.card = card;

	}
	addCard(cardElement){		
		this.container.appendChild(cardElement);			
	}
	render (array){
		for( let i = 0; i < array.length; ++i){			
    		this.addCard(this.card.create(array[i].name , array[i].link));
		}
	}	
}


