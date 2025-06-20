angular.module('registrationApp', [])
  .controller('FormController', function($scope) {
    $scope.user = {};
    $scope.submitted = false;

    $scope.submitForm = function() {
      if ($scope.registrationForm.$valid && $scope.user.agree) {
        $scope.submitted = true;
      } else {
        $scope.submitted = false;
      }
    };
  });