'use strict';

/**
 * @ngdoc function
 * @name d3ProjectApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the d3ProjectApp
 */

angular.module('d3ProjectApp')
	.controller('ChartCtrl', ['$scope', function($scope, $http, $state, d3Service, d3Bars){

	$scope.greeting = "Resize the page to see the re-rendering";
	$scope.d3Data = [
		  {name: "Greg", score: 12},
		  {name: "Ari", score: 27},
		  {name: 'Q', score: 7},
		  {name: "Loser", score: 16}
		  
	];

}]);