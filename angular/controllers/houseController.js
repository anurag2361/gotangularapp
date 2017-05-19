myApp.controller('houseController', ['$http', 'gotService', '$routeParams' ,function($http, gotService,$routeParams){//pay special attention to commas here.

	var main=this;
	this.house={};
	this.houseid=$routeParams.houseid;

	this.loadHouse=function(){
		gotService.listHouse(main.houseid)
		.then(function success(response){
			main.house=response.data;
			console.log(main.house);

		})
		return main.house;
	};//end loadHouse
	
	main.loadHouse();
}]);