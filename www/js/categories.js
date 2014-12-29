var categories = angular.module('categories', []);


categories.controller('booksCategoriesCtrl', function($scope, $http){

	$http.get('js/categories.json').success(function(data){
		$scope.categoriesList = data;
		//console.log($scope.categoriesList);
	});
});