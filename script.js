
  angular.module('ngSwipeLeftExample', ['ngTouch'])
    .controller('SampleSwipe', ['$scope', '$window', function($scope, $window) {
      $scope.var1=true;      
      $scope.delete = function() {
        $scope.var1=false;
      };
    }]);
