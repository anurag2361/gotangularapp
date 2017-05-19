myApp.directive('bookData', function(){ //bookData got from list-view.html
	// Runs during compile
	return {
		
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// templateUrl: '',
		restrict:"E",
		templateUrl:"angular/views/allBooks.html",
		
	};
});

myApp.directive('houseData', function(){
	// Runs during compile
	return {
		
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// templateUrl: '',
		restrict:"E",
		templateUrl:"angular/views/allHouses.html",
		
	};
});

myApp.directive('characterData', function(){
	// Runs during compile
	return {
		
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// templateUrl: '',
		restrict:"E",
		templateUrl:"angular/views/allCharacters.html",
		
	};
});