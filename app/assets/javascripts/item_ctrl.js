(function() {
  "use strict";

  angular.module("app").controller("itemCtrl", function($scope) {
    $scope.item = [
                            {
                              text: "dishes",
                              completed: false
                            },
                            {
                              text: "laundry",
                              completed: false
                            },
                            {
                              text: "dust",
                              completed: false
                            }
                           ];
  });
}());