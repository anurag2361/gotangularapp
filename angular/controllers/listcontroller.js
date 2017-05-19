
myApp.controller('mainController', ['$http','gotService' ,function($http,gotService){  //pay special attention to commas here.

	var main=this;
	this.books=[];
	this.characters=[];//these responses will be an array, so three arrays initialized.
	this.houses=[];
	this.bookShow=true;
	this.characterShow=false;
	this.houseShow=false;
	this.paginationLengthForCharacters = 50; //
    this.paginationLengthForHouses = 20; //Here we used pagination because the data is of a huge amount.

	//functions to show and hide books,characters and houses

	this.shBooks=function(){
		main.bookShow=main.bookShow?false:true; //equates to if(main.bookShow='false'){main.bookShow=true}else{main.bookShow=false}
		main.characterShow=false;
		main.houseShow=false;
	};

	this.shHouse=function(){
		main.houseShow=main.houseShow?false:true;
		main.bookShow=false;
		main.characterShow=false;
	};

	this.shCharacter=function(){
		main.characterShow=main.characterShow?false:true;
		main.bookShow=false;
		main.houseShow=false;
	};

	//function to get all books
	this.getAllBooks=function(){
		gotService.listBooks()   //calling from services.js
		.then(function success(response){
			
			main.books.push.apply(main.books, response.data);//here since we have taken an array books above, when the books are recieved through json, they are not added at once but they need to be pushed one by one to the arry.
		})
		return main.books;
	};// end getAllBooks
	this.getAllBooks();//calling for execution

	//function to get all houses
	this.getAllHouses=function(){
		for (var i = 1; i < main.paginationLengthForHouses; i++) {
			gotService.listHouses([i]).then(function success(response) {
				if (response.data.length > 0) {
					main.houses.push.apply(main.houses, response.data);
				}
			},
			function errorCallback(response) {
				alert("some error occurred. Check the console.");
				console.log(response);
			});
		}
	};//end getAllHouses
	this.getAllHouses();

	//function to get all characters
	this.getAllCharacters=function(){
		for (var i = 1; i < main.paginationLengthForCharacters; i++) {
			gotService.listCharacters([i]).then(function success(response) {
				if (response.data.length > 0) {
					main.characters.push.apply(main.characters, response.data);
				}
			},
			function errorCallback(response) {
				alert("some error occurred. Check the console.");
				console.log(response);
			});
		}
	};//end getAllCharacters
	this.getAllCharacters();

	console.log(main.books);
	console.log(main.houses);
	console.log(main.characters);

}]);  //maincontroller end