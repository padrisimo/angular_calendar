/*

  #####  ####     #####          ####  #####
 ##   ##  ##       ## ##          ##  ##   ##
 ##   ##  ##       ##  ##         ##  ##
 ##   ##  ##       ##  ##         ##   #####
 ##   ##  ##   #   ##  ##     ##  ##       ##
 ##   ##  ##  ##   ## ##      ##  ##  ##   ##
  #####  #######  #####        ####    #####	

var diasMes = [];

var year = 2016;

var month =2;

var num = new Date(year, month, 0).getDate();

for(i=0;i<=num;i++){
 
  diasMes.push(i);
  
}

console.log(diasMes);

*/


/*
 	   ##     ##   ##     ####    ##   ##   ####        ##     ######
 	  ####    ###  ##    ##  ##   ##   ##    ##        ####     ##  ##
 	 ##  ##   #### ##   ##        ##   ##    ##       ##  ##    ##  ##
 	 ##  ##   ## ####   ##        ##   ##    ##       ##  ##    #####
 	 ######   ##  ###   ##  ###   ##   ##    ##   #   ######    ## ##
 	 ##  ##   ##   ##    ##  ##   ##   ##    ##  ##   ##  ##    ##  ##
 	 ##  ##   ##   ##     #####    #####    #######   ##  ##   #### ###

*/

var calendario = angular.module('calendario', []);

calendario.controller('yoControlo', function yoControlo($scope){
   
    $scope.diasMes = [];

    $scope.year = 1983;

	$scope.month = 11;

	$scope.cambiaMes = function(){

		$scope.num = new Date($scope.year, $scope.month, 0).getDate();

		$scope.diasMes = [];

		for(i=0;i<=$scope.num-1;i++){

		  $scope.diasMes.push(i+1);
		  console.log($scope.diasMes);
		  
		}


	}

	$scope.cambiaMes();

	
    
});