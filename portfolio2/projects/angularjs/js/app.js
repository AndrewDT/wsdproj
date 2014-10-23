angular.module("MyApp", []).controller("DBcontroller",  function ($scope, dataService) {
	$scope.employee;
	
	$scope.employeeArray = dataService.getEmployee();
	
	$scope.addEmployee = function(){
		dataService.addEmployee($scope.employee);
		
		$scope.employee = "";
	};
	
	
	$scope.removeEmployee = function(deletedEmployee){
		dataService.removeEmployee(deletedEmployee);
	};
	
});
