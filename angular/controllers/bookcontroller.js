//dont forget to include service function inside this
myApp.controller('bookController', ['$http', 'gotService', '$routeParams' ,function($http,gotService,$routeParams){ //pay special attention to commas here.

	var main=this;
	this.books={};
	this.bookid=$routeParams.bookid;//remember this from routes.js?
	console.log(this.bookid);
	this.baseUrl='https://anapioficeandfire.com/api/';

	this.loadBook = function(){
		gotService.listBook(main.bookid)//pass this to recieve id
		.then(function success(response){
			console.log(response);
			main.books=response.data;
			console.log(main.books);
		})
		return main.books;
	};//end of loadBook
	main.loadBook();
	
}]);