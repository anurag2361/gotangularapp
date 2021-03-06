//var myApp=angular.module('gotApp',[ngRoute]);
myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'angular/views/list-view.html',
		controller:'mainController',
		controllerAs:'gotList'//use this alias in list-view.html
	})

	.when('/view-book/:bookid',{              //view-book is defined by us.Dont forget to put / before view
		templateUrl:'angular/views/book-view.html',
		controller:'bookController',
		controllerAs:'gotBook'
	})

	.when('/view-character/:characterid',{
		templateUrl:'angular/views/character-view.html',
		controller:'characterController',
		controllerAs:'gotCharacter'
	})

	.when('/view-house/:houseid',{
		templateUrl:'angular/views/house-view.html',
		controller:'houseController',
		controllerAs:'gotHouse'
	})

	
}]);