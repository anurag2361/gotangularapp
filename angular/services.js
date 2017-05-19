myApp.factory('gotService', function gotInfo($http){
	var gotAPI={};
	var baseUrl='https://anapioficeandfire.com/api/';

	gotAPI.listBooks=function(){

		return $http({
			method:'GET',
			url:baseUrl+'books'
		})

	}//end books list

	gotAPI.listHouses=function(){

		return $http({
			method:'GET',
			url:baseUrl+'houses'
		})
	}//end houses list

	gotAPI.listCharacters=function(){
		return $http({
			method:'GET',
			url:baseUrl+'characters'
		})
	}//end characters list

	gotAPI.listBook=function(bookid){  //to load a book we need a bookid which we created in bookcontroller by routeparams.

		return $http({
			method:'GET',
			url:baseUrl+'books/'+bookid //in json,books have id 1,2.. in url key.
		})

	}//end book

	gotAPI.listCharacter=function(characterid){

		return $http({
			method:'GET',
			url:baseUrl+'characters/'+characterid
		})
	}//end character

	gotAPI.listHouse=function(houseid){

		return $http({
			method:'GET',
			url:baseUrl+'houses/'+houseid
		})
	}//end house

	return gotAPI;
});