/**
 * Created by Mersalin on 5/13/2015.
 */
/* (function() { */
var app = angular.module("tastyDine", ['ui.bootstrap']);

app.run(function($rootScope) {
    $rootScope.loginUser = 'Login';
    $rootScope.isActive = false;
});

app.controller('logoutController',['$scope', function($scope){

}]);

app.controller('loginController', ['$scope', '$http', '$rootScope'/*, '$modalInstance'*/, function ($scope, $http, $rootScope /*, $modalInstance*/) {
    $scope.loginStatus=true;
    $scope.loginMessage="";
    $scope.loginClicked = function () {
     /*   if($rootScope.isActive) {
            $('#login-modal-body').hide();
        } else {*/
        $http({
            method: 'GET',
            url: 'http://localhost:8080/loginValidation?user=' + $scope.username + '&password=' + $scope.loginpass
        }).
            success(function (data, status, headers, config) {
                console.log(data.statusMessage);
                //set view model or do something.
                $scope.loginData = data;
                if(data.statusCode==200) {
                    $scope.loginStatus=true;
                    $scope.loginMessage=data.statusMessage;
                    $('#login-modal').modal('hide'); //To hide the modal box on login success
                    $rootScope.loginUser=data.userName;
                    $rootScope.isActive=true;
                } else {
                    $scope.loginStatus=false;
                    $scope.loginMessage=data.statusMessage;
                }
                $scope.username="";//Emptying the form
                $scope.loginpass="";
                alert("success" + data.statusMessage);
                //$modalInstance.dismiss(close);
            }).
            error(function (data, status, headers, config) {
                function hello(data) {
                    console.log(data.found);
                    //set view model or do something.
                    $scope.loginData = data;
                    if(data.statusCode==200) {
                        $scope.loginStatus=true;
                    } else {
                        $scope.loginStatus=false;
                    }
                    alert("error:" + data);
                }
            });
    }/*}*/
}]);
