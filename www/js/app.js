
var app = angular.module('opensearcher', ['ionic', 'categories', 'search'])

app.run(function($ionicPlatform,$ionicLoading,$rootScope) {

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

  //interceptor http para mensaje de carga
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show({template: 'Cargando resultados'})
  })

  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
  })

});

//Todas las rutas para la aplicacion

app.config(function($stateProvider,$urlRouterProvider,$httpProvider) {
  //ruta para la página inicial
  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'home.html',
    controller: 'booksListCtrl'
  });

  $stateProvider.state('search',{
  	url: '/search',
  	templateUrl: 'search.html',
  	controller: 'booksSearchCtrl'
  });

  $stateProvider.state('categories', {
  	url: '/categories',
  	templateUrl: 'categories.html',
  	controller: 'booksCategoriesCtrl'
  });

  $stateProvider.state('about', {
  	url: '/about',
  	templateUrl: 'about.html'
  });

  $stateProvider.state('category', {
  	url: '/category',
  	templateUrl: 'category_view.html',
  	controller: 'categoryCtrl'
  });

  $urlRouterProvider.otherwise("/");

  //interceptor de peticiones http para mostrar la pantalla de carga
  $httpProvider.interceptors.push(function($rootScope) {
    return {
      request: function(config) {
        $rootScope.$broadcast('loading:show')
        return config
      },
      response: function(response) {
        $rootScope.$broadcast('loading:hide')
        return response
      }
    }
  });

});

app.controller("booksListCtrl", function($scope, $http){

	var apiUrl = "http://www.etnassoft.com/api/v1/get/"

	//ULTIMOS LIBROS EN PROGRAMACION
	var recentDevelopment = apiUrl+"?category=desarrollo_web&num_items=5&callback=JSON_CALLBACK";

	$http({method:'JSONP', url:recentDevelopment})
	.success(function(data){
		$scope.devBooksData = data;
		//console.log($scope.devBooksData);
	});

	//ULTIMOS LIBROS EN ACADEMICOS
	var recentSchool = apiUrl+"?category=textos-academicos-biblioteca&num_items=5&callback=JSON_CALLBACK";

	$http({method:'JSONP', url:recentSchool})
	.success(function(data){
		$scope.schoolBooksData = data;
		//console.log($scope.bookData);
	});

	//ULTIMOS LIBROS EN LEYES
	var recentLaw = apiUrl+"?category=libros_aspecotos_legales&num_items=5&callback=JSON_CALLBACK";

	$http({method:'JSONP', url:recentLaw})
	.success(function(data){
		$scope.lawBooksData = data;
		//console.log($scope.bookData);
	});

});

app.controller("menuCtrl", function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
});