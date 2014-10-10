/**
*  Module
*
* Description
*/
angular.module('myApp', [])
.controller('MultiplicationCtrl', ['$scope', '$attrs', function($scope, $attrs){
	// $scope.numbers = [1,2,3,4,5,6,7,8,9,10];
	//let's declare a function to give users a chance to enter x
	function populateNumbers(x) {
		var numbers = [];
		for (var i = 0; i < x; i++) {
			numbers[i] = i + 1;
	};
	return numbers;
}
	$scope.numberLimit = $attrs.initialNumberLimit || 10;
	$scope.numbers = populateNumbers($scope.numberLimit);

	$scope.compute = function(a,b) {
		return a * b;
	};

}]);