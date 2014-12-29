var categories = angular.module('categories', []);


categories.controller('booksCategoriesCtrl', function($scope, $http){

	$http.get('js/categories.json').success(function(data){
		$scope.categoriesList = data;
		//console.log($scope.categoriesList);
	});

});

categories.controller('categoryCtrl', function($scope, $http, $location, $rootScope){

	$scope.goBack = function(){
		$location.path("/categories");
	};

	//obtengo el id de la categoria elegida
	$scope.showCategory = function(id){
		$rootScope.bookId = id;
	}

	//llamar 10 libros más recientes de la categoria
	var urlBase = "http://www.etnassoft.com/api/v1/get/?category_id="+$rootScope.bookId+"&num_items=10&callback=JSON_CALLBACK";

	$http({method:"JSONP", url: urlBase}).success(function(data){
		$scope.results = data;
		//console.log($scope.results);
	});
});