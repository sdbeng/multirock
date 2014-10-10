/**
*  Module
*
* Description

hover over explaining:
we haven’t yet created matchesFactor or setActiveFactors methods
in our controller, we can still get an idea of what’s going on here.
Remember, when users hover over a cell in the table, we want the rows and
columns that are multiplied together to get the product to get the .hover class.
For instance, if the user set the limit for the table to 10, then hovered over 9,
the third column and third row would get the .hover class.

To implement this, our template code says that when a user hovers the mouse over
 a cell in the table, to run a function that will set values for the factors used
 to get the product in that cell. This function will get passed whatever the value
 of numberA is from the tr ng-repeat and whatever the value of numberB is from the
 td ng-repeat. ng-class will then put the .hover class on all cells for which
 matchesFactor returns true (i.e., if a cell’s a or b value matches the current
 active factor, then we’ll apply our .hover class to that cell).
*/
angular.module('myApp', [])

.controller('DisplayCtrl', function($scope) {
	$scope.$on('displayData', function(event,data) {
		$scope.content = data;
	});
})
.controller('MultiplicationCtrl', function($scope, $attrs, $rootScope){
	// $scope.numbers = [1,2,3,4,5,6,7,8,9,10];

	//Now, let's declare a function to give users a chance to enter x
	function populateNumbers(x) {
		var numbers = [];
		for (var i = 0; i < x; i++) {
			numbers[i] = i + 1;
	};
	return numbers;
}
	
	$scope.compute = function(a,b) {
		return a * b;
	};

	$scope.$watch('numberLimit', function(limit){
		$scope.numbers = populateNumbers(limit);
	});

	$scope.numberLimit = $attrs.initialNumberLimit || 10;

	// see hover over explaining
	var activeFactorA, activeFactorB;
    $scope.setActiveFactors = function(a, b) {
        activeFactorA = a;
        activeFactorB = b;
    };

    $scope.matchesFactor = function (a, b) {
        return a === activeFactorA || b === activeFactorB;
    };
    
    $scope.clearActiveFactors = function() {
    	activeFactorA = activeFactorB = null;
	};

	$scope.setActiveNumber = function(number) {
		$rootScope.$broadcast('displayData', number);
	};

});





