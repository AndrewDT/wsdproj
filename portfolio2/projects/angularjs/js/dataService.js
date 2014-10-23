angular.module("MyApp").service("dataService", function(){
	
	var employeeArray = [
		{
			name: "Tracy Felton",
			street: "2126 16th Street",
			city: "Bedford",
			state: "Indiana",
			zip: 47421	
		},
		{
			name: "Trisha Battaglia",
			street: "483 H Street",
			city: "Bedford",
			state: "Indiana",
			zip: 47421
		},
		{
			name: "Doug Buffington",
			street: "356 15th Street",
			city: "Bedford",
			state: "Indiana",
			zip: 47421
		},
		{
			name: "Bonnie Morgan-Potter",
			street: "485 Washington Avenue",
			city: "Bedford",
			state: "Indiana",
			zip: 47421
		}
	];
	
	this.getEmployee = function(){
		var str = localStorage.getItem("EmployeeLS");
		employeeArray = JSON.parse(str) || employeeArray;
		return employeeArray;
	}
	
	this.addEmployee = function(pEmployee){
		if(pEmployee.name === undefined || pEmployee.street === undefined || pEmployee.city === undefined || pEmployee.state === undefined || pEmployee.zip === undefined){
			return false
		}else{
		employeeArray.push(pEmployee);
		var str = JSON.stringify(employeeArray);
		localStorage.setItem("EmployeeLS", str);
		}
	}
	
	this.removeEmployee = function(pEmployee){
		employeeArray.splice(employeeArray.indexOf(pEmployee), 1);
		var str = JSON.stringify(employeeArray);
		localStorage.setItem("EmployeeLS", str);
	}
	
});
