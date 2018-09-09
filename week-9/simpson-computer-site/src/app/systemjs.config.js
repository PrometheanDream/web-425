var formApp = angular.module('formApp', [])

    .controller('formController', function($scope) {

        // we will store our form data in this object
        $scope.formData = {};
        $scope.parseFloat = parseFloat;


    });

    var myApp = angular.module('myApp', []);
myApp.controller("myCtrl", function ($scope) {
    $scope.sum = function (num1, num2) {
        $scope.addition = parseInt(num1) + parseInt(num2);
    }
});