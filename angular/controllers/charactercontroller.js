myApp.controller('characterController', ['$http', 'gotService', '$routeParams', function($http,gotService,$routeParams){ //pay special attention to commas here.

	var main=this;
	this.character={};
	this.characterid=$routeParams.characterid;

	this.loadCharacter=function(){
		gotService.listCharacter(main.characterid)
		.then(function success(response){
			main.character=response.data;
			console.log(main.character);
		});
		return main.character;
	}//end load character

	main.loadCharacter();
}]);