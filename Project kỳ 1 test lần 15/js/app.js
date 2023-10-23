var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    console.log("My controller....");
    
    $scope.products=[
        {name:"Product one"},
    
    ];   
    $scope.addProduct= function(){
        $scope.message="Add Product successfully";
    };
    $scope.clearMessage=function(){
        $scope.message="";
    };
});