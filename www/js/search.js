var search = angular.module('search', []);

search.controller('booksSearchCtrl', function($scope, $http, $rootScope){

	$scope.getKeywords = function(keywords){

		$scope.keywords = keywords;

		var searchUrl = "http://www.etnassoft.com/api/v1/get/?keyword="+$scope.keywords+"&num_items=16&callback=JSON_CALLBACK";
		//console.log(searchUrl);

		$http({method:"JSONP", url: searchUrl}).success(function(data){
			$rootScope.searchResults = data;
			//console.log($rootScope.searchResults);
		});

	};



});