var svgTestApp = angular.module('svgTestApp', []);

svgTestApp.controller('SVGController', function ($scope) {
  var tick = 10;
  $scope.tick = tick;
  $scope.dimensions = {
    width: tick,
    height: tick
  };
  $scope.width = 800;
  $scope.height = 600;
  $scope.count = 0;
  $scope.trail = [];


  setInterval(function () {
    var count = $scope.count;
    var tick = $scope.tick;
    var width = $scope.width;

    $scope.trail.push({
      x: count % width,
      y: Math.floor(count / width) * tick
    });

    $scope.count = count + tick;

    $scope.$apply();
  }, 0);
});
