// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('opensearcher', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//Todas las rutas para la aplicacion

app.config(function($stateProvider,$urlRouterProvider) {
  //ruta para la página inicial
  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'home.html',
    controller: 'booksListCtrl',
  });

  $stateProvider.state('search',{
  	url: '/search',
  	templateUrl: 'search.html'
  });

  $stateProvider.state('categories', {
  	url: '/categories',
  	templateUrl: 'categories.html'
  });

  $stateProvider.state('about', {
  	url: '/about',
  	templateUrl: 'about.html'
  });

  $urlRouterProvider.otherwise("/");

});

app.controller("booksListCtrl", function($scope, $http){

	//ULTIMOS LIBROS EN PROGRAMACION
	var recentDevelopment = "http://www.etnassoft.com/api/v1/get/?category=desarrollo_web&num_items=5&callback=JSON_CALLBACK";

	$http({method:'JSONP', url:recentDevelopment})
	.success(function(data){
		$scope.bookData = data;
		//console.log($scope.bookData);
	});

});

app.controller("menuCtrl", function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
});